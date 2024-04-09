const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");

function addTask(){
  if(inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    let liP = document.createElement("p");
    liP.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    let liBtn = document.createElement("button");
    liBtn.innerHTML = "Посмотреть";
    let liId = document.getElementsByTagName("li").length; 
    liBtn.setAttribute("onclick", "infoToggle("+liId+")");
    li.setAttribute("id", "li-"+liId);
    li.appendChild(liP);
    li.appendChild(span);
    li.appendChild(liBtn);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

function infoToggle(n){
  popupContainer.classList.toggle("active");
  if(n != 0) {
    let li = document.getElementById("li-"+n);
    popup.innerHTML = li.children[0].textContent;
  }
}

function openPopup(){

}

showTask();