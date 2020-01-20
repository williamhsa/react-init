import React, { useState } from 'react'
import ProductRow from './ProductRow/ProductRow'
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow'

class ProductTable extends React.Component {
  
  render() {

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {

      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    const styleTable = {
      margin: "auto"
    }

    return (
      <table style={styleTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
/* const ProductTable = (props) => {

  const [rows, setRows] = useState([])
  const [lastCategory, setLastCategory] = useState(null)

  props.products.forEach((product) => {

    if (product.category !== lastCategory) {
      setRows( prevArray => [...prevArray,
        <ProductCategoryRow
          category={product.category}
          key={product.category} /> ]
      )
    }
    setRows( prevArray => [...prevArray,
      <ProductRow
        product={product}
        key={product.name} /> ]
    )

    setLastCategory(product.category)

  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
} */

export default ProductTable



