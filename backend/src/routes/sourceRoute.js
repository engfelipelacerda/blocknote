import express from "express";
const router = express.Router();

// get, post, put, delete
// quando alguém acessar tal URL execute essa função.
router.get("/notes", (req, res) => {
  return res.send("estamos listando as notas");
});

router.post("/note/:id", (req, res) => {
  const { id } = req.params;
  return res.send(`estamos criando a nota ${id}`);
});

router.put("/note/:id", (req, res) => {
  const { id } = req.params;
  return res.send(`estamos atualizando a nota ${id}`);
});

router.delete("/note/:id", (req, res) => {
  const { id } = req.params;
  return res.send("estamos deletando a nota " + id);
});

export default router;
