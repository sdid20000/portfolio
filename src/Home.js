import MyCard from "./MyCard.js";
import React from "react";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="juicy-peach-gradient py-3">
          <MDBAnimation reveal type="fadeIn">
            <div className="mx-auto mt-5 w-50">
              <img
                src="images\Home\profile-pic.webp"
                className="rounded mx-auto d-block shadow"
                style={{ width: "20rem" }}
              ></img>
              <h1 className="text-center mt-5">Michael Tu</h1>

              <p>
                Hello! My Name is Michael Tu and I am a junior at Brown
                University studying computer science and music. For computer
                science I am focusing on software engineering and software
                design, while for music I am focusing on theory and composition
                . Below you can find some of my most recent projects including
                projects in UI/UX, software engineering, composition, and
                arrangement.
              </p>
            </div>
          </MDBAnimation>
        </div>

        <h1 className="text-center mt-5">Projects</h1>

        <div class="container my-5">
          <div class="row my-5">
            <div class="col">
              <Link to="/Cart">
                <MyCard
                  src="images\Cart\development-screenshot.png"
                  title="Shopping Cart Site"
                  caption="An interactive shopping cart site using React."
                  date="Project created Dec. 1, 2020"
                  type="UI/UX"
                ></MyCard>
              </Link>
            </div>

            <div class="col">
              <Link to="/Iterative-Design">
                <MyCard
                  src="images\Home\iterative-design-image.png"
                  title="Iterative Design"
                  caption="Going through the iterative design process for the Quell website."
                  date="Project created Nov. 10, 2020"
                  type="UI/UX"
                ></MyCard>
              </Link>
            </div>
          </div>

          <div class="row my-5">
            <div class="col">
              <Link to="/Zumix-Redesign">
                <MyCard
                  src="images\Home\zumix.png"
                  title="Zumix Redesign"
                  caption="Redesigning the Zumix webpage."
                  date="Project created Oct. 20, 2020"
                  type="UI/UX"
                ></MyCard>
              </Link>
            </div>
            <div class="col">
              <Link to="/Personas">
                <MyCard
                  src="images\Home\Storyboard_1.png"
                  title="Personas"
                  caption="Creating personas for an oven interface."
                  date="Project created Oct. 6, 2020"
                  type="UI/UX"
                ></MyCard>
              </Link>
            </div>
          </div>

          <div class="row my-5">
            <div class="col">
              <Link to="/Research">
                <MyCard
                  src="images\Home\query.png"
                  title="ReSearch"
                  caption="A website to search for research papers based on an inputted query."
                  date="Project created May 16, 2020"
                  type="Software Engineering"
                ></MyCard>
              </Link>
            </div>
            <div class="col"></div>
          </div>
        </div>

        <MDBAnimation reveal type="fadeIn">
          <div>
            <h1 className="text-center my-5">Music</h1>
            <div className="mx-auto w-75 container">
              <div className="row">
                <div className="col">
                  <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943382113%3Fsecret_token%3Ds-a4QazWKhDD2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                      fontWeight: "100",
                    }}
                  >
                    <a
                      href="https://soundcloud.com/user-693612376"
                      title="Michael Tu"
                      target="_blank"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      Michael Tu
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/user-693612376/drive-through-snow/s-a4QazWKhDD2"
                      title="Drive Through Snow"
                      target="_blank"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      Drive Through Snow
                    </a>
                  </div>
                </div>
                <div className="col">
                  <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943381927%3Fsecret_token%3Ds-glps9OXdfro&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                      fontWeight: "100",
                    }}
                  >
                    {" "}
                    <a
                      href="https://soundcloud.com/user-693612376"
                      title="Michael Tu"
                      target="_blank"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      Michael Tu
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/user-693612376/romantic-theme/s-glps9OXdfro"
                      title="Romantic Theme"
                      target="_blank"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      Romantic Theme
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto text-center mt-5">
              <a class="btn mx-auto" href="Music">
                <i class="fas fa-music"></i> View More Music
              </a>
            </div>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}
export default Home;
