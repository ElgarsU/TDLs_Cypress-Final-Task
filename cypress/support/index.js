/// <reference types="Cypress" />
import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `/task/assets/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
    addContext({ test }, { title: "Time of execution:", value: new Date() });
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
