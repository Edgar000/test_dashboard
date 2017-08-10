import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Sidebar} from '../Sidebar/Sidebar';
import {Topbar} from '../Topbar/Topbar';
import {Content} from '../Content/Content';
import './App.scss';

export class App extends Component {
    state = {
        isSidebarOpened: true
    };

    openSidebar = () => {
        this.setState({
            isSidebarOpened: true
        });
    };

    closeSidebar = () => {
        this.setState({
            isSidebarOpened: false
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Sidebar isOpened={this.state.isSidebarOpened}
                             openSidebar={this.openSidebar}
                             closeSidebar={this.closeSidebar}
                    />
                    <div className="app__right-side">
                        <Topbar isSidebarOpened={this.state.isSidebarOpened}
                                openSidebar={this.openSidebar}
                                closeSidebar={this.closeSidebar}
                        />
                        <Switch>
                            <Route exact path="/"
                                   component={() => (<Content isSidebarOpened={this.state.isSidebarOpened}/>)}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
