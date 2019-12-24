import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    console.log('aee', e.target.checked)
    this.props.onInStockChange(e.target.checked);
  }

  render() {

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input 
            type="checkbox" 
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
/* const SearchBar = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}
 */
export default SearchBar