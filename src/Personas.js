import React from "react";
import { MDBAnimation } from "mdbreact";

class Personas extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    this.scrollTop();
    return (
      <div>
        <div className="w-50 mx-auto">
          <h1 class="text-center font-weight-bold mt-5" id="TitleName">
            Taking a look at Home Oven UI
          </h1>
          <h4 class="text-center grey-text mb-5">
            Project created Oct. 6 2020
          </h4>
          <p class>
            Here I'll be taking a look at the user-interface of a home oven.
            Here you will find a collection of user experiences, interviews,
            personas, and a storyboard regarding the use of a home oven.
          </p>
        </div>
        <MDBAnimation reveal type="fadeInUp">
          <h2 class="text-center font-weight-bold mt-5">The Interface</h2>
          <img
            id="OvenUI"
            src="./images/Personas/OvenInterface.png"
            className="w-75 mx-auto d-block border rounded mb-4"
          ></img>
          <div className="w-50 mx-auto">
            <p class="text">
              The main point of this interface is to present all of the
              different options available to a cook while still being intuitive
              and easy to understand. With the main focus being on the
              temperature and time, even a cook with no need for the extra
              features can easily navigate the UI.
            </p>
          </div>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <div className="w-50 mx-auto">
            <h2 class="text-center font-weight-bold mt-5">Key Observations</h2>
            <p class="text">
              Here are some key observations I made from observing three
              different individuals using this interface:
            </p>
            <ul class="text">
              <li>
                One user did not wait for the oven to finish preheating before
                putting food in.
              </li>
              <li>
                Mysteriously, none of the users used the built-in timer on the
                oven.
              </li>
              <li>
                Users returned after a period of time, visually checking to see
                if the food was done. If satisfied, they would take the food out
                and turn the oven off
              </li>
            </ul>
          </div>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <h2 class="text-center mt-5 font-weight-bold">Interviews</h2>
          <div className="w-50 mx-auto">
            <p class="text">
              Here is a summary of the responses from three different
              individuals when asked about the oven interface:
            </p>
            <div id="interview-list">
              <ol class="text">
                <hr class="divider"></hr>
                <li>
                  Let’s say you were heating up some frozen food in the oven.
                  Could you walk me through the steps you’d take in detail?{" "}
                </li>
                <ul>
                  <li>
                    Users would select the bake function, input a temperature,
                    and put the food in after varying times. One put in food
                    before preheating finished, while the other two put it in
                    afterwards. All users would check periodically until the
                    food seemed ready.
                  </li>
                </ul>
                <hr class="divider"></hr>
                <li>How often do you use the oven?</li>
                <ul>
                  <li>
                    Users used the oven varying amounts. Oftentimes the oven was
                    used when the user want to make healthy baked meals. Another
                    user also only used the oven for baking bread, which was a
                    rare ocassion.
                  </li>
                </ul>

                <hr class="divider"></hr>
                <li>
                  What features of the oven do you use? Do you use some more
                  frequently than others?
                </li>
                <ul>
                  <li>
                    Most frequently, users used the "Bake" function more than
                    other features.{" "}
                  </li>
                  <li>
                    Users would use other features under special ocassions. One
                    user uses the proof feature when baking bread.
                  </li>
                </ul>
                <hr class="divider"></hr>
                <li>When would you use the oven vs other heating methods?</li>
                <ul>
                  <li>
                    Users would use the oven over other heating methods when
                    cooking large meals and heating frozen foods.
                  </li>
                  <li>
                    When not cooking those kinds of meals, the stovetop or
                    microwave were preferable.
                  </li>
                  <li>
                    Users reported that using the oven was a "set it and forget
                    it" method vs actively cooking.
                  </li>
                </ul>
                <hr class="divider"></hr>
                <li>
                  When cooking, do you like setting specific temperatures and
                  times? Or do you prefer working with a more relative "higher"
                  or "longer"?
                </li>
                <ul>
                  <li>
                    Users liked setting specific temperatures and times, as they
                    followed recipes when cooking.
                  </li>
                  <li>
                    One user said that they wished there was a dial to gradually
                    adjust the temperature.
                  </li>
                </ul>
                <hr class="divider"></hr>
                <li>
                  Do you usually set a timer when cooking? Do you use the oven
                  timer or an external timer? If you do not use the oven timer,
                  why not?
                </li>
                <ul>
                  <li>
                    All users reported not using the built-in timer when
                    cooking, and used an external timer. They said that using
                    the oven timer was cumbersome and difficult to set up, while
                    external timers were easy and portable.
                  </li>
                </ul>
                <hr class="divider"></hr>
              </ol>
            </div>
          </div>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <h2 class="text-center font-weight-bold mt-5">Personas</h2>
          <div className="container w-75">
            <div className="row">
              <div className="col">
                <h3 class="text-center">Family-Man Barry</h3>
                <img
                  src="./images/Personas/Barry.png"
                  className="w-100 mx-auto border rounded"
                ></img>
                <p class="text-center">
                  Family-man Barry works full-time during the day and comes home
                  to cook for his family. He uses the oven to cook large healthy
                  meals for his three children. Barry is an extreme that
                  represents users that used the oven to cook large and healthy
                  meals.
                </p>
              </div>
              <div className="col">
                <h3 class="text-center">Lazy Larry</h3>
                <img
                  src="./images/Personas/Larry.png"
                  className="w-100 mx-auto border rounded"
                ></img>
                <p class="text-center">
                  Lazy Larry lives alone and does not enjoy cooking. He often
                  heats up frozen meals in the microwave and eats alone. Larry
                  is the extreme for the users that said they use the oven for
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
          <h2 class="text-center font-weight-bold mt-5">Storyboard</h2>
          <div className="mx-auto w-50">
            <p class="text-center">
              Let's take a closer look at Family-man Barry and how he might use
              this oven interface.
            </p>
          </div>

          <div class="w-75 mx-auto">
            <div>
              <img
                class="w-100 mx-auto"
                src="images/Personas/Storyboard_1.png"
              ></img>
            </div>
            <div>
              <img
                class="w-100 mx-auto"
                src="images/Personas/Storyboard_2.png"
              ></img>
            </div>
            <div>
              <img
                class="w-100 mx-auto"
                src="images/Personas/Storyboard_3.png"
              ></img>
            </div>
          </div>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <div className="w-50 mx-auto">
            <h2 class="text-center font-weight-bold mt-5">Final Thoughts</h2>
            <p class="text">
              What I found particularly interesting about observing users and
              constructing personas was the lack of use of other features
              besides bake. While this UI made other options available to more
              adventurous cooks, for the day-to-day cook, it might be better to
              have the "bake" functionality much more prominent. In addition,
              the actual amount of time people used the oven was comparatively
              low compared to other cooking methods. Of course, with only
              interviewing three individuals, two of them from the same
              household, it would be risky to make general assumptions about
              people as a whole.
            </p>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}
export default Personas;
