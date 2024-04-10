// selects all documents that have the leyna
const leyna = document.querySelectorAll('[player~= "leyna"');
const theo = document.querySelectorAll('[player~= "theo"');
const mahba = document.querySelectorAll('[player~= "mahba"');

// so we are gonna have player represent what players can NOT see this information
// so the default is display works
// if the localStorage.getItem(player) == leyna{we want to make this not visible through setting color: rgba(0,0,0,0)} by adding a class INVISIBLE!!!

if(localStorage.getItem("player") == "leyna"){
    console.log("found leyna");
    for(let i = 0; i < leyna.length; i++){
        // this is the current item being worked on
        let item = leyna[i];
        item.classList.add("invisible");
    }
}

if(localStorage.getItem("player") == "theo"){
    console.log("found theo");
    for(let i = 0; i < theo.length; i++){
        // this is the current item being worked on
        let item = theo[i];
        item.classList.add("invisible");
    }
}

if(localStorage.getItem("player") == "mahba"){
    console.log("found mahba");
    for(let i = 0; i < mahba.length; i++){
        // this is the current item being worked on
        let item = mahba[i];
        item.classList.add("invisible");
    }
}