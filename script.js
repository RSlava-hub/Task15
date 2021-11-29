const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const btndel = document.querySelector("button")
const tasks = document.querySelector(".tasks")
form.onsubmit = function(e){
    e.preventDefault();
    let div = document.createElement("div");
    div.classList.add("tasks__task");
    let inputchk = document.createElement("input");
    inputchk.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    span.innerText = input.value
    div.appendChild(inputchk);
    div.appendChild(span);
    tasks.appendChild(div);
    input.value = ''
    
}
btndel.onclick = function(){
    tasks.querySelectorAll("input").forEach(function(inp){
        if(inp.checked){
            inp.parentNode.remove();
        }

    })

}