import React from "react";
import { MDBAnimation } from "mdbreact";

class IterativeDesign extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }
  render() {
    this.scrollTop();
    return (
      <div>
        <h1 class="text-center mt-5 font-weight-bold">
          Iterative Design and Evaluation
        </h1>
        <h4 class="text-center grey-text mb-5">Project created Nov. 10 2020</h4>
        <MDBAnimation reveal type="fadeInUp">
          <div className="mx-auto w-50">
            <h2 class="text-center font-weight-bold">
              Sketching & Wireframing
            </h2>
            <h4 class="mt-4 mb-3 text-center">Pre-Design Thinking</h4>
            <p>
              The start-up that we chose was Quell, a tech company hoping to
              claim their place as pioneers in the immersive fitness gaming
              market. The Quell System uses haptic resistance bands that connect
              to an external console to enable players to get fit while punching
              their way through the enemies in a virtual adventure world
            </p>
            <p>
              We designed a desktop website that serves as a dual platform for
              users to both find out more about The Quell and pre-order their
              very own Quell System so they can play as soon as it is released.
            </p>
            <p>
              The users that we are likely to recieve are gaming geeks and
              fitness freaks alike, as these are the types of people that the
              Quell is most likely to attract.
            </p>

            <h4 class="mt-5 mb-3 text-center">Sketching</h4>
            <p>
              As a group, we came up with 4 diverse sketches of possible designs
              for our website that each uniquely informed our final product. Our
              sketches are depicted below:
            </p>
          </div>

          <div className="mx-auto mt-5 w-75">
            <h5 class="text-center mt-4 mb-3">Sketch 1</h5>
            <div class="row">
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/1_Home_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/1_PreOrder_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/1_Product_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>

            <h5 class="text-center mt-4 mb-3">Sketch 2</h5>
            <div class="row">
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/2_Home_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/2_PreOrder_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/2_Product_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>

            <h5 class="text-center mt-4 mb-3">Sketch 3</h5>
            <div class="row">
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/3_Home_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/3_PreOrder_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/3_Product_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>

            <h5 class="text-center mt-4 mb-3">Sketch 4</h5>
            <div class="row">
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/4_Home_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/4_PreOrder_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/4_Product_Page.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>

            <h4 class="mt-4 mb-3 text-center">Wireframing</h4>
            <p class="mt-4 mb-4 text-center">
              We consolidated our 4 sketches into one wireframe
            </p>

            <div class="row">
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/Wireframe_1.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/Wireframe_2.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div class="col w-25">
                <img
                  src="images/Iterative-Design/Wireframe_3.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>
          </div>
        </MDBAnimation>
        <div className="mx-auto mt-5 w-50">
          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center font-weight-bold">Mockups</h2>
            <h4 class="mt-4 mb-3 text-center">Design Choices</h4>
            <p>
              When designing our webpage, there were a couple of design choices
              we kept in mind:
            </p>
            <div class="row justify-content-center">
              <ul class="list-group w-100">
                <li class="list-group-item">
                  It should appeal to gamers, so a dark background with
                  saturated colors should be used.
                </li>
                <li class="list-group-item">
                  The webpage should seem modern and exciting, so we went with a
                  sideways navbar
                </li>
                <li class="list-group-item">
                  There should be distinct separation of pages so users can
                  easily find different sections to view.
                </li>
                <li class="list-group-item">
                  Information should be long, but clear. Users should be given
                  as much information as possible before making an expensive
                  purchase
                </li>
                <li class="list-group-item">
                  Images should accompany text to give the user a better idea of
                  the information given.
                </li>
              </ul>
            </div>

            <p class="mt-5 mb-5">
              And with those details in mind, we set off to create our first
              iteration of the hi-fi prototype.
            </p>

            <h4 class="mt-4 mb-3 text-center">First Iteration</h4>
            <div class="row justify-content-center mt-3 mb-3 col-xs-12">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                class="z-depth-1 shadow mw-100"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSyORe5J8Ru52MdvXKFzsZM%2FIterative-Hifi-Prototypes"
                allowfullscreen
              ></iframe>
            </div>
          </MDBAnimation>
          <div className="animated fadeInLeft">
            <h4 class="mt-5 mb-3 text-center">Summary of Feedback</h4>
            <p class="">Here is some feedback we recieved in section:</p>
            <div class="row justify-content-center">
              <div class="col">
                <table class="mx-auto table w-100">
                  <thead class="thead-light">
                    <th scope="col">#</th>
                    <th scope="col">Feedback</th>
                    <th scope="col">Solution</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Reconsider the information architecture. Why did we
                        choose the pages that we created? What kind of
                        information is needed to sell the product?
                      </td>
                      <td>
                        We reworked the different pages, making the flow of
                        finding information about the Quell and purchasing one
                        flow smoother. In addition we included a few new pages
                        to provide more information to the user. Specifically,
                        we added a More Info page that users can go into to view
                        specs, reviews, and other details.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        The broad appeal of the website caters to gamers while
                        the product is geared toward both fitness enthusiasts
                        and gamers.
                      </td>
                      <td>
                        We included more information about the fitness side of
                        the Quell to appeal to fitness enthusiasts. A How it
                        Works section was included to show fitness enthusiasts
                        how the Quell will actually help them get a workout.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        General style information such as multiple fonts,
                        over-saturated colors, etc.
                      </td>
                      <td>A quick and easy fix.</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        From the current hi-fi prototype, it's difficult to get
                        an idea of how well the UI works with how much lorem
                        ipsum and placeholder images there are.
                      </td>
                      <td>
                        We included more relevant images as well as filled in
                        the different sections.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h4 class="mt-4 mb-3 text-center">Final Iteration</h4>
          <div class="row justify-content-center mt-3 mb-3 col-xs-12">
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
              width="800"
              height="450"
              class="z-depth-1 shadow mw-100"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnAQeZZlzSKUXIlmhr23Su5%2FFinal-Iterative-Prototype"
              allowfullscreen
            ></iframe>
          </div>

          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center mt-5 mb-5 font-weight-bold">User Testing</h2>
            <p class="mt-5 mb-5">
              For the final part of this assignment, we conducted a usability
              test through UserTesting.com, a remote user testing service. We
              gave the users our final hi-fi prototype and asked them to
              complete the task of pre-order a Quell package.
            </p>

            <h4 class="mt-5 mb-3 text-center">Test Instructions</h4>
            <p class="mt-3 mb-3">
              These instructions were to be completed while completing the test.
            </p>
            <div class="row justify-content-center">
              <ul class="list-group w-100">
                <li class="list-group-item">
                  Without leaving the homepage, describe what you would select
                  first. *Do not select anything yet.* If you would leave
                  without clicking anywhere, please explain why.
                </li>
                <li class="list-group-item">
                  Learn about Quell by clicking through the tabs. Find the
                  general pre-order page.
                </li>
                <li class="list-group-item">
                  Purchase the Quell System Package. How easy is it to make a
                  purchase?
                </li>
                <li class="list-group-item">Return to the home page.</li>
              </ul>
            </div>

            <h4 class="mt-5 mb-3 text-center">Post-Test Questions</h4>
            <p class="mt-3 mb-3">
              These questions were to be completed after completing the test.
            </p>
            <div class="row justify-content-center">
              <ul class="list-group w-100">
                <li class="list-group-item">
                  If this were not a study, would you have quit at any point
                  during the process of purchasing the product?
                </li>
                <li class="list-group-item">
                  Does the website entice you to buy the Quell?
                </li>
                <li class="list-group-item">
                  How would you describe the website in three words?
                </li>
                <li class="list-group-item">
                  How would you compare it with similar websites?
                </li>
              </ul>
            </div>

            <h4 class="mt-5 mb-5 text-center">Testing Videos</h4>
            <div class="row justify-content-center text-center">
              <div class="col">
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/nh3TsAZ7uDA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col">
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/go9uwne1tGg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col">
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/CXIw-kn06V4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <h4 class="mt-5 mb-3 text-center">Feedback</h4>
            <p class="mt-3 mb-3">
              For the most part, the User Testing results were in line with our
              expectations.
            </p>

            <div class="row justify-content-center">
              <div class="col">
                <table class="mx-auto table w-100">
                  <thead class="thead-light">
                    <th scope="col">#</th>
                    <th scope="col">Feedback</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        In general, users found the interface clear and easy to
                        use, and they all successfully completed the task of
                        purchasing the Quell System package
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Users essentially made no errors in conducting the
                        subtasks.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        One user did not reach the post-purchase page, but she
                        narrated how she would have reached it, suggesting she
                        did not realize the card information page was
                        interactive (more an issue with the prototype
                        presentation than the interface).
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        All in all, we received positive feedback about the
                        layout, clarity, and learnability of the site.
                        Especially since we did not state that this prototype
                        was for a class and that we were not actually from
                        Quell, this feedback indicates high success.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </MDBAnimation>

          <h4 class="mt-5 mb-3 text-center">Potential Changes</h4>
          <p class="mt-3 mb-3">
            The test results suggest some potential changes.
          </p>
          <div class="row justify-content-center">
            <ul class="list-group w-100">
              <li class="list-group-item">
                We received some feedback to improve on the website's visual
                design to make it more high-quality and modern
              </li>
              <li class="list-group-item">
                Some users did not interact with the About Us page, suggesting
                that it might not be necessary
              </li>
              <li class="list-group-item">
                One user also noted that he didn’t expect the "Find Out More"
                button on the home page to lead to the same page as the How It
                Works tab.
              </li>
              <li class="list-group-item">
                How would you compare it with similar websites?
              </li>
            </ul>
          </div>
          <p class="mt-3 mb-3">
            In general, given the restraints of this assignment, these potential
            improvements suggest a fairly successful final mockup.
          </p>

          <MDBAnimation reveal type="fadeInUp">
            <h2 class="text-center mt-5 mb-3 font-weight-bold">
              Final Thoughts
            </h2>
            <p class="mt-3 mb-5">
              We originally thought that we had a pretty strong first iteration.
              However, after going through the critique, we realized that we
              needed to keep specific ideas in mind, specifically information
              architecture. Nobody's perfect, and so the iterative design
              process and testing is essential for creating clearer webpages.
            </p>
          </MDBAnimation>
        </div>
      </div>
    );
  }
}
export default IterativeDesign;
