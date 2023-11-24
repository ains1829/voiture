export class Kilometrage{
    _idkilometrage = 4;
    get idkilometrage() {
        return this._idkilometrage;
    }
    set idkilometrage(value) {
        this._idkilometrage = value;
    }
    get idkilometrage() {
        return this._idkilometrage;
    }
    set idkilometrage(value) {
        this._idkilometrage = value;
    }
    _idvehicule = 2;
    get idvehicule() {
        return this._idvehicule;
    }
    set idvehicule(value) {
        this._idvehicule = value;
    }
    _datekilometrage = 1698793200000;
    get datekilometrage() {
        return this._datekilometrage;
    }
    set datekilometrage(value) {
        this._datekilometrage = value;
    }
    _debut = 5.0; 
    get debut() {
        return this._debut;
    }
    set debut(value) {
        this._debut = value;
    }
    _fin = 80.0;
    get fin() {
        return this._fin;
    }
    set fin(value) {
        this._fin = value;
    }
    constructor(idkilometrage , idvehicule , datekilometrage , debut , fin){
        this.idkilometrage = idkilometrage ;
        this.idvehicule = idvehicule ;
        this.datekilometrage = datekilometrage ;
        this.debut = debut ;
        this.fin = fin ;
    }
    static getKimotrageByvehicule(matricule){
        return fetch('http://localhost:8080/kilometrage/getallkilometragebyvehicule/'+matricule)
        .then(response => response.json())
        .then(data => {
            return data.map(obj => new Kilometrage(obj.idkilometrage , obj.idvehicule , obj.datekilometrage , obj.debut ,obj.fin))
        })
        .catch(error => console.error('Erreur lors du chargement des données initiales :', error));
    }
}