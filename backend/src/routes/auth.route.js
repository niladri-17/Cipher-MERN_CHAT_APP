import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  signup,
  login,
  logout,
  updateProfilePic,
  refreshAccessToken,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(signup); // or, router.post("/signup", signup);
router.route("/login").post(login);
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("profilePic"), updateProfilePic);
router.route("/refresh-token").get(refreshAccessToken);
router.route("/logout").post(verifyJWT, logout); // or, router.post("/logout", verifyJWT, logout);

export default router;
