import React, { useState } from 'react';
import { Dropdown,Button, DropdownToggle, DropdownMenu, DropdownItem,FormGroup ,Form ,Label, Input } from 'reactstrap';
import './login.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className=''>
      <Dropdown className='' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle  color='link'>
          Login
        </DropdownToggle>
        
        <DropdownMenu right className="form">
          <DropdownItem header>Login</DropdownItem>
          <Form>
            <FormGroup className="m-4">
                  <Label for="exampleEmail">Email/User ID</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email/User ID" />
                </FormGroup>
                <FormGroup className="m-4">
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                <br/>
                <Button className="m-1" color="primary">Login</Button>
                <Button color="link">Forget Password</Button>
                <DropdownItem divider />
                <FormGroup className="mx-auto">
                <Button color='link'>Don't have an account? Register Now</Button>
                </FormGroup>
            </FormGroup>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Login;