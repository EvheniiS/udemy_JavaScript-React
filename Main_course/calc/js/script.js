'use strict'

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8')
    request.send();

    // request.onload = () => {
    //     if (request.status === 200) {
    //         // Handle successful response here
    //         const data = JSON.parse(request.response);
    //         // Add your conversion logic here
    //     } else {
    //         // Handle error here
    //     }
    // };
    request.addEventListener('load', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response)
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Something went wrong"
        }

    })
});