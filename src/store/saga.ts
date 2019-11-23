import { take, put, fork, call } from "redux-saga/effects";
import { ADD_TODO_LIST } from "./type";
import { addTodoList } from "./action";

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function* addItem() {
  while (true) {
    try {
      // listen type: ADD_TODO_LIST
      yield take(ADD_TODO_LIST);
      //
      yield call(delay, 500);
      //yield put(addTodoList());
    } catch (error) {}
  }
}

export default function* todoListSaga() {
  yield fork(addItem);
}
