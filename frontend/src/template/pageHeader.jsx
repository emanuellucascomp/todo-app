import React from 'react';

export default props => (
    <div>
        <header className='page-header'>
            <h2>{props.name} <small>{props.small}</small></h2>
        </header>
    </div>
)