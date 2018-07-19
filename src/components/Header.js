import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-gavel"></span>
                    <h1> <strong> Cisneros Law P.C.</strong>  </h1>
                    <p>Immigration | Family Law | Wills <br/> Trusts and Estates | Traffic | DUI</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About Me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
