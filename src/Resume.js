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
        <div class="d-flex justify-content-center">
          <a href="https://drive.google.com/file/d/1frIOTiuxWtQWGJR8r3i5OPc3m1wAVXwd/view?usp=sharing">
            <img
              src="images\Resume\resume.png"
              className="mx-auto d-block w-50 border rounded hoverable"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}
export default Resume;
