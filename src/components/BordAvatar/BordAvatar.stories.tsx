import type { Meta, StoryObj } from "@storybook/react/*";
import BordAvatar from "./BordAvatar";

const meta = {
  title: "BordAvatar",
  component: BordAvatar,
  args: {
    variant: "circularUser",
    customWidth: "20rem",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordAvatar>;

export const Circular: Story = {
  args: {
    customWidth: undefined,
  },
};

export const Rectangular: Story = {
  args: {
    customWidth: undefined,
    standardSize: 48,
    variant: "rectangularZeppelin",
  },
};

export const CustomWidth: Story = {
  args: {
    variant: "rectangularWorld",
  },
};
