import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Partner from './Partner';

describe('Todo list test', () => {
    /*
    const props = {
        params: {uid: "elver_galarga"}
    };
   it("add item when you click add->add item", () => {
       const wrapper = mount(<Partner {...props}/>);
       const add_button = wrapper.find("button").at(0);
       const add_modal = wrapper.find("#add-item-modal");
       add_button.simulate("click");

       const add_modal_text = wrapper.find("#add-modal-text");
       add_modal_text.node.value = "item1";

       const add_modal_button = wrapper.find("input").at(2);
       add_modal_button.simulate("click");

       add_button.simulate("click");
       add_modal_text.node.value = "item2";
       add_modal_button.simulate("click");

       add_button.simulate("click");
       add_modal_text.node.value = "item3";
       add_modal_button.simulate("click");

       const todo_list = wrapper.find("#todo-list").children();
       expect(todo_list.length).toEqual(3);
   });

   it("edit item when click on item->update text->click update", () => {
    const wrapper = mount(<Partner {...props}/>);
    const add_button = wrapper.find("button").at(0);
    const add_modal = wrapper.find("#add-item-modal");
    add_button.simulate("click");

    const add_modal_text = wrapper.find("#add-modal-text");
    add_modal_text.node.value = "item1";

    const add_modal_button = wrapper.find("input").at(2);
    add_modal_button.simulate("click");

    add_button.simulate("click");
    add_modal_text.node.value = "item2";
    add_modal_button.simulate("click");

    add_button.simulate("click");
    add_modal_text.node.value = "item3";
    add_modal_button.simulate("click");

    const todo_list = wrapper.find("#todo-list").children();
    expect(todo_list.length).toEqual(3);

    const item_to_edit = todo_list.at(1);
    item_to_edit.simulate("click");

    const edit_modal_text = wrapper.find("#edit-modal-text");
    edit_modal_text.node.value = "item2_edited"
    
    const update_button = wrapper.find("input").at(5);
    update_button.simulate("click");

    const todo_list_update = wrapper.find("#todo-list").children();
    expect(todo_list_update.length).toEqual(3);

    const updated_item = todo_list_update.at(1);
    expect(updated_item.text()).toEqual("item2_edited");
   });

   it("delete item on click item, and click delete", () => {
    const wrapper = mount(<Partner {...props}/>);
    const add_button = wrapper.find("button").at(0);
    const add_modal = wrapper.find("#add-item-modal");
    add_button.simulate("click");

    const add_modal_text = wrapper.find("#add-modal-text");
    add_modal_text.node.value = "item1";

    const add_modal_button = wrapper.find("input").at(2);
    add_modal_button.simulate("click");

    add_button.simulate("click");
    add_modal_text.node.value = "item2";
    add_modal_button.simulate("click");

    add_button.simulate("click");
    add_modal_text.node.value = "item3";
    add_modal_button.simulate("click");

    const todo_list = wrapper.find("#todo-list").children();
    expect(todo_list.length).toEqual(3);

    const item_to_delete = todo_list.at(1);
    item_to_delete.simulate("click");
    const delete_button = wrapper.find("input").at(4);
    delete_button.simulate("click");

    const updated_list = wrapper.find("#todo-list").children();
    expect(updated_list.length).toEqual(2);
    expect(updated_list.at(1).text()).toEqual("item3");
   });
*/
});
