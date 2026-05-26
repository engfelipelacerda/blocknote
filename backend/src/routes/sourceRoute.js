import express from "express";
const router = express.Router();
import noteController from "../controller/noteController.js";

// get, post, put, delete
// quando alguém acessar tal URL execute essa função.
router.get("/notes", (req, res) => {
  const response = noteController.search();
  return res.send(response);
});

router.post("/notes", (req, res) => {
  const response = noteController.create();
  return res.send(response);
});

router.put("/note/:id", (req, res) => {
  const { id } = req.params;
  const response = noteController.alter(id);
  return res.send(response);
});

router.delete("/note/:id", (req, res) => {
  const { id } = req.params;
  const response = noteController.delete(id);
  return res.send(response);
});

export default router;
