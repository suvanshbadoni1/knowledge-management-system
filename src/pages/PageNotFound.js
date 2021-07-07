import React from 'react'
import {Link} from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <h1>
                Page Not Found !!!! '='
                <h3>
                    Go to the 
                    <Link to="/">Home page</Link>
                </h3>
            </h1>
        </div>
    )
}

export default PageNotFound
