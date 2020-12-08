import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBAnimation } from "mdbreact";

class MyCard extends React.Component {
  render() {
    return (
      <MDBAnimation reveal type="fadeInUp">
        <a href={this.props.link} style={{ width: "32rem", height: "26rem" }}>
          <div
            class="card card-cascade narrower hoverable mx-auto"
            style={{ width: "32rem", height: "26rem" }}
          >
            <div class="view overlay">
              <img
                className="card-img-top border-bottom"
                src={this.props.src}
                alt="Card image cap"
              ></img>
              <a href={this.props.link}>
                <div class="mask rgba-grey-light"></div>
              </a>
            </div>
            <div class="card-body card-body-cascade">
              <h5 class="orange-text">
                <i class="fas fa-desktop"></i> {this.props.type}
              </h5>
              <h4 class="card-title">{this.props.title}</h4>
              <p class="card-text">{this.props.caption}</p>
            </div>
            <div class="card-footer text-muted">{this.props.date}</div>
          </div>
        </a>
      </MDBAnimation>
    );
  }
}

export default MyCard;
