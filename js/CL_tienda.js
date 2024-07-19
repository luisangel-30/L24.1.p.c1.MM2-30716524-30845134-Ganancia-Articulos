export default class CL_tienda{
    constructor(){
        this.acumventa=0.0;
        this.contart=0;
        this.contsuperior=0;
    }
    procesar(art){
        this.contart++;
        this.acumventa+=art.precioventa;
        if(art.precioventa>65)
            this.contsuperior++;
    }
    promedioventa(){
        return this.acumventa/this.contart;
    }
    artsuperior(){
        return this.contsuperior;
    }
}