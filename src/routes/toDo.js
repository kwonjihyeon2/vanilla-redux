import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Todo({ text, onClickDel, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onClickDel}>DEL</button>
      </Link>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(ownProps);
  return {
    onClickDel: () => {
      dispatch(actionCreators.deleteTodo(ownProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
