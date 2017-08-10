import React, {Component} from 'react';

export class Pages extends Component {
    render() {
        const {isOpened, openMenu, closeMenu, isSidebarOpened} = this.props;

        return (
            <div className="pages">
                <div className={"menu " + (isOpened ? "menu_opened" : "menu_closed")}>
                    <div className="menu__name">
                        <div onClick={isOpened ? () => closeMenu('pages') : () => openMenu('pages')}>
                            <i className="fa fa-folder-open"/>
                        </div>
                        {isSidebarOpened ?
                            <div onClick={isOpened ? () => closeMenu('pages') : () => openMenu('pages')}>
                                Pages
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
