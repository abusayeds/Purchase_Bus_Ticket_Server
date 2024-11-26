import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { BusServise } from "./bus-servise";

const createBus = catchAsync(async (req, res) => {
  const result = await BusServise.createBusDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bus created successfully",
    data: result,
  });
});

const getAllBus = catchAsync(async (req, res) => {
  const result = await BusServise.getAllBusDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " All Bus retrieved successfully",
    data: result,
  });
});
const getsSingleBus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BusServise.getSingleBusDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bus retrieved successfully",
    data: result,
  });
});
const updateBus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BusServise.updateBusDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bus updated successfully",
    data: result,
  });
});
const deleteBus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BusServise.deleteBusDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bus Deleted successfully",
    data: result,
  });
});
export const busController = {
  createBus,
  getAllBus,
  getsSingleBus,
  updateBus,
  deleteBus,
};
