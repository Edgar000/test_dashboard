import React, {Component} from 'react';
import './Topbar.scss';

export class Topbar extends Component {
    render() {
        const {isSidebarOpened, openSidebar, closeSidebar} = this.props;

        return (
            <div className={"topbar " + (isSidebarOpened? "topbar_opened" : "topbar_closed")}>
                <div className="topbar__navigation">
                    {isSidebarOpened ?
                        <div className="topbar__open-button" onClick={() => closeSidebar()}>
                            <i className="fa fa-outdent"/>
                        </div>
                        :
                        <div className="topbar__close-button" onClick={() => openSidebar()}>
                            <i className="fa fa-outdent"/>
                        </div>
                    }
                    <div className="topbar__location">
                        Dashboard
                    </div>
                </div>
                <div className="topbar__period">
                    Reporting Period
                    <select>
                        <option>Last 30 Day's</option>
                    </select>
                </div>
            </div>
        );
    }
}
