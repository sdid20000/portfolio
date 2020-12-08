import React from "react";
import { MDBAnimation } from "mdbreact";

class Resume extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }
  render() {
    this.scrollTop();
    return (
      <div>
        <h1 class="text-center mt-5 font-weight-bold">Resum&eacute;</h1>
        <h4 class="text-center grey-text">Updated as of Dec. 8, 2020</h4>
        <img
          src="/images/resume/resume.png"
          className="mx-auto d-block w-50 border shadow rounded"
        ></img>
      </div>
    );
  }
}
export default Resume;
