const notesPage = document.querySelector(".notes-page");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=>{
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "remove1.png";
	notesPage.appendChild(inputBox).appendChild(img);
})

notesPage.addEventListener("click", function(e){
	if(e.target.tagName === "IMG"){
		e.target.parentElement.remove();
	}
})