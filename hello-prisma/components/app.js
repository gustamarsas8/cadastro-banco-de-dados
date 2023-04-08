const mongoose = require("mongoose");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://gustavomartins280:1Qj7FKSzGLDedNY1@cluster0.8hvvqcr.mongodb.net/database_oi?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conexão estabelecida com sucesso!"))
  .catch((err) => console.error(err));

app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        address: {
          set: address,
        },
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000!");
});