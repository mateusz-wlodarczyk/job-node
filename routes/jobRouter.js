import { Router } from "express";
const jobRouter = Router();
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

jobRouter
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

jobRouter.route("/stats").get(showStats);

jobRouter
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default jobRouter;
