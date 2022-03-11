//API Calls

//API Key
const key = "yXTAfUpJF7KkqXPPjZLOr9VyH0woAmAA";


//2 Requests to 2 different endpoints

const getcity = async(city) =>{

    const baseURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    
    const query = '?apikey='+key+'&q='+city;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    // console.log(data[0]);

    return data[0];

}

// getcity('Lahore')
// .then(data => console.log(data)) 
// .catch(arr => console.log(err))



const getweather = async(id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    
    const query = id +'?apikey='+key;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0];

}   
