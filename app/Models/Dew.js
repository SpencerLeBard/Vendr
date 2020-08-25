export default class Dew {
  /**
   * 
   * @param {String} name 
   * @param {String} img 
   * @param {Number} price 
   */
  constructor(name, img, price) {
    this.name = name
    this.img = img
    this.price = price
  }

  get Template() {

    return `
    <div class="card">
      <img class="card-img-top" src="${this.img}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">${this.price}</p>
          <button onclick="app.catsController.pet()" >Pet</button>
      </div>
    </div>
    `
  }
}