import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  agencyId: { type: mongoose.Schema.Types.ObjectId, ref: "agency" },
  clientEmail: {
    type: String,
    required: false,
    unique: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
  totalBill: {
    type: Number,
    required: false,
  },
});

const client = mongoose.model("client", ClientSchema);

export default client;
