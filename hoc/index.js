setTimeout(() => {
  console.log(1);
}, 1000);

function foo(x) {
  return () => {
    return x + 1;
  };
}

@logger
class Main {}

function Hoc(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

function Hoc(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      return super.render();
    }
  };
}
