import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div',{id: 'child'},
        [React.createElement('h1', {id: 'child1', key: 'child1'}, "I am h1 tag"),
            React.createElement('h2', {id: 'child2', key: 'child2'}, "I am h2 tag")
        ]
    )
)


const heading = React.createElement('h1', {className: "heading"}, "Hello, Milan! good luck mastering react");
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent);