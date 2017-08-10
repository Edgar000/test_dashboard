import React, {Component} from 'react';
import './User.scss';
import avatar from '../../img/avatar.png';

export class User extends Component {

    render() {
        const {isSidebarOpened} = this.props;

        return (
            <div className="user">
                <div>
                    <img src={avatar}/>
                </div>
                {isSidebarOpened ?
                    <div>
                        <div className="user__name">
                            User Name
                        </div>
                        <div className="user__company-name">
                            Company name
                        </div>
                    </div>

                    :
                    null
                }
            </div>
        );
    }
}
