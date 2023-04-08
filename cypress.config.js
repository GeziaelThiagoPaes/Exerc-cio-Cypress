// adicionado a url global para referenciar em todos os testes.
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
    
    },
  },
});
