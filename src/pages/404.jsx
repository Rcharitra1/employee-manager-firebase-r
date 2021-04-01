import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return ( 
        <header>
            <h1>Page not found</h1>
            <Link to='/'>Home</Link>
        </header>
     );
}
 
export default PageNotFound;