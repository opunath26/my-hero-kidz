"use client";

import React from "react";
import { FaMoneyBillWave, FaMobileAlt, FaInfoCircle } from "react-icons/fa";

const PaymentMethods = ({ formData, setFormData, handleChange, grandTotal }) => {
  const BKASH_NUMBER = "01700000000";
  const NAGAD_NUMBER = "01800000000";

  const handleMethodChange = (method) => {
    if (formData.paymentMethod !== method) {
      setFormData((prev) => ({
        ...prev,
        paymentMethod: method,
        paymentSenderPhone: "",
        paymentTrxId: "",
      }));
    }
  };

  return (
    <div className="space-y-4 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
      <div className="flex items-center gap-3 pb-3 border-base-200 border-b">
        <FaMobileAlt className="text-primary text-xl" />
        <h2 className="font-bold text-lg">Payment Method</h2>
      </div>

      <div className="space-y-3">
        {/* Cash on Delivery */}
        <div
          onClick={() => handleMethodChange("cod")}
          className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
            formData.paymentMethod === "cod"
              ? "border-primary bg-primary/5 shadow-sm"
              : "border-base-200 hover:border-base-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === "cod"}
              onChange={() => handleMethodChange("cod")}
              className="accent-primary cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-success text-lg" />
              <div>
                <p className="font-bold text-sm">Cash on Delivery (COD)</p>
                <p className="text-xs text-base-content/60">
                  Pay with cash upon delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bKash Payment */}
        <div
          onClick={() => handleMethodChange("bkash")}
          className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
            formData.paymentMethod === "bkash"
              ? "border-[#D12053] bg-[#D12053]/5 shadow-sm"
              : "border-base-200 hover:border-base-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="paymentMethod"
              value="bkash"
              checked={formData.paymentMethod === "bkash"}
              onChange={() => handleMethodChange("bkash")}
              className="accent-[#D12053] cursor-pointer"
            />
            <div>
              <p className="font-bold text-[#D12053] text-sm">
                bKash (Send Money / Cash In)
              </p>
              <p className="text-xs text-base-content/60">
                Pay using your bKash wallet
              </p>
            </div>
          </div>
        </div>

        {/* Nagad Payment */}
        <div
          onClick={() => handleMethodChange("nagad")}
          className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
            formData.paymentMethod === "nagad"
              ? "border-[#F7921E] bg-[#F7921E]/5 shadow-sm"
              : "border-base-200 hover:border-base-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="paymentMethod"
              value="nagad"
              checked={formData.paymentMethod === "nagad"}
              onChange={() => handleMethodChange("nagad")}
              className="accent-[#F7921E] cursor-pointer"
            />
            <div>
              <p className="font-bold text-[#F7921E] text-sm">
                Nagad (Send Money / Cash In)
              </p>
              <p className="text-xs text-base-content/60">
                Pay using your Nagad wallet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Payment Details Form (bKash & Nagad) */}
      {(formData.paymentMethod === "bkash" || formData.paymentMethod === "nagad") && (
        <div className="space-y-4 bg-base-200/40 mt-4 p-4 sm:p-5 border border-primary/20 rounded-2xl animate-fadeIn">
          {/* Instructions Box */}
          <div className="space-y-2 bg-base-100 p-3.5 border border-base-200 rounded-xl text-xs">
            <div className="flex items-center gap-2 font-bold text-primary">
              <FaInfoCircle />
              <span>Payment Instructions</span>
            </div>
            <ol className="space-y-1 text-base-content/80 list-decimal list-inside">
              <li>
                Please Send Money / Cash In total{" "}
                <strong className="font-black text-primary">৳{grandTotal}</strong> to:
              </li>
              <li className="bg-base-200/70 my-1 p-1 border rounded font-mono font-bold text-sm text-center select-all">
                {formData.paymentMethod === "bkash"
                  ? `bKash: ${BKASH_NUMBER}`
                  : `Nagad: ${NAGAD_NUMBER}`}
              </li>
              <li>
                Enter your wallet number & Transaction ID (TrxID) below for verification.
              </li>
            </ol>
          </div>

          {/* Inputs for Sender Phone & TrxID */}
          <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <label className="block mb-1 font-semibold text-xs text-base-content/70">
                Your {formData.paymentMethod === "bkash" ? "bKash" : "Nagad"} Mobile Number *
              </label>
              <input
                type="tel"
                name="paymentSenderPhone"
                required
                value={formData.paymentSenderPhone || ""}
                onChange={handleChange}
                placeholder="017XXXXXXXX"
                className="bg-base-100 px-4 py-2.5 border border-base-300 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-xs text-base-content/70">
                Transaction ID (TrxID) *
              </label>
              <input
                type="text"
                name="paymentTrxId"
                required
                value={formData.paymentTrxId || ""}
                onChange={handleChange}
                placeholder="e.g. 9J78AK92"
                className="bg-base-100 px-4 py-2.5 border border-base-300 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm uppercase"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;