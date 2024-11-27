import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { authServise } from "./auth-servise";
import config from "../../app/config";
import appError from "../../app/middwares/appError";

const createAuth = catchAsync(async (req, res) => {
  const result = await authServise.createAuthDB(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.node_env === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully",
    token: accessToken,
    data: result.user,
  });
});
const logoutAuth = catchAsync(async (req, res) => {
  try {
    res.clearCookie("refreshToken", {
      secure: config.node_env === "production",
      httpOnly: true,
      sameSite: "none",
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User logged out successfully",
      data: "null",
    });
  } catch (error) {
    throw new appError(httpStatus.INTERNAL_SERVER_ERROR, "Logout failed");
  }
});

export const authController = {
  createAuth,
  logoutAuth,
};
