import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {
  state = { title: "", salary: "" };
  handleTitleJob = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.salary) {
      toast.error("Missing required field, please check");
      return;
    }
    console.log("Check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100) + 1,
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleTitleJob(e)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(e) => this.handleChangeSalary(e)}
        />

        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => this.handleSubmit(e)}
        />
      </form>
    );
  }
}
export default AddComponent;
