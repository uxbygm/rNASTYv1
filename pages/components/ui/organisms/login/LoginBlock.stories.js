import React from "react";

import LoginBlock from "./LoginBlock";

export default {
  title: "UI / Org / Login Block",
  component: LoginBlock,
  argTypes: {
    onClick: { action: "Bttn Clicked" },
  },
  args: {
    loading: false,
  },
};

export const loginBlock = (args) => (
  <LoginBlock {...args}>{args.children}</LoginBlock>
);

loginBlock.args = {};
