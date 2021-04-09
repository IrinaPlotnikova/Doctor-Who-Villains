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
    let result = "Name: " + villainInfo.Name + "\n";
    result += "First appearance: " + villainInfo.First + '\n';
    result += "Doctors: " + villainInfo.Doctors + '\n';
    result += "Episodes: " + villainInfo.Episodes + '\n';
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



let btnMainMenuDelete = document.getElementById('btnMainMenuDelete');

btnMainMenuDelete.addEventListener('click', event=>{
    let checkBoxes = document.querySelectorAll("input");
    checkBoxes.forEach(box => {
        if (box.checked){
            box.parentElement.remove();
        }
    });
})

let btnMainMenuCheckAll = document.getElementById('btnMainMenuCheckAll');

btnMainMenuCheckAll.addEventListener('click', event=>{
    let checkBoxes = document.querySelectorAll("input");
    checkBoxes.forEach(box => {box.checked = true; });
})
