import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const params = useParams();
  //   console.log(params.id, toDos);
  const myTodo = toDos.find((el) => el.id === Number(params.id));
  console.log(toDos, myTodo);
  return <h1>{myTodo.text}</h1>;
}

function mapStateToProps(state) {
  //   console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
