import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "./toDo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  //   console.log(todos);
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // addTodo(text);
    addTodo(text);
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDos));
  }, [toDos]);

  useEffect(() => {
    let temp = [];

    temp = JSON.parse(localStorage.getItem("todo"));
    // console.log(temp);
    setArr(temp);
  }, []);
  console.log(arr, toDos);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((el) => (
          <Todo {...el} key={el.id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  //   console.log(ownProps);
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
