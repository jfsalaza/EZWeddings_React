import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MyAccount from './MyAccount';

describe('Our first test', () => {

    it("links to my_partners when first button is clicked", () => {
        const wrapper = shallow(<MyAccount/>);
        expect(shallow(<MyAccount/>).length).toEqual(1);
    });
    it("links to requests when second button is clicked");
    it("links to update my ad when third button is clicked");


});
