const input=document.querySelector(".text");
const list_container=document.querySelector(".list-container");

function addTask(){
    if (input.value==='') {
        alert("you must write the task to add it")
    } else {
        console.log("kk");
        let li=document.createElement("li")
        li.innerHTML=input.value
        list_container.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value='';
}
document.querySelector(".addbutton").addEventListener('click',function(){
    addTask()
})


