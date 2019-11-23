import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_LIST } from "./type";
import { ChangeEvent } from "react";

export function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: event.target.value
  };
}

export function addTodoList() {
  return {
    type: ADD_TODO_LIST
  };
}

export function deleteTodoList(index: number) {
  return {
    type: DELETE_TODO_LIST,
    payload: index
  };
}
