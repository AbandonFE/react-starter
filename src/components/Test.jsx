import React  from 'react';

export default class Hello extends React.Component {
  render() {
    let arr = Array.from(new Set([1, 2, 3]));
    return <p>组件测试1</p>
  }
}