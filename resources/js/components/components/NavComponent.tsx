import React from 'react';
import { Link } from 'react-router-dom';
import { NamedRoutes } from '../routes';

export default class NavComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={NamedRoutes.home.url}>Home</Link>
                    </li>
                    <li>
                        <Link to={NamedRoutes.aboutus.url}>About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}