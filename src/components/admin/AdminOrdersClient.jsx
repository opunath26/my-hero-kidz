"use client";

import React, { useEffect, useState } from "react";
import { FaClock, FaTruck, FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa";

export default function AdminOrdersClient() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      if (res.ok) {
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdatingId(orderId);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: newStatus }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((ord) =>
            ord._id === orderId ? { ...ord, status: newStatus } : ord
          )
        );
      }
    } catch (error) {
      console.error("Status update error:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Processing":
        return <span className="gap-1 font-bold text-white badge badge-warning"><FaClock /> Processing</span>;
      case "Delivered":
        return <span className="gap-1 font-bold text-white badge badge-success"><FaCheckCircle /> Delivered</span>;
      case "Cancelled":
        return <span className="gap-1 font-bold text-white badge badge-error"><FaTimesCircle /> Cancelled</span>;
      default:
        return <span className="gap-1 font-bold text-white badge badge-info"><FaTruck /> Pending</span>;
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
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="font-black text-2xl">Order Management</h1>
          <p className="text-sm text-base-content/70">
            Total Orders: <span className="font-bold text-primary">{orders.length}</span>
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-base-100 shadow-sm border border-base-200 rounded-3xl overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200/50 text-xs">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-8 text-base-content/60 text-center">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-base-200/30 transition-all">
                  <td className="font-mono font-bold text-xs">
                    #{order._id.slice(-6).toUpperCase()}
                  </td>
                  <td>
                    <div>
                      <p className="font-bold text-sm">{order.shippingDetails?.name || "N/A"}</p>
                      <p className="text-xs text-base-content/60">{order.shippingDetails?.phone}</p>
                    </div>
                  </td>
                  <td className="font-black text-primary">
                    ৳{order.totalAmount || order.total || 0}
                  </td>
                  <td>{getStatusBadge(order.status || "Pending")}</td>
                  <td className="text-xs text-base-content/70">
                    {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center items-center gap-2">
                      {/* Change Status Dropdown */}
                      <select
                        value={order.status || "Pending"}
                        disabled={updatingId === order._id}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="rounded-xl font-bold select-bordered select-xs select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-primary btn btn-circle btn-ghost btn-xs"
                        title="View Order Details"
                      >
                        <FaEye className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <dialog className="modal modal-open">
          <div className="rounded-3xl max-w-2xl modal-box">
            <h3 className="mb-4 pb-2 border-b font-black text-lg">
              Order Details (#{selectedOrder._id.slice(-6).toUpperCase()})
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="gap-2 grid grid-cols-2 bg-base-200/50 p-4 rounded-2xl">
                <div>
                  <p className="text-xs text-base-content/60">Customer Name</p>
                  <p className="font-bold">{selectedOrder.shippingDetails?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Phone</p>
                  <p className="font-bold">{selectedOrder.shippingDetails?.phone}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-base-content/60">Address</p>
                  <p className="font-bold">{selectedOrder.shippingDetails?.address}, {selectedOrder.shippingDetails?.city}</p>
                </div>
              </div>

              <div>
                <p className="mb-2 font-bold">Items Ordered:</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-base-100 p-2 border rounded-xl text-xs">
                      <span>{item.title || item.name} (x{item.quantity})</span>
                      <span className="font-bold text-primary">৳{(item.price || 0) * (item.quantity || 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-action">
              <button onClick={() => setSelectedOrder(null)} className="rounded-xl btn btn-sm">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}