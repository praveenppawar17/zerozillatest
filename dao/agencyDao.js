import Agency from "../model/agency.js";
import Client from "../model/client.js";

export const createAgencyDao = async (details) => {
  try {
    const isAgencyExists = await Agency.findOne({
      agencyName: details.agency.agencyName,
    });

    if (!isAgencyExists) {
      const agency = new Agency(details.agency);
      const agencyResponse = await agency.save();
      return agencyResponse;
    } else {
      return isAgencyExists;
    }
  } catch (error) {
    return error;
  }
};

export const createClientDao = async (clientDetails) => {
  try {
    const isClientExists = await Client.findOne({
      clientEmail: clientDetails.clientEmail,
    });
    if (!isClientExists) {
      const client = new Client(clientDetails);
      const clientResponse = await client.save();
      return clientResponse;
    } else {
      return { isClientExists: true, clientEmail: isClientExists.clientEmail };
    }
  } catch (error) {
    return error;
  }
};

export const updateClientDao = async (clientDetails) => {
  try {
    const clientResponse = await Client.updateOne(
      { _id: clientDetails.clientId },
      { $set: clientDetails }
    );
    return clientResponse;
  } catch (error) {
    return error;
  }
};

export const getTopClientDao = async () => {
  try {
    const clientResponse = await Client.find({})
      .select(["clientName", "totalBill"])
      .sort({ totalBill: "descending" })
      .populate({ path: "agencyId", select: { agencyName: 1 } });
    return clientResponse;
  } catch (error) {
    return error;
  }
};
