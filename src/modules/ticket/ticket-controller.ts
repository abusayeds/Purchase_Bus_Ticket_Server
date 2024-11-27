import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { ticketServise } from "./ticket-servise";

const createTicket = catchAsync(async (req, res) => {
  const result = await ticketServise.createTicketDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket created successfully",
    data: result,
  });
});
const getAvailableTicket = catchAsync(async (req, res) => {
  const result = await ticketServise.getAvailableTicketDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available tickets retrieved successfully",
    data: result,
  });
});

const deleteTicket = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ticketServise.deleteTicketDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Ticket deleted successfully",
    data: result,
  });
});
const updateTicket = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ticketServise.updateTicketDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Ticket updated successfully",
    data: result,
  });
});

export const ticketsController = {
  createTicket,
  getAvailableTicket,
  deleteTicket,
  updateTicket,
};
