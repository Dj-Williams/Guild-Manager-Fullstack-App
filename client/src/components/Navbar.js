import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>

<li>
    <Link to='#'>Dummy Link</Link>
</li>

<li>
    <Link to='#'>Dummy Link</Link>
</li>

<li>
    <Link to='#'>About Page</Link>
</li>

<li>
    <Link to='/'>Quests</Link>
</li>

</ul>
            </div>
        );
    }
}

export default Navbar;