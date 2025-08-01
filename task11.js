function addTodoItem(text){
//Create the container for the task item
const container=document.getElementById('todo-container');

//Create the main div
const todoItem=document.createElement('div');
todoItem.className="todo-item";

//Create the checkbox
const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.id="task1";

//Create the label
const label=document.createElement("label");
label.setAttribute("for","task1");
label.className="todo-label";
label.textContent=text;

//Create 4:Toggle strike-throught on click of checkbox
checkbox.onclick=function(){
  if(checkbox.checked){
    label.classList.add('strike');
  }
  else{
    label.classList.remove('strike');
  }
};

//Create the delete button
const deleteBtn=document.createElement('button');
deleteBtn.className='delete-btn';
deleteBtn.innerHTML = '🗑️';

// Delete functionality
 deleteBtn.onclick = function () {
  container.removeChild(todoItem);
};

// Append all
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteBtn);
  container.appendChild(todoItem);
}

  addTodoItem("HTML Document");
  addTodoItem("JAVA Document");
 
//to print different todo items by using array we create it as

// let todolist=[
//   {
//     text:'HTML Document', uniqueNo:1
//   },
//   {
//     text:'JAVA Document', uniqueNo:2
//   }
// ];
// in function it will be like: function addTodoItem(todos){ let checkboxId='checkbox'+todos.uniqueNo;
// label.textContent=todolist.text;
//checkbox.id="checkboxId";
// we call the array as:  addTodoItem(todolist[0]);
//                        addTodoItem(todolist[1]);

