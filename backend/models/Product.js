import mongoose from 'mongoose';

const emiPlanSchema = new mongoose.Schema({
  durationMonths: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  monthlyInstallment: { type: Number, required: true }
});

const variantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  basePrice: { type: Number, required: true },
  description: { type: String, required: true },
  variants: [variantSchema],
  emiOptions: [emiPlanSchema]
}, { timestamps: true });

export default mongoose.model('Product', productSchema);