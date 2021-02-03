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
          Shopping Cart Site
        </h1>
        <h4 class="text-center grey-text">Project created Dec. 1 2020</h4>
        <h5 class="text-center grey-text mb-5">Created by Michael Tu</h5>
        <div className="mx-auto animated fadeInUp w-50 ">
          <h4 className="mt-4 mb-3 text-center">Overview</h4>
          <p>
            For my cs1300 Development assignment, I have created a mock shopping
            site for mechanical keyboards. Users can view the different
            keyboards and their descriptions, sort them by price, filter for
            certain brands, and add them to a cart for purchasing. You can visit
            the site by clicking on the image below.
          </p>

          <a href="https://peaceful-gorge-03234.herokuapp.com/">
            <img
              className="rounded w-75 mx-auto d-block hoverable border"
              src="images\Cart\development-screenshot.png"
            ></img>
          </a>

          <p className="text-center mt-5 mb-5">
            Click the image above to view the site.
          </p>

          <h4 className="mt-5 mb-3 text-center">Usability Principles</h4>
          <div className="row justify-content-center">
            <div className="col">
              <table className="mx-auto table w-75">
                <thead className="thead-light">
                  <th scope="col">#</th>
                  <th scope="col">Usability</th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      To keep the flow of the page clear and easy to use, the
                      cards are on the left page, while the cart is on the right
                      page. This is inspired by the TA example.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      In order to give the user control and freedom. There are
                      multiple ways of adding items to the cart. Users could
                      either add them through the "add to cart" button, or by
                      incrementing the quantity. If a user does not notice the
                      "+" button to increment the quantity, clicking the add to
                      cart button again would work.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      There is clear information about the search results
                      provided by the filtering and sorting. The prices and
                      switches of the keyboards is clearly visible, and when no
                      items match the search query, there is a message letting
                      the user know.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 className="mt-4 mb-3 text-center">Github Repository</h4>
          <p className="text-center">
            A link to the Github Repository can be found
            <a href="https://github.com/sdid20000/development"> here</a>
          </p>
        </div>
      </div>
    );
  }
}
export default Cart;
