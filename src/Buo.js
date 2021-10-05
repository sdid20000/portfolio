import React from "react";

class Cart extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    this.scrollTop();
    return (
      <div>
        <h1 className="text-center font-weight-bold mt-5">
          Brown University Orchestra Website
        </h1>
        <h4 class="text-center grey-text">Project created in 2020</h4>
        <h5 class="text-center grey-text mb-5">Created by Michael Tu and Isaac Kim</h5>
        <div className="mx-auto animated fadeInUp w-50 ">
          <h4 className="mt-4 mb-3 text-center">Overview</h4>
          <p>
            During my time on the orchestra board, we had decided to update the outdated orchestra website. The old site was old, was built in Angular and looked
            like a website from the early 2000s. So during the remote 2020-2021 school year, we decided to redesign and rebuild it from the ground up. 
          </p>

          <a href="https://www.brown.edu/Departments/Music/sites/orchestra/">
            <img
              className="rounded w-75 mx-auto d-block hoverable border"
              src="images\\Buo\\buo-homepage.png"
            ></img>
          </a>

          <p className="text-center mt-5 mb-5">
            Click the image above to view the site.
          </p>

          <p>
            One thing that we made sure to have was that the website would be sustainable, and edits could easily be made after we left. The website has a very
            robust system where authorized users can input new information into the site, and it will be updated automatically. An image showing the process is shown below.
          </p>

          <img
              className="rounded w-75 mx-auto d-block hoverable border"
              src="images\\Buo\\buo-progress.png"
            ></img>

        </div>
      </div>
    );
  }
}
export default Cart;
