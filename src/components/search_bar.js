import React, { Component } from 'react';

// Class based components always add React.Component to give it more functionnality, and also must have a render function that returns jsx.  In general start with basic functional component, then upgrade to class based if it needs to be aware of state.
// const SearchBar = () => {
//   return (
//     <div>
//       <input />
//     </div>
//   );
// }
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
   );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
