const config = require("config");
const express = require("express");
const http = require("http");
const next = require("next");

const baseUrl = config.server.base_url;
const post = config.server.default_port;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const serverHttp = http.createServer(server);
    const router = express.Router();

    const routerIndex = require("./router/controller/indexRoutes");
    routerIndex(router);

    server.use(express.json());
    server.use(baseUrl, router);

    server.all(new RegExp(`^${baseUrl}(\/)?(.+)?`), (req, res) => {
      req.url = req.url.replace(baseUrl, "");
      if (req.url === "") req.url += "/";
      return handle(req, res);
    });
    server.use((req, res) => {
      res.status(404).type("txt").send("Not Found");
    });

    serverHttp.listen(post, () => {
      const host = serverHttp.address().address;
      const port = serverHttp.address().port;
      console.log("Server run at http://%s:%s", host, port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
