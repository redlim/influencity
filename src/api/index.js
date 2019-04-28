import constants from '../utils/constants'

export const getWeatherByName = (name) => {
    return new Promise((resolve,reject)=> {
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=${constants.APIKEY}`;
        fetch(url)
            .then(response => response.json() )
            .then((data)=>{
                resolve(data);
            }).catch(err=> reject(err))
    })
};
