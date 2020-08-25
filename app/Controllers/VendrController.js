import VendrService from "../Services/VendrService.js";
import STORE from "../store.js";



// PRIVATE

//innerhtml 



// PUBLIC
export default class VendrController {
  constructor() {

  }

  buyDoritos() {
    console.log("Bought Doritos");
    VendrService.buyDoritos()
  }
  buyDew() {
    console.log("Bought Mountian Dew");
    VendrService.buyDew()
  }
  insertCoin() {

  }
}