export interface TodoListState {
  inputValue: string;
  todoList: string[];
}

export const CHANGE_INPUT_VALUE = "change_input_value";
export const ADD_TODO_LIST = "add_todo_list";
export const DELETE_TODO_LIST = "delete_todo_list";

export interface changeInputValueAction {
  type: typeof CHANGE_INPUT_VALUE;
  payload: string;
}

export interface addTodoListAction {
  type: typeof ADD_TODO_LIST;
}

export interface deleteTodoListAction {
  type: typeof DELETE_TODO_LIST;
  payload: number;
}

export type TodoListAction =
  | changeInputValueAction
  | addTodoListAction
  | deleteTodoListAction;
