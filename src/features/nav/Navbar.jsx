import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='assets/logo.png' alt='' style={{ marginRight: '20px' }} />
          Re-vents
        </Menu.Item>
        <Menu name='events' />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content='Create Event'
          />
        </Menu.Item>
        <Menu.Item>
          <Button basic inverted content='log in' />
          <Button
            basic
            inverted
            content='register'
            style={{ marginLeft: '.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
