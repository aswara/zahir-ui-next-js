const express = require("express");
const next = require("next");
// const nextI18NextMiddleware = require("next-i18next/dist/commonjs/middlewares/next-i18next-middleware").default;

// const nextI18next = require("./i18n");
const { createProxyMiddleware } = require("http-proxy-middleware");

const config = require("./config");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  // server.use(nextI18NextMiddleware(nextI18next));
  server.use("/api", createProxyMiddleware({ target: config.API, changeOrigin: true }));

  // ========= render next js ======
  server.get("*", async (req, res) => {
    return handle(req, res)
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();