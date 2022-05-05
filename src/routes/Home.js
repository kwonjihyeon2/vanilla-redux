import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "./toDo";

function Home({ toDos, addTodo }) {
  //   console.log(rest);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // addTodo(text);
    addTodo(text);
    setText("");
    // console.log(text)
  };

  //   const result = useSelector(mapStateToProps);
  //   console.log(result.toDos);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
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
