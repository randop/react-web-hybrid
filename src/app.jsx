import React, { Component } from 'react';

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello:</h1>
        <World />
      </div>
    );
  }
}

export class World extends React.Component {
  render() {
    return (
      <h2>World!</h2>
    );
  }
}

export default Hello
