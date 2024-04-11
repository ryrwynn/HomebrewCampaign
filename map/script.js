// find toggle radio
let clickToggle = document.querySelectorAll('[name = "key"]');
// everytime the clickToggle is changed things are made visible invisible
for(i = 0; i < clickToggle.length; i++){
    let current = clickToggle[i];
    current.addEventListener("change", function(){
        document.querySelector("#country-area").classList.add("invisible");
        document.querySelector("#city-area").classList.add("invisible");
        document.querySelector("#teleport").classList.add("invisible");
        if(current.id == "country-radio"){
            document.querySelector("#country-area").classList.remove("invisible");
            
        }
        else if(current.id == "city-radio"){
            document.querySelector("#city-area").classList.remove("invisible");
        }
        // in case of teleport
        else{
            document.querySelector("#teleport").classList.remove("invisible");
        }
    })
}
