import {createStore} from 'redux';

// MUTATION STATE 사용 X 이유?
// 새로운 객체를 생성해서 state를 수정하는 것이 안전. 원본 state 수정하지말 것
// 스프레드연산을 통해 복사해서 수정하는 방식을 이용해야한다.

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
  return{
    type:ADD_TODO, text
  }
}

const deleteTodo = (id) => {
  return{
    type:DELETE_TODO, id
  }
}

const reducer = (state = [],action) => {
  // console.log(action.text)
  switch (action.type){
    case ADD_TODO : 
      return [{text : action.text, id:Date.now()}, ...state];
    case DELETE_TODO :
      return state.filter((toDo)=> toDo.id !== Number(action.id))
    default : 
      return state
  }
}

const store = createStore(reducer)
store.subscribe(()=>console.log(store.getState()))

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id
  // console.log(typeof Number(id), typeof id)
  store.dispatch(deleteTodo(id))
}

const paintToDos = () => {
  let toDos = store.getState()
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.addEventListener("click",dispatchDeleteTodo)
    btn.innerText = "DEL"
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)
// const createTodo = (toDo) =>{
//     const li = document.createElement("li")
//     li.innerText = toDo;
//     ul.appendChild(li);
// }

const onSubmit = (e) =>{
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)