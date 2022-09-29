import React from "react";
import axios from "axios";
import "./listUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(">>> check res:", res.data.data);
      this.setState({
        listUsers: res && res.data && res.data.data ? res.data.data : [],
      });
    });
  }

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    this.handleViewDetailUser(item);
                  }}
                  className="child"
                  key={item.id}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
