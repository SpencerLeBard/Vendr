import VendrService from "../Services/VendrService.js";
import STORE from "../store.js";



// PRIVATE

function drawMoney() {
  let money = STORE.State.Money
  document.getElementById('total-cash').innerHTML = `${money}`
}



drawMoney()
// PUBLIC
export default class VendrController {
  constructor() {

  }

  buyDoritos() {
    VendrService.buyDoritos()
    drawMoney()
  }
  buyDew() {
    VendrService.buyDew()
    drawMoney()
  }
  insertCoin() {
    console.log("cha ching");
    VendrService.insertCoin()
    drawMoney()
  }
}