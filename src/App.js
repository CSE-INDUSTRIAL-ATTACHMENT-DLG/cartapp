import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import Button from 'react-bootstrap/esm/Button';

class App extends Component {
  state = {
    count: 0,
  }

  addItems() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    var items = [];

    for (var i = 1; i <= this.state.count; i++) {
      items.push(i);
    }

    return (
      <div className='p-5'>
        <Button variant="info" onClick={() => this.addItems()}>Click To Add Items</Button>
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;

