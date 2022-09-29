import React from "react";
import Child from "./childComponent";
import AddComponent from "./addComponent";
/**
 * JSX: return just 1 block ( chỉ 1 pha)
 */
class MyComponent extends React.Component {
  // state = {
  //   fullName: "Nguyễn Anh Tuấn",
  //   age: 22,
  // };

  // handleOnChangeName = (e) => {
  //   this.setState({
  //     fullName: e.target.value,
  //   });
  // };

  // handleClickButton = (e) => {
  //   console.log("Hit the button");
  //   alert("Click me!");
  // };
  state = {
    firstName: "",
    lastName: "",
    age: 22,
    arrJobs: [
      {
        id: "job1",
        title: "Developer",
        salary: 500,
      },
      {
        id: "job2",
        title: "Tester",
        salary: 400,
      },
      {
        id: "job3",
        title: "PM",
        salary: 1000,
      },
    ],
  };
  addNewJob = (job) => {
    console.log("Check job from child to parent", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteOneJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  render() {
    // const name = "Nguyễn Anh Tuấn";

    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <Child arrJobs={this.state.arrJobs} deleteOneJob={this.deleteOneJob} />
      </>
    );
  }
}
export default MyComponent;
