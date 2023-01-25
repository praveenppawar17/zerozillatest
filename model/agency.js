import mongoose from "mongoose";

const AgencySchema = mongoose.Schema({
  agencyName: {
    type: String,
    required: true,
    unique: true,
  },
  agencyPhone: {
    type: String,
    required: true,
  },
  agencyAddress1: {
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  agencyAddress2: {
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
});

const agency = mongoose.model("agency", AgencySchema);

export default agency;
