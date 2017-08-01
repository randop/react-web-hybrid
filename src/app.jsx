export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <AnotherHello />
      </div>
    );
  }
}

export class AnotherHello extends React.Component {
  render() {
    return (
      <h2>World</h2>
    );
  }
}

export default Hello
