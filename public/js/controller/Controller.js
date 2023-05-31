import Model from "../model/Model.js";
import TesztKerdes from "../view/TesztKerdes.js";
import View from "../view/View.js";

export default class Controller {
    #model;
    #view;
    constructor() {
        this.#model = new Model();
        this.#model.get('/kategoria', this.fillKategoria.bind(this))
        this.#view = new View();
        this.#model.get('/tesztek', this.loadTesztek.bind(this))

        $(window).on("kategoriaValaszt", (event) => {
            
            this.#model.get("/tesztek/kategoria/"+ event.detail, this.loadTesztek.bind(this))
        })
    }
    fillKategoria(tomb) {
        tomb.forEach(elem => {
            this.#view.fillSelection({...elem});
        });
    }
    loadTesztek(tomb) {
        $('.kerdesSor').empty();
        tomb.forEach(elem => {
            new TesztKerdes($('.kerdesSor'), {...elem});
        });
    }

}