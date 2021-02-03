import React from "react";
import { MDBAnimation } from "mdbreact";

class Zumix extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    this.scrollTop();
    return (
      <div>
        <h1 className="text-center font-weight-bold mt-5">Zumix Redesign</h1>
        <h4 class="text-center grey-text">Project created Oct. 20 2020</h4>
        <h5 class="text-center grey-text mb-5">Created by Michael Tu</h5>
        <div className="mx-auto animated fadeInUp w-50">
          <p class="text">
            For my Responsive Redesign project for cs1300 at Brown University, I
            chose the Zumix website to redesign and implement.
          </p>
          <h4 class="text-center">The Original Webpage</h4>

          <a href="https://www.zumix.org/about">
            <img
              className="rounded w-100 mx-auto d-block hoverable border"
              src="images/Redesign/zumix_page.png"
            ></img>
          </a>

          <p class="text">
            Taking a look at this UI. There are a couple of glaring issues wtih
            regards to usability, learnability, memorability, and accessibility.
            The original webpage can be found{" "}
            <a href="https://www.zumix.org/about">here.</a>
          </p>

          <h4 class="text-center">Issues</h4>
          <div id="usability-list">
            <ul class="text">
              <hr class="divider"></hr>
              <li>Usability</li>
              <ul>
                <li>
                  Unfortunately, while this webpage is responsive, when the
                  screen size is changed, buttons and text become extremely
                  small for smaller screens. This makes the webpage nearly
                  unusable.
                </li>
                <li>
                  In addition, the social icons towards the bottom of the page
                  are extremely small even on a larger screen.
                </li>
              </ul>
              <hr class="divider"></hr>
              <li>
                Learnability
                <ul>
                  <li>
                    Since the "All About Us" header is the same color as the
                    buttons, it implies that it can be clicked. However in
                    reality it is just a header.
                  </li>
                </ul>
              </li>
              <hr class="divider"></hr>
              <li>
                Memorability
                <ul>
                  <li>
                    The bright yellow colors are fairly striking and memorable.
                    With how jarring the color is with the rest of the page it
                    makes it easy to remember their function after a long period
                    of time.
                  </li>
                  <li>
                    However, one issue is that there is some a secondary navbar
                    above the primary navbar. Since the text is smaller and not
                    highlighted, it makes it difficult to remember that that is
                    where some of the important links are. One does not expect a
                    secondary navbar above the primary one.
                  </li>
                </ul>
              </li>
              <hr class="divider"></hr>
              <li>
                Accessibility
                <ul>
                  <li>
                    When running WebAIM WAVE on this webpage. It highlights
                    multiple areas where the text has low contrast with the
                    background which makes it harder to read.
                  </li>
                  <li>
                    When a screenreader is used to read through the webpage, it
                    goes through the first few headings in the nav bar, but then
                    proceeds to the body of the text. Typically, one would
                    expect it to go through all of the headings first, rather
                    than jumping around.
                  </li>
                  <li>
                    In addition, since the website is not responsive and does
                    not utilize all of the screen space, the text can be small
                    to read.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p class="text">
            Next, I'll address how I went about fixing these problems.
          </p>
          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center font-weight-bold mt-5">
              Low-Fidelity Prototypes
            </h2>

            <p class="text">
              Fixing most of these issues is a matter of making the page
              properly responsive, and changing minor layout and color changes.{" "}
            </p>

            <p class="text">
              For layout changes, here are the diagrams of my low-fidelity
              prototypes:
            </p>

            <h3 class="text-center">Desktop</h3>
            <img
              id="lofi1"
              src="images/Redesign/lo-fi1.png"
              className="mx-auto w-100"
            ></img>

            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <h3 class="text-center">Mobile</h3>
                  <img
                    id="lofi2"
                    src="images/Redesign/lo-fi2.png"
                    className="mx-auto w-100"
                  ></img>
                </div>
                <div className="col">
                  <h3 class="text-center">Tablet</h3>
                  <img
                    id="lofi3"
                    src="images/Redesign/lo-fi3.png"
                    className="mx-auto w-100"
                  ></img>
                </div>
              </div>
            </div>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center mt-5 font-weight-bold">
              High-Fidelity Prototype
            </h2>

            <h3 class="text-center">Desktop</h3>
            <img
              id="hifi1"
              src="images/Redesign/hi-fi1.png"
              className="mx-auto w-100"
            ></img>

            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <h3 class="text-center">Mobile</h3>
                  <img
                    id="hifi2"
                    src="images/Redesign/hi-fi2.png"
                    className="mx-auto w-100"
                  ></img>
                </div>
                <div className="col">
                  <h3 class="text-center">Tablet</h3>
                  <img
                    id="hifi3"
                    src="images/Redesign/hi-fi3.png"
                    className="mx-auto w-100"
                  ></img>
                </div>
              </div>
            </div>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center mt-5 font-weight-bold">
              Visual Style Guide
            </h2>
            <img
              id="style_guide"
              src="images/Redesign/style_guide.png"
              className="mx-auto w-100"
            ></img>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center font-weight-bold mt-5">Finished Webpage</h2>
            <p class="text">
              {" "}
              The Finished webpage can be found{" "}
              <a href="https://agile-ravine-26502.herokuapp.com/">
                by clicking here.
              </a>{" "}
              Here is a snapshot of what the finished product looks like
            </p>
            <a href="https://agile-ravine-26502.herokuapp.com/">
              <img
                className="rounded w-100 mx-auto d-block hoverable border"
                src="images/Redesign/webpage.png"
              ></img>
            </a>

            <h2 class="text-center font-weight-bold mt-5">Final Thoughts</h2>
            <p class="text">
              This webpage I designed is much more responsive than the original
              webpage, and all of the content is visible regardless of screen
              size. When viewing my website through WebAIM WAVE there are still
              a couple of low contrast issues. However, I think it is still much
              more readable than the original webpage. When using a
              screenreader, it goes in a logical order. Starting from the top
              and going down.
            </p>
          </MDBAnimation>
        </div>
      </div>
    );
  }
}
export default Zumix;
