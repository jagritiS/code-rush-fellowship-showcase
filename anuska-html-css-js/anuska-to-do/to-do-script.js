function addTask(){
 const li=document.createElement("li");
 li.textContent=task.value;
 li.onclick=()=>li.remove();
 list.appendChild(li);
}
