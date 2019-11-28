import React, {Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { performSearch } from '../../store/search/Actions';
import './styles.css';

function SearchBox() {
    const {
        search: {
            imageUrl = ''
        }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const [searchTxt, setSearchTxt] = useState('');

    const handleChangeSearchTxt = () => {
        dispatch(performSearch(searchTxt));
    };

    const handleSearch = e => {
        setSearchTxt(e.target.value);
    };

    return (
        <div>
            <div className="search-box">
                <input type={'text'} onChange={handleSearch} />
                <button onClick={handleChangeSearchTxt}>Search</button>
            </div>
            <div>
                {imageUrl &&
                    <Fragment>
                        <img src={imageUrl} alt={'Giphy'} />
                        <div>{imageUrl}</div>
                    </Fragment>}
            </div>
        </div>
    );
}

export default SearchBox;
