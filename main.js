class TaskManager {
  constructor(){
    // переменные
    this.inputBox = document.getElementById("input-box");
    this.listContainer = document.getElementById("list-container");
    this.popupContainer = document.getElementById("popup-container");
    this.popup = document.getElementById("popup");
    this.btnAdd = document.getElementById("btn-add")

    // отслеживаем всякие штуки
    this.listContainer.addEventListener("click", (e) => {
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        this.saveData();
      } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        this.saveData();
      }
    }, false);

    this.btnAdd.addEventListener("click", () => {
      console.log('sdfsdf')
      this.addTask();
    })

  }

  addTask(){
  if(this.inputBox.value === '') {
      alert("You must write something!");
  } else {
      let li = document.createElement("li");
      let liP = document.createElement("p");
      liP.innerHTML = this.inputBox.value;
      this.listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      let liBtn = document.createElement("button");
      liBtn.innerHTML = "Посмотреть";
      let liId = document.getElementsByTagName("li").length; 
      liBtn.setAttribute("onclick", "infoToggle("+liId+");");
      li.setAttribute("id", "li-"+liId);
      li.appendChild(liP);
      li.appendChild(span);
      li.appendChild(liBtn);
  }
  this.inputBox.value = "";
  this.saveData();
  }

  saveData(){
    localStorage.setItem("data", this.listContainer.innerHTML);
  }
  
  showTask(){
    this.listContainer.innerHTML = localStorage.getItem("data");
  }

}


const taskManager = new TaskManager();
taskManager.showTask();


function infoToggle(n){
  taskManager.popupContainer.classList.toggle("active");
  if(n != 0) {
    let li = document.getElementById("li-"+n);
    taskManager.popup.innerHTML = li.children[0].textContent;
  }
}
