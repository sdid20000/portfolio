import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends React.Component {
  render() {
    return (
      <MDBFooter color="stylish-color-dark" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Contact:</h5>
              <ul>
                <li className="list-unstyled">
                  Email: michaelthientu@gmail.com
                </li>
                <li className="list-unstyled">Phone: 339-927-1989</li>
              </ul>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a
                    href="https://www.linkedin.com/in/michael-tu2/"
                    className="mx-1"
                  >
                    <img
                      src="images/Home/linkedin.png"
                      style={{ width: "3rem" }}
                    ></img>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009359122790"
                    className="mx-1"
                  >
                    <img
                      src="images/Home/facebook.png"
                      style={{ width: "3rem" }}
                    ></img>
                  </a>
                  <a href="https://github.com/sdid20000" className="mx-1">
                    <img
                      src="images/Home/github.png"
                      style={{ width: "3rem" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <p>
              Created by Michael Tu using Bootstrap, MDBReact,
              react-awesome-slider and React-Router
            </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
