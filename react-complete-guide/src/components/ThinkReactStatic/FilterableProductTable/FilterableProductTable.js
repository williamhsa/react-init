import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  
  render() {

    console.log('props', this.props)

    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} 
        />
      </div>
    );
  }
}

export default FilterableProductTable

// const FilterableProductTable = (props) => {

//   const handlerClickMe = () => {
//     console.log('props.products', props.products)
//   }

 
//   return (
//     <div>
//       <SearchBar />
//       <ProductTable products={props.products}/>
//       <p onClick={handlerClickMe}> click me</p>
//     </div>
//   )
// }
