import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default layout;