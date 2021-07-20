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
            constructor(id, name, imageUrl, _price){
                this.id = id;
                this.name = name;
                this.imageUrl= imageUrl
                this._price = _price
            }
            toString() {
                return this.id + '' + this.name + '' + this.imageUrl + '' + this._price;
           }
           get _price(){
               return this._price
           };
           set _price(){
               return this._price
           }
        }

        let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg', '100');
        console.log(parisTrip)
        console.log(parisTrip.name)


