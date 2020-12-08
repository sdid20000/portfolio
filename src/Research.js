import React from "react";
import { MDBAnimation } from "mdbreact";

class Research extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }
  render() {
    this.scrollTop();
    return (
      <div>
        <h1 class="text-center mt-5 font-weight-bold">ReSearch</h1>
        <h4 class="text-center grey-text">Project created May 16, 2020</h4>
        <h5 class="text-center grey-text mb-5">
          Created by Joe, Bob, Billy, Josh
        </h5>

        <MDBAnimation reveal type="fadeInUp">
          <h2 className="text-center mt-5 font-weight-bold">
            {" "}
            What is ReSearch?
          </h2>
          <div className="mx-auto w-50">
            ReSearch, as described by its name, is a database of research papers
            and researchers designed to make it easier for individuals to find
            relevant literature and key contributors in different academic
            fields. The database is built around papers from Arxiv, an
            open-access archive for scholarly articles. Given a user query,
            ReSearch searches through thousands of papers and finds the most
            similar papers and authors to the user query. Not only does ReSearch
            provide an easy to understand similarity metric of each search
            result, it also provides a visualization for users to understand how
            similar their query is to the articles in the database. What
            differentiates ReSearch from other academic search engines, such as
            Google Scholar or EBSCOHost, is that there is no limit on the size
            of the user query term. Instead of searching with generic key
            phrases such as "machine learning" or "deep learning", ReSearch
            allows users to search with detailed text such as an entire research
            statement. In this way, ReSearch can tailor its results to the user
            with more accuracy.
          </div>

          <img
            src="images/ReSearch/query.png"
            className="d-block mx-auto w-75 border rounded shadow my-5"
          ></img>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <div className="mx-auto w-50">
            <h2 className="text-center mt-5 font-weight-bold">
              Program Design
            </h2>
            <p>
              Information regarding the research papers is sourced from Arxiv.
              The reSearch program queries Arxiv for information about papers
              within a certain date range and about a specifed set of subjects.
              For each paper, the querier retrieves metadata, including id,
              title, authors, journal reference, and abstract. The Arxiv querier
              stores all of these results in a CSV file, where each line
              represents a research paper. When running the actual program, the
              back-end reads directly from this CSV file rather than query from
              Arxiv, as Arxiv's rate limiting policy of 1 query/5 seconds make
              any real-time queries impossible.
            </p>
            <h4 className="text-center mt-5">1. Arxiv querying/parsing</h4>
            <p>
              To support our nearest neighbors search algorithm, we need to find
              a vector form that represents each research paper. To do so, we
              represent each paper with the vectorized form of the paper's
              abstract. The Python server handles word2Vec requests. Given a
              word, the server returns the word2Vec result vector of the word.
              Given a paragraph, the server extracts key terms, vectorizes these
              terms, aggregates the term vectors, and returns a single vector
              representing the paragraph. To represent a researcher, every paper
              authored by the researcher is averaged to form an aggregate vector
              of sorts. For the visualization of the program, the Python server
              also handles using the t-sne algorithm to reduce the vector
              dimensions.
            </p>
            <h4 className="text-center mt-5">
              2. Python server/word2Vec/t-sne
            </h4>
            <p>
              To support our nearest neighbors search algorithm, we need to find
              a vector form that represents each research paper. To do so, we
              represent each paper with the vectorized form of the paper's
              abstract. The Python server handles word2Vec requests. Given a
              word, the server returns the word2Vec result vector of the word.
              Given a paragraph, the server extracts key terms, vectorizes these
              terms, aggregates the term vectors, and returns a single vector
              representing the paragraph. To represent a researcher, every paper
              authored by the researcher is averaged to form an aggregate vector
              of sorts. For the visualization of the program, the Python server
              also handles using the t-sne algorithm to reduce the vector
              dimensions.
            </p>
            <h4 className="text-center mt-5">
              3. Locality sensitive hashing/nearest neighbors search
            </h4>
            <p>
              Locality sensitive hashing (LSH) is a probabilistic algorithm used
              to find nearest neighbors. The vector representations of the
              research papers are of 300 dimensions. LSH allows the program to
              manage objects of such high dimensionality in sub-linear time. It
              does so by using hyperplanes to divide the 300 dimensional vector
              space in many regions, such that it is likely for similar vectors
              to be grouped in the same region. In this program, the similarity
              metric used is cosine similarity. For a more in-depth description
              of LSH, read this post:
              https://towardsdatascience.com/fast-near-duplicate-image-search-using-locality-sensitive-hashing-d4c16058efcb.
              Note: because this program uses cosine similarity rather than
              euclidean distance, the setup of the algorithm is slightly
              different.
            </p>
            <h4 className="text-center mt-5">4. Kmeans clustering</h4>
            <p>
              To find natural groupings of research papers and researchers, the
              program also implements a clustering algorithm to visually display
              the research papers and researchers on a plot. The clustering
              algorithm clusters the 300 dimensional vectors for research papers
              and researchers. Then, to display these clusters to the user, the
              algorithm uses the python server's t-SNE algorithm to reduce these
              300 dimensional vectors to 2 dimensions. These two dimensional
              representations can then be plotted for the user to see.
            </p>
          </div>

          <img
            src="images/ReSearch/results.png"
            className="d-block mx-auto w-75 border rounded shadow my-5"
          ></img>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <h2 className="text-center mt-5 font-weight-bold">
            Division of Labor
          </h2>

          <div className="mx-auto w-50">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Billy Bob</th>
                  <td>
                    Python server (word2vec, vectorizing paragraphs and phrases,
                    access Azure cognitive service), Json Utility functions,
                    GraphManager, Query page
                  </td>
                </tr>
                <tr>
                  <th scope="row">Josh person</th>
                  <td>
                    KMeans++ algorithm, front end graph page and implementation.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Joe Schmoe</th>
                  <td>
                    Data retrieval and cleaning, front end results page design
                    and implementation.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Larry</th>
                  <td>
                    Locality Sensitive hashing, nearest neighbors search,
                    research paper and researcher representation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}
export default Research;
