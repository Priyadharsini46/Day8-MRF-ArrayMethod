
const getcountries = () => {
    const country = new XMLHttpRequest();
    country.open('GET', 'https://restcountries.eu/rest/v2/all');
    country.responeType = 'json';
    country.send();
    country.onload = () => {
        const data = country.response;
        let obj = JSON.parse(data);

        //a. Get all the countries from Asia continent /region using Filter function
        let countries = obj.filter((value) => value.region == "Asia");
        console.log(countries);

        //b. Get all the countries with a population of less than 2 lakhs using Filter function

        let pop = obj.filter((country) => country.population < 2_00_000);
        console.log(pop);

        //c. Print the following details name, capital, flag using forEach function
        obj.forEach(element => {
            console.log("Name: " + element.name, ", Capital:a " + element.capital, ", Flag: " + element.flag)
        });


        //d. Print the total population of countries using reduce function
        let total = obj.filter((pop) => pop.population).map((value) => value.population).reduce((a, c) => c = a + c);
        console.log("Total Population of Countries: " + total)

        //e. Print the country which uses US Dollars as currency.

        let doller= obj.filter((value) =>  value.currencies[0].code === "USD").map((value)=>value);
        console.log(doller)
     
    }
}

getcountries();