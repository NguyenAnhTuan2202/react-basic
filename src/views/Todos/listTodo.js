import React from "react";
import "./listTodo.scss";
import { toast } from "react-toastify";
import AddTodo from "./addTodo.js";
import Color from "../HOC/color";

class ListTodo extends React.Component {
  state = {
    ListTodo: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Learning React",
      },
      {
        id: "todo3",
        title: "Watching Naruto",
      },
    ],
    editTodo: {},
  };
  handleOnChangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodoCopy = [...ListTodo];

      //Find index of specific object using findIndex method.
      let objIndex = ListTodoCopy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      ListTodoCopy[objIndex].title = editTodo.title;
      this.setState({ ListTodo: ListTodoCopy, editTodo: {} });
      toast.success("Updated todo list succeed!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodo;
    currentTodo = currentTodo.filter((item) => {
      return item.id !== todo.id;
    });
    this.setState({
      ListTodo: currentTodo,
    });
    toast.success("Deleted success!");
  };
  addNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo],
    });
    toast.success("You just added 1 todo!");
  };
  render() {
    let { ListTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("Check empty object ", isEmptyObj);
    return (
      <>
        <p>Todos App with ReactJS</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {ListTodo &&
              ListTodo.length > 0 &&
              ListTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {" "}
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              onChange={(e) => {
                                this.handleOnChangeEditTodo(e);
                              }}
                              value={editTodo.title}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      onClick={() => this.handleEditTodo(item)}
                      className="edit"
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      onClick={() => this.handleDeleteTodo(item)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
