import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = async (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3.5}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={12}
                  category="general"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={12}
                  category="business"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={12}
                  key="entertainment"
                  category="entertainment"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              key="health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={12}
                  category="health"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={12}
                  category="science"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={12}
                  category="sports"
                  country="in"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={12}
                  category="technology"
                  country="in"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
