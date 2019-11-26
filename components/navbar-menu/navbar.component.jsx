import React from 'react';
import Login from '../login/login.component';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col} from 'reactstrap';

const NavBar = () => (
    <div className=''>
        <br/>
        <Container className="list-unstyled ">
            <Row className='d-flex justify-content-end'>

                <NavItem>
                <NavLink href="#">走进我们</NavLink>
                </NavItem>
                

                <NavItem>
                <NavLink href="#">核心课程</NavLink>
                </NavItem>
                

               
                <NavItem>
                <NavLink href="#">加入我们</NavLink>
                </NavItem>
                

               
                <NavItem>
                <NavLink href="#">动态中心</NavLink>
                </NavItem>
                

               
                <NavItem>
                <NavLink href="#">通告</NavLink>
                </NavItem>
                
                
               
                <NavItem>
                <Login/>
                </NavItem>
                

            </Row>
        </Container>
            <Nav>
            </Nav>
    </div>

    
)

export default NavBar;