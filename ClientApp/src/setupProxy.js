const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');
// 41915
// 44401
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7050';

const context =  [
  "/api/book",
  "/api/book/filters",
];

console.log("\n The target is: ", target, "\n")
module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    // proxyTimeout: 600000,
    target: target,
    secure: false,
    changeOrigin: true,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
