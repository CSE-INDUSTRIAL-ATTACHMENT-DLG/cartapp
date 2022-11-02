import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Item extends Component {
    state = {
        itemCount: 0,
    }

    incrementCount() {
        this.setState({
            itemCount: this.state.itemCount + 1,
        })
    }

    decrementCount() {
        this.setState({
            itemCount: this.state.itemCount - 1,
        })
    }

    render() {
        return (
            <div>
                <Row className='px-4 mt-3'>
                    <Col>Item {this.props.count}</Col>
                    <Col>
                        <Button variant="danger" onClick={this.state.itemCount > 0 ? () => this.decrementCount() : null}>-</Button>
                    </Col>
                    <Col>
                        {this.state.itemCount}
                    </Col>
                    <Col>
                        <Button variant="success" onClick={this.state.itemCount < 1000 ? () => this.incrementCount() : null}>+</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Item;
