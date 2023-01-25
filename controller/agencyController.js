import {
  clientAgencyService,
  getTopClientService,
  updateClientService,
} from "../service/agencyService.js";

export const clientAgencyController = async (req, res) => {
  try {
    const response = await clientAgencyService(req.body);
    if (response.isClientExists) {
      res
        .status(409)
        .json({
          message: `Client with this email ${response.clientEmail} already exists`,
          isClientExists: response.isClientExists,
        });
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateClientController = async (req, res) => {
  try {
    const clientDetails = {
      clientId: req.params.id,
      ...req.body,
    };
    const clientResponse = await updateClientService(clientDetails);
    res.status(200).json(clientResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTopClientsController = async (req, res) => {
  try {
    const clientResponse = await getTopClientService();
    res.status(200).json(clientResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};
