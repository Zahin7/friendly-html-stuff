var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var listOfThings = document.getElementsByTagName("li");


var closebtns = document.getElementsByClassName("close");
var i;
var datas  = {
    value : '',
    classStyle:''
};




function addSpanToli(li) {
    let span  = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&times;"
    removeLiOnSpanIconClick(span);
    li.appendChild(span);
}

function removeFromLocalStorage(innerText) {
  localStorage.removeItem(getItemKeyFromLocalStorage(innerText))
}



function removeLiOnSpanIconClick(span) {
    span.addEventListener("click", function () {
        console.log(this.parentNode.firstChild);
        console.log(this.parentNode.firstChild.textContent);
       removeFromLocalStorage(this.parentNode.firstChild.textContent);
        this.parentElement.remove();
    });
}

function addLiElementToView() {
    let li = initLi("inactive");
    li.appendChild(document.createTextNode(input.value));
    addSpanToli(li);
    ul.appendChild(li);
    this.getDatas(input);
    clear(input);
}

function getDatas(input) {
    datas.value = input.value;
    datas.classStyle = 'inactive';
    localStorage.setItem(input.value.concat("name"), JSON.stringify(datas));
    console.log(datas)
}

function createHtmlElementLi() {
    if(inputValue() > 0) {
        addLiElementToView(input)
    }
}

function inputValue() {
    return input.value.length;
}

function clear(input) {
    input.value="";
}
function createElementOnEnterKeyPress(event) {
    if (inputValue() > 0 && event.key === "Enter") {
        createHtmlElementLi();
    }
}


function changeColorToRed(e) {
    if (e.currentTarget.className === 'active done') {
        e.currentTarget.className = 'inactive';
    } else {
        e.currentTarget.className = 'active done';
    }

    let innerText = e.currentTarget.firstChild.textContent;

   let key = getItemKeyFromLocalStorage(innerText);
    console.log(key);
    var values;
     values = localStorage.getItem(key);
    console.log('Values :::: => ', values);

   JSON.parse(JSON.stringify(values)).classStyle = e.currentTarget.className;
    let styke =  e.currentTarget.className;
   const obj = {
       value: JSON.parse(values).value,
       classStyle: styke
   }
    console.log(e.currentTarget.className)

    localStorage.setItem(key, JSON.stringify(obj));

    console.log("afters  values ++ ",  values)
    console.log("afters  obj ++ ",  obj)


    console.log(e.currentTarget.firstChild.textContent)
}


function getItemKeyFromLocalStorage(innerText) {
    const keys = Object.keys(localStorage);
    for (let key of keys) {
        if (JSON.parse(localStorage.getItem(key)).value === innerText)
            return key;
    }
}

for (let i = 0; i < listOfThings.length; i++) {
    listOfThings[i].addEventListener("click", changeColorToRed);
}

for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}

function retrieveDatas() {
    // localStorage.clear();
    if(localStorage.length === -1)
        return;

    console.log("localLength", localStorage.length);
    for (let localStorageKey in localStorage) {

        if(localStorage.hasOwnProperty(localStorageKey)){
            console.log(JSON.parse(localStorage.getItem(localStorageKey)));


          let taskName =  JSON.parse(localStorage.getItem(localStorageKey));
            retrieveFromLocalStorage(taskName)
        }
    }
}

function initLi(liStyle) {
    let li = document.createElement("li");
    li.className = liStyle;
    li.onclick = changeColorToRed;
    return li;
}

function retrieveFromLocalStorage(taskname) {
    let li = initLi(taskname.classStyle);
    li.appendChild(document.createTextNode(taskname.value));
    addSpanToli(li);
    ul.appendChild(li);
}

document.body.onload = retrieveDatas;
button.addEventListener("click", createHtmlElementLi);
input.addEventListener("keypress", createElementOnEnterKeyPress);


