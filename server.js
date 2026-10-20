import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    project: "Wompi - DISTRITEC",
    message: "Backend activo; integración de pagos aún en desarrollo."
  });
});

app.get("/oauth/callback", (req, res) => {
  res.status(501).send(
    "Callback OAuth pendiente de implementación."
  );
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor iniciado en puerto ${port}`);
});
