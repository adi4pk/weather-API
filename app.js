// selectori

let container = document.querySelector(".container");
let searchContainer = document.querySelector(".search-div");
let inputField = document.querySelector(".city-input")
let searchBtn = document.querySelector(".search-button");


//app

loadWeather("bucharest");

searchContainer.addEventListener("click", (ev) =>{

    let obj = ev.target;
    if(obj.classList.contains("search-button")){
        loadWeather(inputField.value);
        console.log(obj);
        
    }
    inputField.value ="";
})

// searchBtn.addEventListener("click", () =>{
//     loadWeather(inputField.value);
//     inputField.value ="";
// })