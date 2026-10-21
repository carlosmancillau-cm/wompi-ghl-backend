import express from "express";
import crypto from "node:crypto";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    project: "Wompi - DISTRITEC",
    message: "Backend de prueba activo."
  });
});

app.get("/oauth/callback", (req, res) => {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send("La autorización fue rechazada.");
  }

  if (!code) {
    return res.status(400).send(
      "Falta el parámetro de autorización. No se ha conectado ninguna cuenta."
    );
  }

  // El intercambio del código por tokens aún debe implementarse.
  return res.status(501).send(
    "Callback recibido. Falta configurar el intercambio seguro de tokens."
  );
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor iniciado en puerto ${port}`);
});
