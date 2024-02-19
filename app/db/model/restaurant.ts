import mongoose, { Document, Model, Schema } from "mongoose";

export interface IRestaurantMenu {
  item: string;
  price: number;
  description: string;
}

export interface IRestaurant extends Document {
  _id: string;
  name: string;
  location: string;
  cuisine: string;
  rating: number;
  menu: IRestaurantMenu[];
  created_on: string;
}

const RestaurantMenuSchema: Schema = new Schema({
  item: String,
  price: Number,
  description: String,
  created_on: { type: Date, default: new Date() },
});

const RestaurantSchema: Schema = new Schema({
  name: { type: String, unique: true },
  location: String,
  cuisine: String,
  rating: String,
  menu: [RestaurantMenuSchema],
  created_on: { type: Date, default: new Date() },
});

const RestaurantModel: Model<IRestaurant> =
  mongoose.models.restaurants ||
  mongoose.model<IRestaurant>("restaurants", RestaurantSchema, "restaurants");

export default RestaurantModel;