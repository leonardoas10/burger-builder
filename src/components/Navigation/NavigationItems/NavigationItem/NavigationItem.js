import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <p className="as"></p>
        <NavLink
            to={props.link}
            activeClassName={classes.active}
            exact
        >
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem ;