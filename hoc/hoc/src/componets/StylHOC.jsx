import React, { Component } from 'react';

function stylHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <div className="title">{this.props.title}</div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

function visibleHOC(WrappedComponent) {
  return class extends Component {
    render() {
      if (!this.props.visible) {
        return null;
      }
      return <WrappedComponent {...props} />;
    }
  };
}
