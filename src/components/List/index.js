import React, { Fragment } from 'react';

import './styles.css';
import ListItem from "./ListItem";

function List({data, action}) {
    return (
        <Fragment>
            {data.map((item) => {
                return <ListItem key={`${item.id}`} {...{item, action}} />
            })}
        </Fragment>
    );
}

export default List;
