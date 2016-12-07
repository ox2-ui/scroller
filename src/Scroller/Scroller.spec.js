/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroller from './Scroller';
import { assert } from 'chai';

describe('Scroller', () => {
  it('should render a <Scroller> element', () => {
    const wrapper = shallow(
      <Scroller />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
