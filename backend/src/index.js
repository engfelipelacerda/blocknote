import express from "express"; // chamar o servidor express
import sourceRoute from "./routes/sourceRoute.js";
const app = express(); // atribuir a variável app para usar o express;
const port = 3333;

app.use(express.json());

// todas as rotas dentro de sourceRoute vão começar em /
app.use("/", sourceRoute);

app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro!");
    return;
  }
  console.log("Subiu!");
}); // porta para o servidor ler/ouvir
