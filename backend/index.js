const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json("Hola");
});

app.post("/citas", async (req, res) => {
  const citasres = await prisma.cita.create({
    data: {
      mascota: req.body.mascota,
      propietario: req.body.propietario,
      alta: req.body.alta,
      email: req.body.email,
      sintomas: req.body.sintomas,
    },
  });

  res.json({ citasres });
});

app.get("/citas", async (req, res) => {
  const citasres = await prisma.cita.findMany();

  res.json({ citasres });
});

app.put("/citas", async (req, res) => {
  const citasres = await prisma.cita.update({
    where: { id: req.body.id },
    data: req.body,
  });

  console.log(citasres);
  res.json({ citasres });
});

app.delete("/citas", async (req, res) => {
  const citares = await prisma.cita.delete({
    where: { id: req.body.id },
  });

  res.json({ citares });
});

app.listen(4000, () => {
  console.log("Corriendo en el servidor");
});
