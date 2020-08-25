import VendrController from "./Controllers/VendrController.js";

class App {
  vendrController = new VendrController();

}
window["app"] = new App();