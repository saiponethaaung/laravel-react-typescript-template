import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoutes } from './routes';
import NavComponent from './components/NavComponent';

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <BrowserRouter>
                <NavComponent />
                <AppRoutes />
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
