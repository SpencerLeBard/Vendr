import Dew from "./Models/Dew.js";
import Doritos from "./Models/Doritos.js";

let _state = {

  Dew: new Dew('Mountian Dew', "img", 5),
  Doritos: new Doritos("Doritos", "img", 2),
  Money: 0
};

class Store {
  get State() {

    return _state;
  }


}

const STORE = new Store();
export default STORE;