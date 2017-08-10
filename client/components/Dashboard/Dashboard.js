import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        const {isOpened, openMenu, closeMenu, isSidebarOpened} = this.props;

        return (
            <div className="dashboard">
                <div className={"menu " + (isOpened ? "menu_opened" : "menu_closed")}>
                    <div className="menu__name">
                        <div onClick={isOpened ? () => closeMenu('dashboard') : () => openMenu('dashboard')}>
                            <i className="fa fa-tachometer"/>
                        </div>
                        {isSidebarOpened ?
                            <div onClick={isOpened ? () => closeMenu('dashboard') : () => openMenu('dashboard')}>
                                Dashboard
                            </div>
                            :
                            null
                        }
                    </div>
                    {isOpened && isSidebarOpened ?
                        <ul type="circle" className="menu__list">
                            <li><NavLink to="/">Dashboard 1</NavLink></li>
                            <li><NavLink to="/">Dashboard 2</NavLink></li>
                            <li><NavLink to="/">Dashboard 3</NavLink></li>
                            <li><NavLink to="/">Coming Soon</NavLink></li>
                        </ul>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}
