import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MyPartners from './MyPartners';
import {users, current_user} from '../common/Header';

describe('My partners test', () => {
    /*
    it("have the same amount of items as partners", () => {
        const wrapper = mount(<MyPartners/>);
        const expectedLength = users[current_user].partners.length;
        const partners_list = wrapper.find("#client-list").children();
        expect(partners_list.length).toEqual(expectedLength);
    });

    it("Links to my_partners/uid", () => {
        const wrapper = mount(<MyPartners/>);
        const my_partners = users[current_user].partners;
        const partners_list = wrapper.find("#client-list");
        const links = partners_list.find("Link").at(0).prop("to");
        expect(links).toEqual("/my_partners/"+my_partners[0]);

        const links1 = partners_list.find("Link").at(1).prop("to");
        expect(links1).toEqual("/my_partners/"+my_partners[1]);

        const links2 = partners_list.find("Link").at(2).prop("to");
        expect(links2).toEqual("/my_partners/"+my_partners[2]);

        const links3 = partners_list.find("Link").at(3).prop("to");
        expect(links3).toEqual("/my_partners/"+my_partners[3]);
        //expect(partners_list.length).toEqual(expectedLength);
    });
    */
});
