 let favoriteCityId = "Rome";
//let {nom} = favoriteCityId;
//console.log(nom);
console.log(favoriteCityId);

favoriteCityId = "Paris";
console.log(favoriteCityId);
//console.log(nom);

const citiesId  = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

 citiesId.push('Tokyo');
 console.log(citiesId);

 function getWeather(citiesId){
 
     let city = "Paris"
     let temperature = "20"
     return{
         "city": city, "temperature" : temperature
     };
      
 }
const weather1 = getWeather();
console.log(weather1)



 let weather = {
    city: 'Paris',
    temperature: '20'
    };
    
    let { city, temperature } = weather;
    
    console.log(city);  
    console.log(temperature); 

const parisId = "Paris";
const nycId = "Nyc";
const otherCityId = "3";

    function afficher(citiesId) {
        for (var i=0; i< arguments.length; i++) {
        console.log(arguments[i]);
        }
        }
        
        afficher(parisId, nycId, otherCityId);

        class Trip {
            constructor(id, name, imageUrl, price){
                this.id = id;
                this.name = name;
                this.imageUrl= imageUrl
                this._price = price
            }
            toString() {
                return this.id + '' + this.name + '' + this.imageUrl + '' + this._price;
           }
           get price(){
               return this._price
           }
           set price(price){
                this._price = price
           }

            
            set id(monId) {
            this._id = monId
            }

     
            get id() {
            return this._id
            }

     
            set name(monName) {
            this._name = monName
            }

     
            get name() {
            return this._name
            }

     
            set imageUrl(monImageUrl) {
            this._imageUrl = monImageUrl
            }

     
            get imageUrl() {
            return this._imageUrl
            }

        static getDefaultTrip() {

            return new Trip ( 'rio-de-Janeiro',
            'Rio de Janeiro',
            'img/rio-de-janeiro.jpg')
               
            
        }
    
    }
    
        

        let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
        const defaultTrip = Trip.getDefaultTrip();
        parisTrip.price = 100;
 

        console.log(parisTrip)
        console.log(parisTrip.name)
        console.log(parisTrip.toString());

        console.log(defaultTrip.toString());


// Heritage 

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
    }

}

 
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')

console.log(freeTrip.toString());

//Promesses
class TripService {
    constructor() {
    // TODO Set of 3 trips
    //
    // new Trip('paris', 'Paris', 'img/paris.jpg')
    // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
    // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
    findByName(tripName) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de la
    recherche
    }, 2000)
    });
    }
    }
    class PriceService {
    constructor() {
    // TODO Map of 2 trips
   
    
    // 'paris' --> price == 100
    let p1 = {id: 'paris', price: '100'};
    // 'rio-de-janeiro' --> price == 800)
    let p2 = {id: 'rio-de-janeiro', price: '800'};

    // créer
    let priceServices = new Map();

    // alimenter
    priceServices.set(1, p1);
    priceServices.set(2, p2);
    // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => { 
    setTimeout( (resolve, ms) => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de
    //la recherche
    }, 2000)
    });
    }
    }
    