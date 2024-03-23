import express from "express";
import {
  checkUserAvailability,
  followOrUnfollowUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
} from "../controllers/user";
import { auth } from "../middleware/auth";
import uploadTofirebase from "../middleware/uploadFile";

const router = express.Router();

router.route("/").get(getUsers).patch(auth, updateUser);
router
  .route("/profile")
  .get(auth, getUserProfile)
  .patch(auth, uploadTofirebase({ fieldname: "profileImage" }), updateUserProfile);
router.post("/check-user-availability", checkUserAvailability);
router.patch("/follow:userId", auth, followOrUnfollowUser);
router.route("/:userId").get(getUserById);

export default router;
