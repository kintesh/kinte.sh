import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('<Home />', () => {

  it('should render the component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h3')).toHaveLength(3);
    expect(wrapper.find('p')).toHaveLength(3);
  });

});