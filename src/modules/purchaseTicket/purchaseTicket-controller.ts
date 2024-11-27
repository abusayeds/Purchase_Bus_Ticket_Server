import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { purchaseticketServise } from "./purchaseTicket-service";

const purchaseTicket = catchAsync(async (req, res) => {
  const result = await purchaseticketServise.purchaseTicketDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Ticket purchase successfully",
    data: result,
  });
});

export const purchaseTicketsController = {
  purchaseTicket,
};
