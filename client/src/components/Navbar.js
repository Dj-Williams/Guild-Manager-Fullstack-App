import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li>
                        <Link to='#'>About Page</Link>
                    </li>

                    <li>
                        <Link to='/quests'>Quests</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Navbar;