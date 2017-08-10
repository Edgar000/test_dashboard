import React, {Component} from 'react';
import './Content.scss';

export class Content extends Component {
    render() {
        const {isSidebarOpened} = this.props;

        return (
            <div className={"content " + (isSidebarOpened ? "content_opened" : "content_closed")}>
                <div className="content__table">
                    <div className="content__table__first-main-row">
                        <div className="content__table__first-main-row first-cell">RECENT ORDER</div>
                        <div className="content__table__first-main-row second-cell">Buttons</div>
                    </div>
                    <div className="content__table__second-main-row">
                        <div>IMAGE</div>
                        <div>PRODUCT NAME</div>
                        <div>PRODUCT CODE</div>
                        <div>STATUS</div>
                        <div>PURCHASED ON</div>
                        <div>PRICE</div>
                        <div>QUANTITY</div>
                        <div>TRACKING NO#</div>
                    </div>
                </div>
            </div>
        );
    }
}
