import nodemailer from "nodemailer";

// Nodemailer Transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Order Confirmation HTML Template
export const generateOrderEmailHTML = (order) => {
  const itemsList = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name || item.title}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">৳${item.price}</td>
      </tr>
    `
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #4CAF50; text-align: center;">Order Confirmed! 🎉</h2>
      <p>Dear Customer,</p>
      <p>Thank you for your order with <strong>HeroKidz</strong>. We have received your order and are processing it.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Order ID:</strong> ${order.orderId}</p>
        <p style="margin: 5px 0 0 0;"><strong>Payment Method:</strong> ${order.paymentMethod.toUpperCase()}</p>
      </div>

      <h3>Order Summary</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px; text-align: left;">Item</th>
            <th style="padding: 8px; text-align: center;">Qty</th>
            <th style="padding: 8px; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsList}
        </tbody>
      </table>

      <div style="margin-top: 20px; text-align: right;">
        <p style="margin: 4px 0;">Subtotal: ৳${order.subtotal}</p>
        <p style="margin: 4px 0;">Shipping Fee: ৳${order.shippingFee}</p>
        <h3 style="margin: 8px 0; color: #333;">Total Amount: ৳${order.totalAmount}</h3>
      </div>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #777; text-align: center;">If you have any questions, reply to this email.</p>
    </div>
  `;
};