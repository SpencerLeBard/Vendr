import STORE from "../store.js";

class VendrService {
  constructor() {
  }
  buyDew() {
    console.log(STORE.State.Dew.price)
  }
  buyDoritos() {
    console.log(STORE.State.Doritos.price)
  }

}


const SERVICE = new VendrService();
export default SERVICE