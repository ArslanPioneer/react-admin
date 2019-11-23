import {
  TodoListState,
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  TodoListAction
} from "./type";

const defaultState: TodoListState = {
  inputValue: "",
  todoList: []
};

const reducer = (state = defaultState, action: TodoListAction) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case ADD_TODO_LIST:
      console.log(action);
      return {
        ...state,
        inputValue: "",
        todoList: [...state.todoList, state.inputValue]
      };
    case DELETE_TODO_LIST:
      const newList = [...state.todoList];
      newList.splice(action.payload, 1);
      return {
        ...state,
        todoList: [...newList]
      };
    default:
      return state;
  }
};

export default reducer;
