const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const notePara = `<p contenteditable="true" class="input-box">
                        <img src="images/delete.png" alt="delete">
                      </p>`;

    notesContainer.innerHTML = notePara + notesContainer.innerHTML;
})

notesContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
     else if (e.target.tagName === "P"){
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
     }
})

document.addEventListener("keydowm", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})