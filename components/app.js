import React from "react";
import ReactDOM from "react-dom";
//import BookList from "../container/book-list";
export class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <h1>Hello </h1>;
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
