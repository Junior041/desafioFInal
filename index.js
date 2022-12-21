import express from "express";
import cors from "cors";
import winston from "winston";
import clientesRoutes from "./routes/clientes.routes.js";
import autoresRoutes from "./routes/autor.routes.js";
import livroRoutes from "./routes/livro.routes.js";
import vendaRoutes from "./routes/venda.routes.js";
import basicAuth from "express-basic-auth";

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

function getRole(username) {
  if ((username = "admin")) {
    return "admin";
  } else if (username == "angelo") {
    return "role1";
  }
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.auth.user) {
      const role = getRole(req.auth.user);
      if (isAllowed(role)) {
        next();
      } else {
        res.status(401).send("Nao permitido");
      }
    }else{
      res.status(403).send('user not found')
    }
  };
}

app.use(
  basicAuth({
    authorizer: (username, password) => {
      const userMatches = basicAuth.safeCompare(username, "admin");
      const pwdMatches = basicAuth.safeCompare(password, "admin");

      return userMatches && pwdMatches;
    },
  })
);

app.use(cors());
app.use(express.json());

app.use("/clientes",authorize('admin', 'role1'), clientesRoutes);
app.use("/autor",authorize('admin', 'role1'), autoresRoutes);
app.use("/livro",authorize('admin', 'role1'), livroRoutes);
app.use("/venda",authorize('admin', 'role1'), vendaRoutes);

app.use((err, req, res, next) => {
  logger.error(` ${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
app.listen(3000, () => console.log("API Started"));
