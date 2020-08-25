import STORE from "../store.js";

class VendrService {
  constructor() {
  }
  buyDew() {
    STORE.State.Money -= 5
    console.log("Here is a Dew, you now have $", STORE.State.Money)
  }
  buyDoritos() {
    STORE.State.Money -= 2
    console.log("Here is your Doritos, you now have $", STORE.State.Doritos.price)
  }
  insertCoin() {
    STORE.State.Money++
    console.log(STORE.State.Money)
  }
}


const SERVICE = new VendrService();
export default SERVICE