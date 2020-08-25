import Dew from "./Models/Dew.js";
import Doritos from "./Models/Doritos.js";

let _state = {

  Dew: new Dew('Mountian Dew', "png", 5)
};

class Store {
  get State() {

    return _state;
  }


}

const STORE = new Store();
export default STORE;