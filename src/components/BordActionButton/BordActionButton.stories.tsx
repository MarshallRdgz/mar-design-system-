import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import BordActionButton from "./BordActionButton";

const meta = {
  title: "BordActionButton",
  component: BordActionButton,
  args: {
    disabled: false,
    subTitle: "subTitle",
    title: "title",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordActionButton>;

export const active: Story = {
  args: {
    disabled: false,
    subTitle: "subTitle",
    title: "title",
    onClick: fn()
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    subTitle: "subTitle",
    title: "title",
  },
};
