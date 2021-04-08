const villains = [{Name: "Daleks",                First: 1963,  Doctors: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11],  Episodes: 104,  img: "Pictures/Daleks.jpg"},
                  {Name: "Cybermen",              First: 1966,  Doctors: [1, 2, 3, 4, 5, 6, 7, 10, 11],     Episodes: 57,   img: "Pictures/Cybermen.jpg"},
                  {Name: "Master",                First: 1971,  Doctors: [3, 4, 5, 6, 7, 8, 10],            Episodes: 22,   img: "Pictures/Master.jpg"},
                  {Name: "Sontarans",             First: 1973,  Doctors: [2, 3, 4, 6, 10, 11],              Episodes: 21,   img: "Pictures/Sontarans.jpg"},
                  {Name: "Ice Warriors",          First: 1967,  Doctors: [2, 3, 11],                        Episodes: 25,   img: "Pictures/Ice Warriors.jpg"},
                  {Name: "Silurians",             First: 1970,  Doctors: [3, 5, 11],                        Episodes: 16,   img: "Pictures/Silurians.jpg"},
                  {Name: "Davros",                First: 1975,  Doctors: [4, 5, 6, 7, 10],                  Episodes: 22,   img: "Pictures/Davros.jpg"},
                  {Name: "Black Guardian",        First: 1978,  Doctors: [4, 5],                            Episodes: 18,   img: "Pictures/Black Guardian.jpg"},
                  {Name: "Kovarian",              First: 2011,  Doctors: [11],                              Episodes: 5,    img: "Pictures/Kovarian.jpg"},
                  {Name: "Ood",                   First: 2006,  Doctors: [10, 11],                          Episodes: 6,    img: "Pictures/Ood.jpg"},
                  {Name: "Cybermat",              First: 1967,  Doctors: [2, 4, 11],                        Episodes: 15,   img: "Pictures/Cybermat.jpg"},
                  {Name: "Judoon",                First: 2007,  Doctors: [10, 11],                          Episodes: 3,    img: "Pictures/Judoon.jpg"},
                  {Name: "Weeping Angels",        First: 2007,  Doctors: [10, 11],                          Episodes: 4,    img: "Pictures/Weeping Angels.jpg"},
                  {Name: "Silence",               First: 2011,  Doctors: [11, 4],                           Episodes: 3,    img: "Pictures/Silence.jpg"},
                  {Name: "Rani",                  First: 1985,  Doctors: [3, 4, 5, 6, 7],                   Episodes: 8,    img: "Pictures/Rani.jpg"},
                  {Name: "Nestene Consciousness", First: 1970,  Doctors: [3, 9],                            Episodes: 9,    img: "Pictures/Nestene Consciousness.jpg"},
                  {Name: "Yeti",                  First: 1967,  Doctors: [1, 2, 3, 4, 5],                   Episodes: 13,   img: "Pictures/Yeti.jpg"},
                  {Name: "Valeyard",              First: 1986,  Doctors: [6],                               Episodes: 18,   img: "Pictures/Valeyard.jpg"},
                  {Name: "Atraxi",                First: 2010,  Doctors: [11],                              Episodes: 2,    img: "Pictures/Atraxi.jpg"},
                  {Name: "Sycorax",               First: 2005,  Doctors: [10, 11],                          Episodes: 2,    img: "Pictures/Sycorax.jpg"},]

function toString(villainInfo){
    let result = "Name: " + villainInfo.Name + " \n";
    result += "First appearance: " + villainInfo.First + " \n";
    result += "Doctors: " + villainInfo.Doctors + " \n";
    result += "Episodes: " + villainInfo.Episodes + " \n";
    return result;
}

function makeVillainBox(villain){
    let newVillainBox = document.createElement("div");

    let newVillainImage = document.createElement("img"); 
    let newVillainInfo = document.createElement("p"); 
    let newCheckBox = document.createElement("input");

    newVillainBox.classList.add("villainBox");
    newVillainInfo.classList.add("villainInfo");
    newCheckBox.classList.add("villainCheckBox");

    newVillainImage.src = villain.img;
    newVillainInfo.innerText = toString(villain);
    newCheckBox.type = "checkbox";

    newVillainBox.appendChild(newVillainImage);
    newVillainBox.appendChild(newVillainInfo);
    newVillainBox.appendChild(newCheckBox);

    return newVillainBox;
}

let i = 0;
let btnMainMenuAdd = document.getElementById('btnMainMenuAdd');

