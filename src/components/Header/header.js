import React from 'react';
import HeaderTitle from './headerTitle';
import HeaderNavbar from './headerNavbar';
import headerImage from '../../images/header_icon.png';
import HeaderExtra from './headerExtra';
import './header.scss';

class Header extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="header-icon-class">
                    <img src={headerImage}></img>
                </div>
                <div className="header-area">
                    <HeaderTitle />
                    <HeaderNavbar />
                </div>
                <HeaderExtra />
            </div>
        )
    }

}

export default Header;