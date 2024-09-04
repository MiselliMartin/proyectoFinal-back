import HTTP_STATUS from "../helpers/httpStatus.js";
import { verifyToken } from "../utils/jwt.service.js";

export const validateToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decodedToken = verifyToken(token);
      if (decodedToken) {
        req.tokenId = decodedToken.id;
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }
  next();
};
