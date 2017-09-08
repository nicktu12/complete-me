// const Node = require('../scripts/Node');
// const expect = require('chai');
import Node from '../scripts/Node'
import { expect } from 'chai';

describe('NODE TEST', () => {

  it('should be an object', () => {
    let node = new Node();

    expect(typeof(node)).to.eq('object');
  })

  it('should have four properties', () => {
    let node = new Node();

    expect(Object.keys(node).length).to.eq(4);
    expect(Object.keys(node)).to.deep.eq(['data', 'children', 'isWord', 'selectProp']);
  })

  it('should not be a complete word by default', () => {
    let node = new Node();

    expect(node.isWord).to.eq(false);
  })

  it('should not have children by default', () => {
    let node = new Node();

    expect(Object.keys(node.children).length).to.eq(0);
  })

})
