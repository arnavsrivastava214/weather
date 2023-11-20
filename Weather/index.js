async function searchWeather(){


    let inputValue = document.getElementById("inputBox");
    console.log(inputValue.value);

    let cityName = document.getElementById("cityName");
    let degree = document.getElementById("degree");
    let humidit = document.getElementsByClassName("humidit")
    console.log(humidit);


    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${inputValue.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '82f6a5ff3cmshc9f47800346a992p147817jsn85cf192dce5c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        let result = await response.text();
        result = JSON.parse(result);
        console.log(result);

        const weatherObj = {
            "degree" : result.current.temp_c,
            "cityName" : result.location.name,
            "humidity" : result.humidity
        }

        cityName.innerHTML = weatherObj.cityName;
        degree.innerHTML = weatherObj.degree + `<sup>o</sup>C`;
        humidity.innerHTML = weatherObj.humidity`<sup>:</sup>`


    } catch (error) {
        console.error(error);
    }

}