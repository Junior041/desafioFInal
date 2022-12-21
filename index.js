import express from "express";
import cors from "cors";
import winston from "winston";
import clientesRoputes from "./routes/clientes.routes.js";
import autoresRoutes from "./routes/autor.routes.js";
import livroRoutes from "./routes/livro.routes.js";
import vendaRoutes from "./routes/venda.routes.js";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.fileNameLogs = "desafio.log"; //criacao dos logs, para chamar basta usar =     global.logger.info(`mensagem do log `);

global.logger = winston.createLogger({
  lever: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: global.fileNameLogs }),
  ],
  format: combine(label({ label: global.fileNameLogs }), timestamp(), myFormat),
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/clientes", clientesRoputes);
app.use("/autor", autoresRoutes);
app.use("/livro", livroRoutes);
app.use("/venda", vendaRoutes);

app.use((err, req, res, next) => {
  logger.error(` ${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
app.listen(3000, () => console.log("API Started"));
