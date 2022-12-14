import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event Title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' />
        </Form.Field>
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
        <Button type='submit' floated='right' positive content='Submit' />
      </Form>
    </Segment>
  );
}
