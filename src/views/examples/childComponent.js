import React from "react";
import "./demo.scss";

class Child extends React.Component {
  state = {
    isOpen: false,
  };
  handleShowHide = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleOnClickDelete = (job) => {
    console.log("handleOnClickDelete: ", job);
    this.props.deleteOneJob(job);
  };
  render() {
    // const name = "Nguyễn Anh Tuấn";
    console.log("Check props: ", this.props);
    const { isOpen } = this.state;
    const { arrJobs } = this.props;

    return (
      <>
        {isOpen === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>{" "}
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.handleOnClickDelete(item);
                      }}
                    >
                      x
                    </span>
                  </div>
                );
              })}
            </div>{" "}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>{" "}
            </div>
          </>
        )}
      </>
    );
  }
}
// const Child = (props) => {
//   const { name, age, arrJobs } = props;
//   return (
//     <>
//       <div>
//         Hello, this is child component: {name} - {age}
//       </div>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default Child;
