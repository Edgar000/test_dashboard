import React, {Component} from 'react';
import {User} from '../../components/User/User';

/* Every menu kept in it's own component, assuming that they will have completely different appearance,
 such as "dashboard" menu is not like "message" menu */

import {Dashboard} from '../../components/Dashboard/Dashboard';
import {Layouts} from '../../components/Layouts/Layouts';
import {Pages} from '../../components/Pages/Pages';
import {Message} from '../../components/Message/Message';
import './Sidebar.scss';

export class Sidebar extends Component {
    state = {
        isHovered: false,
        isDashboardOpened: false,
        isLayoutsOpened: false,
        isPagesOpened: false,
        isMessageOpened: false
    };

    openMenu = (menu) => {
        switch (menu) {
            case 'dashboard':
                this.setState({
                    isDashboardOpened: true
                });
                break;
            case 'layouts':
                this.setState({
                    isLayoutsOpened: true
                });
                break;
            case 'pages':
                this.setState({
                    isPagesOpened: true
                });
                break;
            case 'message':
                this.setState({
                    isMessageOpened: true
                });
                break;
        }
    };

    closeMenu = (menu) => {
        switch (menu) {
            case 'dashboard':
                this.setState({
                    isDashboardOpened: false
                });
                break;
            case 'layouts':
                this.setState({
                    isLayoutsOpened: false
                });
                break;
            case 'pages':
                this.setState({
                    isPagesOpened: false
                });
                break;
            case 'message':
                this.setState({
                    isMessageOpened: false
                });
                break;
        }
    };

    startHovering = () => {
        const {isOpened, openSidebar} = this.props;
        if (!isOpened) {
            openSidebar();
            this.setState({
                isHovered: true
            });
        }
    };

    endHovering = () => {
        const {closeSidebar} = this.props;
        if (this.state.isHovered) {
            closeSidebar();
            this.setState({
                isHovered: false
            });
        }
    };

    render() {
        const {isOpened} = this.props;

        return (
            <div className={"sidebar " + (isOpened ? "sidebar_opened" : "sidebar_closed")}
                 onMouseEnter={this.startHovering}
                 onMouseLeave={this.endHovering}>
                {isOpened ?
                    <div className="sidebar__logo">
                        Company
                    </div>
                    :
                    <div className="sidebar__logo">
                        C
                    </div>
                }
                <User isSidebarOpened={isOpened}/>
                { isOpened ?
                    <div className="sidebar__general">
                        GENERAL
                    </div>
                    :
                    null
                }
                <Dashboard isOpened={this.state.isDashboardOpened}
                           openMenu={this.openMenu}
                           closeMenu={this.closeMenu}
                           isSidebarOpened={isOpened}
                />
                <Layouts isOpened={this.state.isLayoutsOpened}
                         openMenu={this.openMenu}
                         closeMenu={this.closeMenu}
                         isSidebarOpened={isOpened}
                />
                <Pages isOpened={this.state.isPagesOpened}
                       openMenu={this.openMenu}
                       closeMenu={this.closeMenu}
                       isSidebarOpened={isOpened}
                />
                <Message isOpened={this.state.isMessageOpened}
                         openMenu={this.openMenu}
                         closeMenu={this.closeMenu}
                         isSidebarOpened={isOpened}
                />
            </div>
        );
    }
}
