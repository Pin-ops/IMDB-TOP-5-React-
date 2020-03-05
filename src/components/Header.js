import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Header () {
    return(
        <Navbar bg="dark" className="mb-3">
            <Navbar.Brand className="text-white" href="/">IMDB</Navbar.Brand>

            <Nav className="mr-auto ">
                <Nav.Link className="text-white" href="/home">Home</Nav.Link>
                <Nav.Link className="text-white" href="/movies">Movies</Nav.Link>
                <Nav.Link className="text-white" href="/chart&trends">Chart & Trends</Nav.Link>
                <Nav.Link className="text-white" href="/tv&videos">TV & Videos</Nav.Link>
                <Nav.Link className="text-white" href="/categories">Categories</Nav.Link>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>

        </Navbar>
    )
 }

export default Header;