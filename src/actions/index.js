import { ADD_TODO } from "../constants/action-types";
// src/js/actions/index.js
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });