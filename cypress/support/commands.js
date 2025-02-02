Cypress.Commands.add("scrollUntilTextVisible", (text, maxScrolls = 20) => {
    let scrolls = 0;
  
    function scroll() {
      cy.get("body").then(($body) => {
        if ($body.text().includes(text) || scrolls >= maxScrolls) {
          return; // Si encuentra el texto o alcanza el límite de scrolls, termina
        }
        cy.scrollTo("bottom"); // Baja la página
        cy.wait(500); // Espera un poco para cargar contenido
        scrolls++;
        scroll();
      });
    } 
    scroll();
  });


  /// <reference types="cypress" />

  Cypress.Commands.add('scrollAndCapture', (selector) => {
    let capturedTitles = new Set(); // Usamos Set para evitar duplicados
  
    function captureElements() {
      return cy.get(selector, { timeout: 5000 }).then(($elements) => {
        $elements.each((_, el) => {
          const text = Cypress.$(el).text().trim();
          if (text) {
            capturedTitles.add(text);
          }
        });
      });
    }
  
    function scrollAndCapture(previousCount = 0) {
      cy.window().then((win) => {
        cy.wrap(win)
          .scrollTo('bottom', { duration: 1000 }) // Hace scroll lentamente
          .wait(1500) // Espera para cargar más contenido
          .then(() => captureElements()) // Captura los elementos después del scroll
          .then(() => {
            const currentCount = capturedTitles.size;
  
            if (currentCount > previousCount) {
              scrollAndCapture(currentCount); // Sigue haciendo scroll si hay nuevos elementos
            } else {
              cy.log('Capturados:', Array.from(capturedTitles)); // Muestra en consola lo capturado
              cy.task('log', Array.from(capturedTitles)); // Envía al log de Cypress
            }
          });
      });
    }
  
    captureElements().then(() => {
      scrollAndCapture();
    });
  });