btnMainMenuAdd.addEventListener('click', event => {
    let villain = makeVillainBox(villains[i]);
    document.getElementById('cards').appendChild(villain);
    i = (i + 1) % 20;
})


// отображает в попап кнопки с выбором поля поиска 
function switchPopUpToSearchTypes(){
    document.getElementById("popUpSearchTypesBtns").style.display = "flex";
    document.getElementById("popUpInputData").style.display = "none";
    document.getElementById("popUpBtnSearchCards").style.display = "none";
}


// отображает в попап элементы для ввода данных
function switchPopUpToInput(){
    document.getElementById("popUpSearchTypesBtns").style.display = "none";
    document.getElementById("popUpInputData").style.display = "block";
    document.getElementById("popUpBtnSearchCards").style.display = "block";
}


let btnMainMenuSearch = document.getElementById("btnMainMenuSearch");

// показывает попап
btnMainMenuSearch.addEventListener("click", event =>{
    document.getElementById("popUpWrapper").style.display = "flex";
    switchPopUpToSearchTypes();
})



let btnPopUpCancel = document.getElementById("btnPopUpCancel");

// скрывает попап
btnPopUpCancel.addEventListener("click", event =>{
    document.getElementById("popUpWrapper").style.display = "none";
})


let searchType; // поле поиска, 1 - имя, 4 - год появления, 6 - докторы, 8 - количество эпизодов
let hiddenVillains = []; // массив с непоходящими под условие поиска контейнерами


// отображение скрытых контейнеров
let btnMainMenuShowHidden = document.getElementById("btnMainMenuShowHidden");
btnMainMenuShowHidden.addEventListener("click", event =>{
    hiddenVillains.forEach(villainBox => {
        villainBox.style.display = "flex";
    });
    hiddenVillains = [];
    document.getElementById("btnMainMenuShowHidden").style.display = "none";
})


let popUpSearchTypesBtns = document.getElementById("popUpSearchTypesBtns");

// отлавливает нажание на кнопку и определяет поле поиска
popUpSearchTypesBtns.addEventListener("click", event=>{
    switchPopUpToInput();
    let searchBtn = event.target.closest("button");
 
    if (searchBtn == document.getElementById("popUpBtnName")){
        document.getElementById("textBoxInputData").value = "Daleks";
        searchType = 1;
    }
    else if (searchBtn == document.getElementById("popUpBtnAppearance")){
        document.getElementById("textBoxInputData").value = "1963";
        searchType = 4;
    }
    else if (searchBtn == document.getElementById("popUpBtnDoctors")){
        document.getElementById("textBoxInputData").value = "1,2,3";
        searchType = 6;
    } 
    else{
        document.getElementById("textBoxInputData").value = "104";
        searchType = 8;
    }
})


// обертка для поиска
let popUpBtnSearchCards = document.getElementById("popUpBtnSearchCards");
popUpBtnSearchCards.addEventListener("click", event =>{
    if (searchType == 6)
        searchDoctors();
    else
        searchNotDoctors();
    document.getElementById("popUpWrapper").style.display = "none";
})


// получение поля из контейнера
function getInfo(villainBox){
    let info = villainBox.childNodes[1].textContent.split(' ');
    if (searchType == 6){
        return info[searchType].split(',');
    }
    return info[searchType];
}


// поиск подходящих контейнеров, когда поле поиска НЕ докторы
function searchNotDoctors(){
    let searchValue = document.getElementById("textBoxInputData").value;
    let cards = document.getElementById("cards").childNodes;
    let countHiddenBoxes = 0;
    cards.forEach(function(villainBox){
        if (getInfo(villainBox, searchType) != searchValue){
            villainBox.style.display = "none";
            hiddenVillains.push(villainBox);  
            countHiddenBoxes++;
        }
    });
    if (countHiddenBoxes > 0){
        document.getElementById("btnMainMenuShowHidden").style.display = "block";
    }
}


// поиск подходящих контейнеров, когда поле поиска НЕ докторы
function searchDoctors(){
    let searchValues = document.getElementById("textBoxInputData").value.split(',');
    let cards = document.getElementById("cards").childNodes;
    let countHiddenBoxes = 0;
    cards.forEach(function(villainBox){
        let doctors = getInfo(villainBox);
        if (!searchValues.every(doctor => doctors.includes(doctor))){
            villainBox.style.display = "none";
            hiddenVillains.push(villainBox);  
            countHiddenBoxes++;
        }
    });
    if (countHiddenBoxes > 0){
        document.getElementById("btnMainMenuShowHidden").style.display = "block";
    }
}
