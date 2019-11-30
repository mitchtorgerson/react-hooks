import React from 'react';
import EllipsisText from "react-ellipsis-text";

import './styles.css';

function ListItem({item, action}) {
    return (
        <div className={'list-item'} onClick={() => action(item)}>
            <EllipsisText text={item.title} length={40} />
            <div className={'user-name'}>User: {item.userId}</div>
        </div>
    );
}

export default ListItem;
