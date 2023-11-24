export class Voiture {
    idvehicule = 0 ;
    matricule = '00000TAB' ;
    idmarque = 0 ;
    nbplace = 0;
    constructor(id , matricule , idmarque,nbplace) {
      this.idmarque = id ;
      this.matricule = matricule ;
      this.idmarque = idmarque ;
      this.nbplace = nbplace ;
    }
    get attribut1() {
      return this.attribut1;
    }
    get idvehicule(){
        return this.idvehicule;
    }
    set idvehicule(idvehicule){
        this.idvehicule = idvehicule;
    }
    get matricule(){
        return this.matricule;
    }
    set matricule(matricules){
        this.matricule = matricules;
    }
    get idmarque(){
        return this.idmarque;
    }
    set idmarque(idmarque){
        this.idmarque = idmarque;
    }
    get nbplace(){
        return this.nbplace;
    }
    set nbplace(nbplace){
        this.nbplace = nbplace;
    }
    static getalldonnevoiture() {
      return fetch('http://localhost:8080/vehicule/getallvehicule')
        .then(response => response.json())
        .then(data => {
            return data.map(obj => new Voiture(obj.idvehicule , obj.matricule , obj.idmarque , obj.nbplace))
        })
        .catch(error => console.error('Erreur lors du chargement des données initiales :', error));
    }
}