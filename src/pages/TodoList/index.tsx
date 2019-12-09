import React from "react";
import { Input, Button, List, Typography, Card } from "antd";
import { TodoListState } from "../../store/type";
import { connect } from "react-redux";
import {
  changeInputValue,
  addTodoList,
  deleteTodoList
} from "../../store/action";
import "./todoList.less";
import CustomBreadcrumb from "../../components/BreadCumb";
export interface TodoListProps {
  inputValue?: string;
  todoList: string[];
  changeInputValue: typeof changeInputValue;
  addTodoList: typeof addTodoList;
  deleteTodoList: typeof deleteTodoList;
}

const TodoList: React.FC<TodoListProps> = ({
  inputValue,
  todoList,
  changeInputValue,
  addTodoList,
  deleteTodoList
}) => {
  return (
    <>
      <CustomBreadcrumb Title={["TodoList"]} />
      <Card>
        <Input
          value={inputValue}
          onChange={changeInputValue}
          style={{ width: "500px" }}
          className="inputStyle"
        />
        <Button type="primary" onClick={addTodoList}>
          Add
        </Button>
        <List
          bordered
          dataSource={todoList}
          renderItem={(item, index) => (
            <List.Item onClick={() => deleteTodoList(index)}>
              <Typography.Text mark>[{index}]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default connect(
  (state: TodoListState) => ({
    inputValue: state.inputValue,
    todoList: state.todoList
  }),
  {
    changeInputValue,
    addTodoList,
    deleteTodoList
  }
)(TodoList);
