import {
  createAgencyDao,
  createClientDao,
  getTopClientDao,
  updateClientDao,
} from "../dao/agencyDao.js";

export const clientAgencyService = async (details) => {
  try {
    const agencyResponse = await createAgencyDao(details);
    const client = {
      ...details.client,
      agencyId: agencyResponse._id,
    };
    const clientResponse = await createClientDao(client);
    return clientResponse;
  } catch (error) {
    return error;
  }
};

export const updateClientService = async (clientDetails) => {
  try {
    const clientResponse = await updateClientDao(clientDetails);
    return clientResponse;
  } catch (error) {
    return error;
  }
};

export const getTopClientService = async () => {
  try {
    const clientResponse = await getTopClientDao();
    return clientResponse;
  } catch (error) {
    return error;
  }
};
