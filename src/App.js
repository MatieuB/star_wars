import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import LoadingIcon from "./loading.component";
import Layout from "./Layout.component";

class App extends Component {
  state = {
    data: null,
    filmData: null,
    category: "characters",
    loading: true
  };

  async componentDidMount() {
    await this.fetchResults();
  }

  fetchResults = async newUrl => {
    await this.setState(() => ({ loading: true }));
    const category =
      this.state.category === "characters" ? "people" : this.state.category;

    const url = newUrl || `https://swapi.co/api/${category}`;
    const filmUrl = `https://swapi.co/api/films/`;
    const randomFilm = Math.floor(Math.random() * 7 + 1);
    const { data } = await axios(url);
    const filmData = await axios(filmUrl + randomFilm);

    this.setState(() => ({
      data,
      filmData: filmData.data,
      loading: false
    }));
  };

  changePage = async next => {
    console.log("state", this.state);
    next
      ? await this.fetchResults(this.state.data.next)
      : await this.fetchResults(this.state.data.previous);
  };

  setCategory = async category => {
    await this.setState(() => ({ category }));
    await this.fetchResults();
  };

  render() {
    if (!this.state.filmData) {
      return (
        <div
          style={{
            margin: "auto",
            width: "100%",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <LoadingIcon />
        </div>
      );
    }

    return (
      <div className="App">
        <Layout
          {...this.state}
          changePage={this.changePage}
          setCategory={this.setCategory}
        />
      </div>
    );
  }
}

export default App;
