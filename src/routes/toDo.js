import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Todo({ text, onClickDel }) {
  return (
    <li>
      {text}
      <button onClick={onClickDel}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(ownProps);
  console.log(ownProps);
  return {
    onClickDel: () => {
      dispatch(actionCreators.deleteTodo(ownProps.id));
    },
  };
};
export default connect(null, mapDispatchToProps)(Todo);
