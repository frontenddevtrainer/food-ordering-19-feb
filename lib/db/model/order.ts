import mongoose, { Schema, Model, Document } from "mongoose";
import { IRestaurantMenu } from "./restaurant";

export interface IOrderItem {
  item: IRestaurantMenu["_id"];
  quantity: number;
}

export interface IOrder extends Document {
  items: IOrderItem[];
  status: string;
  total: number;
  created_on: Date;
}

const OrderItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "menuitem", required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema({
  items: [OrderItemSchema],
  status: { type: String, required: true, default: "pending" },
  total: { type: Number, required: true },
  created_on: { type: Date, default: Date.now },
});

const OrderModel: Model<IOrder> =
  mongoose.models.order || mongoose.model<IOrder>("order", OrderSchema);

export { OrderModel };
