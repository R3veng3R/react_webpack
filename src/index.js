import React from 'react';
import ReactDOM from 'react-dom';
import App from "@/components/app/App";

import './style/style.scss'; // COMMON STYLES

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

module.hot.accept();