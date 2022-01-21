import { Router } from "express";
import noteController from "../controlers/noteController.js";

const router = new Router();

router.get("/notes", noteController.getAllNotes);
router.post("/notes", noteController.createNote);
router.patch("/notes/:id", noteController.editNote);
router.get("/notes/:id", noteController.getOneNote);
router.delete("/notes/:id", noteController.deleteNote);
router.patch("/notes/archive/:id", noteController.changeArchiving);
router.get("/notes-stats", noteController.getStatistics);

export default router;