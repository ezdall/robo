import React from 'react';
//
import SearchBox from '../components/seach-box.comp';
import CardList from '../components/card-list.comp';
import ErrorBoundry from '../components/error-boundry.comp';

//
import './App.css';
//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    const { robots } = this.props;

    // input-from: props
    // returns object w/ 'robots', { robots:[...] }
    this.setState(() => ({ robots }));
  }

  onSearchChange(ev) {
    const { value } = ev.target;

    // input-from: input-search-box, event
    this.setState({ searchField: value });
  }

  render() {
    const { robots, searchField } = this.state;

    const filterRobots = robots.filter(r => {
      return r.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(searchField);

    return (
      <>
        <SearchBox
          searchField={searchField}
          onSearchChange={this.onSearchChange}
        />
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </>
    );
  }
}
