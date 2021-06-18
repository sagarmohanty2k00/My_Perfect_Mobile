import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    myPerfectMobile.com
                </div>
                <div className="header__desc">
                    I suggest you the phone that suits your needs
                </div>
            </div>

            <div className="header__search">
                <div className="fa fa-search"></div>
                <input type="text" placeholder="search here" />
            </div>

        </div>
    )
}

export default Header
