import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MyPartners from './MyPartners';
import {users, current_user} from '../common/Header';

describe('My partners test', () => {
    it("have the same amount of items as partners", () => {
        const wrapper = mount(<MyPartners/>);
        const expectedLength = users[current_user].partners.length;
        const partners_list = wrapper.find("#client-list").children();
        expect(partners_list.length).toEqual(expectedLength);
    });

    it("Links to my_partners/uid", () => {
        const wrapper = mount(<MyPartners/>);
        const expectedLength = users[current_user].partners.length;
        const partners_list = wrapper.find("#client-list").children();
        expect(partners_list.length).toEqual(expectedLength);
    });
});
