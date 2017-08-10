import React, {Component} from 'react';

export class Layouts extends Component {
    render() {
        const {isOpened, openMenu, closeMenu, isSidebarOpened} = this.props;

        return (
            <div className="layouts">
                <div className={"menu " + (isOpened ? "menu_opened" : "menu_closed")}>
                    <div className="menu__name">
                        <div onClick={isOpened ? () => closeMenu('layouts') : () => openMenu('layouts')}>
                            <i className="fa fa-desktop"/>
                        </div>
                        {isSidebarOpened ?
                            <div onClick={isOpened ? () => closeMenu('layouts') : () => openMenu('layouts')}>
                                Layouts
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
