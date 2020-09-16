import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
//import Code from 'components/common/code-block';
//import { productsGenerator } from 'utils/common';

/**
 * products generator for stories
 *
 * @param {Number} quantity - quantity of products
 * @param {Function} callback - callback func which is similiar to 'mapFunction'
 * aims to customize product format
 *
 * @return {Array} - products array
 */
const productsGenerator = (quantity = 5, callback) => {
  if (callback) return Array.from({ length: quantity }, callback);

  // if no given callback, return default product format.
  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      name: `Item name ${index}`,
      price: 2100 + index
    }))
  );
};

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: products };
  }

  handleClick = () => {
    this.setState(() => {
      const newProducts = productsGenerator(21);
      return {
        data: newProducts
      };
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={ this.handleClick }>Change Data</button>
        <BootstrapTable keyField="id" data={ this.state.data } columns={ columns } />
      </div>
    );
  }
}
