import React from "react";

import NavBlock from "./NavBlock";

export default {
  title: "UI / Org / Nav Block",
  component: NavBlock,
  argTypes: {
    onClick: { action: "Bttn Clicked" },
  },
  args: {
    loading: false,
  },
};

export const navBlock = (args) => (
  <NavBlock {...args}>{args.children}</NavBlock>
);

NavBlock.args = {};
