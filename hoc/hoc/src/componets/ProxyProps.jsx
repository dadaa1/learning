import React, { Component } from 'react';

function addPropsHOC(WrappedComponent) {
  return class extends Component {
    render() {
      const newProps = {
        ...this.props,
        user: 'Liuyang'
      };
      return <WrappedComponent {...newProps} />;
    }
  };
}

function delPropsHoc(WrappedComponent) {
  return class extends Component {
    render() {
      const { user, ...newProps } = this.props;
      return <WrappedComponent {...newProps} />;
    }
  };
}
