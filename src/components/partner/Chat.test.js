import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Chat from './Chat2';

describe('Chat test', () => {

    it("send message when enter button is pressed", () => {
        const wrapper2 = mount(<Chat/>);

        const chat_input = wrapper2.find("input");
        chat_input.node.value = "Hello";
        chat_input.simulate('keyUp', {keyCode: 13});
        expect(wrapper2.state().messages[0].msg).toEqual("Hello");
        
        const message = wrapper2.find("div").at(2).text();
        expect(message).toEqual("You:  Hello");
    });

    it("Load all messages in state when new one is posted", () => {
        const wrapper = mount(<Chat/>);
        wrapper.state().messages.push({sender:"You: ", msg:"Post me"});

        const chat_input = wrapper.find("input");
        chat_input.node.value = "Hello";
        chat_input.simulate('keyUp', {keyCode: 13});

        const message1 = wrapper.find("div").at(2).text();
        expect(message1).toEqual("You:  Post me");
        const message2 = wrapper.find("div").at(3).text();
        expect(message2).toEqual("You:  Hello");
    });
});
