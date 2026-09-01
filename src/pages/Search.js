import React from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';


function Search() {
    return (
     <div className='search'>
        <div className='search__input'>
            <SearchIcon className="search__inputIcon" />
            <input />
            <MicIcon />
        </div>
     </div>
    );
}

export default Search; 

