import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        productId: {type: String, required: true},
        title: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: { type: Number, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: { type: Object, required: true},
    itemsPrice: { type: Number, required: true },
  
    isDelivered: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;