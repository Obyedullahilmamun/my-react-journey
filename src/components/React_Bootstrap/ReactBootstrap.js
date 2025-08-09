import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export const ReactBootstrap = () => {
  return (
    <div>
      {/* Cards Row */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>ReactBootstrap</Card.Text>
            <p>lorem text lorem text test</p>
            <Button>Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>ReactBootstrap</Card.Text>
            <p>lorem text lorem text test</p>
            <Button>Learn More</Button>
          </Card.Body>
        </Card>
      </div>

      {/* Table Below Cards */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>This is</td>
            <td>Name</td>
            <td>@name</td>
          </tr>
          <tr>
            <td>2</td>
            <td>This is</td>
            <td>Name</td>
            <td>@name</td>
          </tr>
          <tr>
            <td>3</td>
            <td>This is</td>
            <td>Name</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>4</td>
            <td>This is</td>
            <td>Name</td>
            <td>@twitter</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
};
