const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://blankfactor.com/", // URL base para todas las pruebas
    retries: 1, // Reintentar pruebas fallidas 1 vez
    defaultCommandTimeout: 8000, // Tiempo de espera predeterminado
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      // Registra la tarea 'log' para imprimir mensajes en la consola
      on('task', {
        log(message) {
          console.log('Captured Titles:', message);
          return null;
        }
      });

      return config;
    }
  }
});