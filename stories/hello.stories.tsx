import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hello } from '../src'
import { Alert } from 'react-native';

export default {
  title: "hello example",
  component: Hello
} as ComponentMeta<typeof Hello>

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />

export const WithButton = Template.bind({});

WithButton.storyName = "With Button"
WithButton.args = {
  title: "Welcome to mstech app",
  buttonText: 'sabi',
  hideButton: false,
  onButtonPress: () => Alert.alert('ni hao sa bi')
}