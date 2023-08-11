import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div>
            <input 
            className='b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange = {searchChange} 
            />
        </div>
    )
}


export default Searchbox