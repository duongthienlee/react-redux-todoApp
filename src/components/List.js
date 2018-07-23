// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const mapStateToProps = state => {
    return { todos: state.todos };
};
const ConnectedList = ({ todos }) => (
    <div className="todo-list">
        {todos.map(el => (
            <div className="todo-item" key={el.id}>
                {el.title}
            </div>
        ))}
    </div>

);
const List = connect(mapStateToProps)(ConnectedList);
ConnectedList.propTypes = {
    todos: PropTypes.array.isRequired
};
export default List;