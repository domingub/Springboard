//pulling form for url for image
let memePicStaging = document.querySelector("#memePicForm");
//pulling form for upper text
let memeUpperStaging = document.querySelector("#memeUpperText");
//pulling form for lower text
let memeLowerStaging = document.querySelector("#memeLowerText");
let memeStagingArea = document.querySelector('#memeStaging');

// to be revisited updated approach
let urlForStorage = undefined;
let textForStorage = undefined;
let textLowerStorage = undefined;

memePicStaging.addEventListener('submit', function(e) {
    e.preventDefault();
    let picURL = document.querySelector('#memePic');
    let picToAdd = document.createElement('img');
    picToAdd.setAttribute("src", picURL.value);
    picToAdd.setAttribute("alt", "image");
    memeStagingArea.appendChild(picToAdd);
    urlForStorage = picURL.value;
    picURL.value = "";
});

memeUpperStaging.addEventListener('submit', function(e) {
    e.preventDefault();
    let upperStaging = document.querySelector('#upperInput');
    let upperText = upperStaging.value;
    textForStorage = upperStaging.value;
    let divUpperText = document.querySelector('.upperText');
    divUpperText.innerHTML = upperText;
});

memeLowerStaging.addEventListener('submit', function(e) {
    e.preventDefault();
    let lowerStaging = document.querySelector('#lowerInput');
    let lowerText = lowerStaging.value;
    textLowerStorage = lowerStaging.value;
    let divLowerText = document.querySelector('.lowerText');
    divLowerText.innerHTML = lowerText;
});

let memeContainer = document.querySelector(".memeStorage");
let saveButton = document.querySelector('#saveButton');

saveButton.addEventListener('click', function(e){
    e.preventDefault();

    let newDIV = document.createElement('div');
    
    let upperStorage = document.createElement('div');
    upperStorage.innerHTML = textForStorage; 
    let lowerStorage = document.createElement('div');
    lowerStorage.innerHTML = textLowerStorage;
    upperStorage.setAttribute("class", "upperText");
    lowerStorage.setAttribute('class', 'lowerText')

    newDIV.appendChild(upperStorage);
    newDIV.appendChild(lowerStorage);

    let memeSaving = document.createElement('img');
    memeSaving.setAttribute("src", urlForStorage);
    memeSaving.setAttribute("alt", "Meme");
    newDIV.appendChild(memeSaving);
    newDIV.appendChild(lowerStorage);
    memeContainer.appendChild(newDIV);
}
)
