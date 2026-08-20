"use client";

import React, { useEffect, useState } from "react";
import { FaClock, FaTruck, FaCheckCircle, FaTimesCircle, FaEye, FaCreditCard } from "react-icons/fa";

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

  const handleStatusChange = async (orderId, newStatus, isPaymentStatus = false) => {
    setUpdatingId(orderId);
    try {
      const payload = { orderId };
      if (isPaymentStatus) {
        payload.paymentStatus = newStatus;
      } else {
        payload.orderStatus = newStatus;
      }

      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((ord) => {
            if (ord._id === orderId || ord.orderId === orderId) {
              return isPaymentStatus
                ? { ...ord, paymentStatus: newStatus }
                : { ...ord, orderStatus: newStatus };
            }
            return ord;
          })
        );

        // Update selected modal state if open
        if (selectedOrder && (selectedOrder._id === orderId || selectedOrder.orderId === orderId)) {
          setSelectedOrder((prev) => ({
            ...prev,
            ...(isPaymentStatus ? { paymentStatus: newStatus } : { orderStatus: newStatus }),
          }));
        }
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
        return <span className="badge badge-warning gap-1 text-white font-bold"><FaClock /> Processing</span>;
      case "Delivered":
        return <span className="badge badge-success gap-1 text-white font-bold"><FaCheckCircle /> Delivered</span>;
      case "Cancelled":
        return <span className="badge badge-error gap-1 text-white font-bold"><FaTimesCircle /> Cancelled</span>;
      default:
        return <span className="badge badge-info gap-1 text-white font-bold"><FaTruck /> Pending</span>;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-black">Order Management</h1>
          <p className="text-sm text-base-content/70">
            Total Orders: <span className="font-bold text-primary">{orders.length}</span>
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-base-100 rounded-3xl border border-base-200 shadow-sm">
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
                <td colSpan="6" className="text-center py-8 text-base-content/60">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-base-200/30 transition-all">
                  <td className="font-mono text-xs font-bold">
                    {order.orderId || `#${order._id.slice(-6).toUpperCase()}`}
                  </td>
                  <td>
                    <div>
                      <p className="font-bold text-sm">
                        {order.shippingAddress?.fullName || order.shippingAddress?.name || "N/A"}
                      </p>
                      <p className="text-xs text-base-content/60">
                        {order.shippingAddress?.phone || order.userEmail}
                      </p>
                    </div>
                  </td>
                  <td className="font-black text-primary">
                    ৳{order.totalAmount || 0}
                  </td>
                  <td>{getStatusBadge(order.orderStatus || "Pending")}</td>
                  <td className="text-xs text-base-content/70">
                    {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center items-center gap-2">
                      {/* Change Order Status Dropdown */}
                      <select
                        value={order.orderStatus || "Pending"}
                        disabled={updatingId === order._id}
                        onChange={(e) => handleStatusChange(order._id, e.target.value, false)}
                        className="select select-bordered select-xs rounded-xl font-bold"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="btn btn-circle btn-ghost btn-xs text-primary"
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
          <div className="modal-box rounded-3xl max-w-2xl">
            <h3 className="font-black text-lg mb-4 border-b pb-2">
              Order Details ({selectedOrder.orderId || `#${selectedOrder._id.slice(-6).toUpperCase()}`})
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3 bg-base-200/50 p-4 rounded-2xl">
                <div>
                  <p className="text-xs text-base-content/60">Customer Name</p>
                  <p className="font-bold">
                    {selectedOrder.shippingAddress?.fullName ||
                      selectedOrder.shippingAddress?.name ||
                      "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Phone</p>
                  <p className="font-bold">
                    {selectedOrder.shippingAddress?.phone || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Email</p>
                  <p className="font-bold">{selectedOrder.userEmail || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Payment Method</p>
                  <p className="font-bold capitalize">{selectedOrder.paymentMethod || "N/A"}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-base-content/60">Address</p>
                  <p className="font-bold">
                    {selectedOrder.shippingAddress?.address || selectedOrder.shippingAddress?.fullAddress || "N/A"}
                    {selectedOrder.shippingAddress?.district ? `, ${selectedOrder.shippingAddress.district}` : ""}
                  </p>
                </div>
                {selectedOrder.orderNotes && (
                  <div className="col-span-2">
                    <p className="text-xs text-base-content/60">Order Notes</p>
                    <p className="font-bold italic">{selectedOrder.orderNotes}</p>
                  </div>
                )}
              </div>

              {/* Payment Details Section (bKash/Nagad) */}
              {selectedOrder.paymentDetails && (
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 font-bold text-primary">
                    <FaCreditCard />
                    <span>Transaction Information ({selectedOrder.paymentMethod?.toUpperCase()})</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-base-content/60">Sender Phone:</span>{" "}
                      <span className="font-bold">{selectedOrder.paymentDetails.senderPhone || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">TrxID:</span>{" "}
                      <span className="font-mono font-bold bg-base-200 px-2 py-0.5 rounded text-primary">
                        {selectedOrder.paymentDetails.trxId || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Status Update Controls */}
              <div className="flex justify-between items-center bg-base-200/30 p-3 rounded-2xl border border-base-200">
                <span className="font-bold text-xs">Payment Verification Status:</span>
                <select
                  value={selectedOrder.paymentStatus || "Unpaid"}
                  disabled={updatingId === selectedOrder._id}
                  onChange={(e) => handleStatusChange(selectedOrder._id, e.target.value, true)}
                  className="select select-bordered select-xs rounded-xl font-bold"
                >
                  <option value="Unpaid">Unpaid</option>
                  <option value="Pending Verification">Pending Verification</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>

              <div>
                <p className="font-bold mb-2">Items Ordered:</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-base-100 border p-2 rounded-xl text-xs">
                      <span>{item.title || item.name} (x{item.quantity})</span>
                      <span className="font-bold text-primary">৳{(item.price || 0) * (item.quantity || 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-action">
              <button onClick={() => setSelectedOrder(null)} className="btn btn-sm rounded-xl">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}