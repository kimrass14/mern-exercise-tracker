import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const NavigationBar = () => {

    return(
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <h2>Exercise Tracker</h2>
            <Nav.Item>
                <Nav.Link><Link to='/'>Exercises</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='/edit/:id'>Edit Exercise</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='/create'>Create Exercise</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='/user'>User</Link></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default NavigationBar;