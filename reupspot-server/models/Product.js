import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    location: {
      type: String,
      enum: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Thika', 'Other'],
      required: true,
    },
    images: [{ type: String }],
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    condition: {
      type: String,
      enum: ['New', 'Like New', 'Used', 'Very Used'],
      default: 'Used',
    },
    category: {
      type: String,
      enum: ['Clothing', 'Electronics', 'Home', 'Books', 'Other'],
      default: 'Other',
    },
    sold: { type: Boolean, default: false },

    // ✅ Wishlist
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    // ✅ Ratings
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        star: { type: Number, min: 1, max: 5 },
        comment: { type: String },
      },
    ],
    reviews: [
     {
       user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
       name: String,
       rating: { type: Number, required: true },
       comment: String,
       createdAt: { type: Date, default: Date.now }
     }
   ],
  averageRating: {
     type: Number,
     default: 0
   }

  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

