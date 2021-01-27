import React from 'react';
import { Label } from 'react-form-builder'


export default {
  title: 'Form/Label',
  component: Label,
};

const Template = (args) => <Label {...args} ></Label>

export const Primary = Template.bind({});
Primary.args = { children: 'daslkfjsdljfsa' };
