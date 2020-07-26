import React from "react";
// import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import "./App.css";
import {fetchTag} from "../store/types";


class Tags extends React.Component {
  componentDidMount() {
    // If login, user data
    // if (localStorage.authToken) {
    //   let url = "https://conduit.productionready.io/api/user";
    //   fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Token ${localStorage.authToken}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then(({ user }) => {
    //       this.setState({ isLoggedIn: true, userInfo: user });
    //     })
    //     .catch((err) => this.setState({ isLoggedIn: false }));
    // }

    // Tags
    this.props.dispatch(
      fetchTag("https://conduit.productionready.io/api/tags")
    );
  }

  render() {
    const { tags, articles } = this.props;
    return (
      <div className="">
        <ul>
          {tags.map((tag) => {
            return (
              <li key={tag + Math.random()}>
                <h2>{tag}</h2>
              </li>
            );
          })}
        </ul>
        <button>{articles.length}</button>
      </div>
    );
  }
}

function mapState(state) {
  return { ...state };
}
export default connect(mapState)(Tags);
