import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import renderer from 'react-test-renderer';

// import LabeledText from '../client/components/LabeledText';
// import Market from '../client/components/Market';
// import MarketsDisplay from '../client/components/MarketsDisplay';
import FeedItem from '../client/components/feedItem.jsx'

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
    describe('LabeledText', () => {
    //   let wrapper;
    //   const props = {
    //     label: 'Mega',
    //     text: 'Markets',
    //   };
  
    //   beforeAll(() => {
    //     wrapper = shallow(<LabeledText {...props} />);
    //   });
  
    //   it('Renders a <p> tag with the label in bold', () => {
    //     expect(wrapper.type()).toEqual('p');
    //     expect(wrapper.text()).toEqual('Mega: Markets');
    //     expect(wrapper.find('strong').text()).toMatch('Mega');
    //   });
        it('Testing the tests', () => {
            expect(true);
        })
    });
})