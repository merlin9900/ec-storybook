import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import EC_Button from "./EC_Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
   title: "EC/Button",
   component: EC_Button,
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
   tags: ["autodocs"],
   argTypes: {
      backgroundColor: { control: "color" },
      color: { control: "color" },
      // variant: {
      //    options: ["primary", "secondary", "tertiary"],
      //    control: {
      //       type: "select",
      //    }
      // }
   },
   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
   // args: { onClick: fn() },
} satisfies Meta<typeof EC_Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
   args: {
      // variant: "tertiary",
      children: "Button 1",
      backgroundColor: "#1888F4",
      borderRadius: "10px",
      fontWeight: "800"
   }
};
export const Secondary: Story = {
   args: {
      // variant: "secondary",
      children: "Button 1",
      backgroundColor: "#D0223A",
      borderRadius: "100px",
      fontWeight: "800"
   }
};
export const Tertiary: Story = {
   args: {
      // variant: "tertiary",
      children: "Button 1",
      backgroundColor: "transparent",
      color: "#D0223A",
   }
};
