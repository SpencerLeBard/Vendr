import STORE from "../store.js";

class VendrService {
  constructor() {
  }
  buyDew() {
    if (STORE.State.Money >= 5) {
      STORE.State.Money -= 5
      console.log("Here is a Dew, you now have $", STORE.State.Money)
    } else {
      console.log("you dont have enough cash bro");
    }

  }
  buyDoritos() {
    if (STORE.State.Money >= 2) {
      STORE.State.Money -= 2
      console.log("Here is your Doritos, you now have $", STORE.State.Doritos.price)
    } else {
      console.log("you dont have enough cash bro");

    }
  }
  insertCoin() {
    STORE.State.Money++
  }
}


const SERVICE = new VendrService();
export default SERVICE