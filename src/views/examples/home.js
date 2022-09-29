import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from "../../assets/images/redux4.png";
import { connect } from "react-redux";

class Home extends React.Component {
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  handleDeleteUser = (user) => {
    console.log("check user delete: ", user);
    this.props.deleteUserRedux(user);
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todos");
    //   console.log("Check time out");
    // }, 3000);
  }
  render() {
    console.log("Check props redux: ", this.props.dataRedux);

    let listUser = this.props.dataRedux;
    return (
      <>
        <div>This is Homepage </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span
                    onClick={() => {
                      this.handleDeleteUser(item);
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
        </div>
        <button
          onClick={() => {
            this.handleCreateUser();
          }}
        >
          Add new
        </button>
      </>
    );
  }
}

// export default withRouter(Home);
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({ type: "CREATE_USER" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
