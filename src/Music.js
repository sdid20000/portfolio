import { MDBAnimation } from "mdbreact";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

class Music extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    this.scrollTop();
    return (
      <div>
        <h1 className="text-center my-5">Sheet Music</h1>
        <MDBAnimation reveal type="fadeIn">
          <div className="mx-auto my-6 w-50">
            <AwesomeSlider>
              <div data-src="/images/Music/music.jpg"></div>
              <div data-src="/images/Music/music2.jpg"></div>
              <div data-src="/images/Music/music3.jpg"></div>
            </AwesomeSlider>
          </div>
          <div className="mx-auto text-center my-5">
            <a
              class="btn mx-auto"
              href="https://drive.google.com/drive/folders/1nfZLzmb0iqos69ZSu-9V26iFi-lwg95b?usp=sharing"
            >
              <i class="fas fa-music"></i> View All Sheet Music
            </a>
          </div>
        </MDBAnimation>

        <h1 className="text-center my-5">Mp3s</h1>
        <div className="container">
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
                  Michael Tu{" "}
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
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943382038%3Fsecret_token%3Ds-mYKuopB35L0&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                  href="https://soundcloud.com/user-693612376/short-spooky-ambience/s-mYKuopB35L0"
                  title="Short Spooky Ambience"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Short Spooky Ambience
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
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943385014%3Fsecret_token%3Ds-HqbPwddGT5G&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                  href="https://soundcloud.com/user-693612376/wizard-war/s-HqbPwddGT5G"
                  title="Wizard War"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Wizard War
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943385089%3Fsecret_token%3Ds-IWRV0x1to33&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                  href="https://soundcloud.com/user-693612376/far-away/s-IWRV0x1to33"
                  title="Far Away"
                  target="_blank"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Far Away
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
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Music;
