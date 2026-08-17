"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash, FaBoxOpen } from "react-icons/fa";

export default function ManageProductsClient() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      if (res.ok) setProducts(data.products || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" });
      if (res.ok) setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/products", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: editingProduct._id,
          price: editingProduct.price,
          stock: editingProduct.stock,
          discount: editingProduct.discount,
        }),
      });

      if (res.ok) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? editingProduct : p))
        );
        setEditingProduct(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-primary loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-7xl">
      <h1 className="mb-6 font-black text-2xl">Manage Products ({products.length})</h1>

      <div className="bg-base-100 shadow-sm border border-base-200 rounded-3xl overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200/50 text-xs">
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-base-200/30">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="relative w-12 h-12 mask mask-squircle">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-sm line-clamp-1">{p.title}</p>
                      <p className="text-xs text-base-content/60">{p.bangla}</p>
                    </div>
                  </div>
                </td>
                <td><span className="font-bold text-xs badge badge-ghost">{p.category}</span></td>
                <td className="font-black text-primary">৳{p.price}</td>
                <td>
                  <span className={`badge font-bold text-xs ${p.stock > 0 ? "badge-success text-white" : "badge-error text-white"}`}>
                    {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
                  </span>
                </td>
                <td className="text-center">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setEditingProduct(p)} className="text-info btn btn-square btn-ghost btn-xs">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(p._id)} className="text-error btn btn-square btn-ghost btn-xs">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Edit Modal */}
      {editingProduct && (
        <dialog className="modal modal-open">
          <div className="rounded-3xl max-w-md modal-box">
            <h3 className="mb-4 font-black text-lg">Edit Product Info</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <div>
                <label className="font-bold text-xs label">Price (৳)</label>
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  className="rounded-xl w-full input input-bordered"
                />
              </div>
              <div>
                <label className="font-bold text-xs label">Stock</label>
                <input
                  type="number"
                  value={editingProduct.stock}
                  onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
                  className="rounded-xl w-full input input-bordered"
                />
              </div>
              <div>
                <label className="font-bold text-xs label">Discount (%)</label>
                <input
                  type="number"
                  value={editingProduct.discount || 0}
                  onChange={(e) => setEditingProduct({ ...editingProduct, discount: e.target.value })}
                  className="rounded-xl w-full input input-bordered"
                />
              </div>
              <div className="modal-action">
                <button type="button" onClick={() => setEditingProduct(null)} className="rounded-xl btn btn-sm">Cancel</button>
                <button type="submit" className="rounded-xl text-white btn btn-primary btn-sm">Save Changes</button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}