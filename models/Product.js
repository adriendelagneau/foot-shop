import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    category: {
      type: String,
      required: true,
    },
    brand : {
        type: String
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    bestSales : {
      type: Boolean
    },
    img: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    img5: {
      type: String,
      required: true,
    },
    prices: {
      type: Number,
      required: true,
    },
   sizes : {
    type: [Object],
    required: true,
   },
   rating : {
    type : [Object]
   }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);


  /** change for a  un array of img */