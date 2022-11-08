import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./app.css";
import ErrorBoundary from '../components/ErrorBoundary'

// App is a smart component as it is a class and has a state
class App extends React.Component {
  constructor() {
    super();
    // State is a piece of data that describes our app
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // Function which runs code when the react component is mounted
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots} />
            </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
