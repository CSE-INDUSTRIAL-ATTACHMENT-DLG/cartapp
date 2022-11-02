import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render() {
        const items = this.props.items.map((item) =>
            <div>
                <Item count={item} />
                <br />
            </div>
        )

        return (
            <div>
                {items}
            </div>
        )
    }
}

export default ItemList;
