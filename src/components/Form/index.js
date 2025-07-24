import React from "react";

import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";
export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} action="#" className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.defaultProps = {
  novaTarefa: "Valor padrao",
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
