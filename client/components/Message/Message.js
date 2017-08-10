import React, {Component} from 'react';

export class Message extends Component {
    render() {
        const {isOpened, openMenu, closeMenu, isSidebarOpened} = this.props;

        return (
            <div className="message">
                <div className={"menu " + (isOpened ? "menu_opened" : "menu_closed")}>
                    <div className="menu__name">
                        <div onClick={isOpened ? () => closeMenu('message') : () => openMenu('message')}>
                            <i className="fa fa-weixin"/>
                        </div>
                        {isSidebarOpened ?
                            <div onClick={isOpened ? () => closeMenu('message') : () => openMenu('message')}>
                                Messages
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
