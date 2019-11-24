import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';
import { NavLink, MemoryRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<NavigationItem/>', ()  => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<MemoryRouter><NavigationItem link="/"/></MemoryRouter>);
    });
    it('should have one <NavLink/>', () => {
        // wrapper.setProps({link: '/', to: '/'});
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});