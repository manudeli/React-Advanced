import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ currentUser }) => (
          <div>
            MovieList {currentUser ? currentUser.name : ""} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

MovieList.contextType = UserContext;

export default MovieList;
