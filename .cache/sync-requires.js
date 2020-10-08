const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Arquivos\\devpleno\\curso power sites\\powersites\\lima\\src\\pages\\index.js"))),
  "component---src-templates-contador-js": hot(preferDefault(require("D:\\Arquivos\\devpleno\\curso power sites\\powersites\\lima\\src\\templates\\contador.js")))
}

