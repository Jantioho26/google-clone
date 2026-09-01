import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';



function Search() {
    const [input, setInput] = useState('')

    const search = e => {
        e.preventDefault();
    }
    return (
     <div className='search'>
        <div className='search__input'>
            <SearchIcon className="search__inputIcon" />
            <input />
            <MicIcon />
        </div>
        <div className="search__buttons">
           <button onClick={search}>Google Search</button>
           <button>I'm Feeling Lucky</button>
        </div>
     </div>
    );
}

export default Search; 

