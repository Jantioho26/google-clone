import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



function Search({ hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        console.log('You hit the search button', input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })


        history.push('/search')
    };
        
    return (
     <form className='search'>
        <div className='search__input'>
            <SearchIcon className="search__inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon />
        </div>

        {!hideButtons ? (
           <div className="search__buttons">
            <button type='submit' onClick={search}>Google Search</button>
            <button>I'm Feeling Lucky</button>
            </div>
        ): (
             <div className="search__buttons">
            <button className="search__buttonsHidden"
            type='submit' onClick={search}>Google Search</button>
            <button className="search__buttonsHidden">I'm Feeling Lucky</button>
            </div>
        )}
     </form>
    ); 
    }


export default Search; 

