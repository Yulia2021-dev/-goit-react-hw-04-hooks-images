import "./App.css";

import { Component } from "react";

export default class App extends Component {
  state = {
    picture: null,
  };
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((picture) => this.setState(picture));
  }

  render() {
    return <div>{this.state.picture && <div>Тут будет картинка</div>}</div>;
  }
}
