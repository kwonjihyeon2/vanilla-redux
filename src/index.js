import { createStore } from "redux"

const add = document.getElementById("Add")
const minus = document.getElementById("Minus")
const number = document.querySelector("span")

//string 값을 변수로 설정하면 오류를 js에서 쉽게 추적 가능
const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (state = 0, action) => {
   //데이터를 바꾸는 함수
  // if(action.type === "ADD"){
  //   return state + 1
  // } else if(action.type === "MINUS"){
  //   return state - 1
  // } else {
  //   return state
  // }

  //if 대신 switch, if : case/ else : default
  switch(action.type){
    case ADD : 
      return state + 1
    case MINUS :
      return state - 1
    default :
      return state;
  }
}
const store = createStore(countModifier)

const handleAdd = () => {
  //state를 바꿔주기 위해 action과 dispatch를 연결해주어야함.
  //dispatch는 object(=>{type: ...})로 작성해주어야함
  store.dispatch({type:ADD})
}

const handleMinus = () => {
  store.dispatch({type:MINUS})
}

number.innerText = 0

const onChange = () =>{
  //HTML 변경 함수
  number.innerText = store.getState()
}
//store에 영향을 주기 위해서 함수를 subscribe
store.subscribe(onChange)

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)