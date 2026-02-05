import type { Meta, StoryObj } from "@storybook/react/*";
import BordButton from "./BordButton";
import { fn } from "@storybook/test";

const meta = {
  title: "BordButton",
  component: BordButton,
  args: {
    customWidth: "",
    onClick: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordButton>;

export const Primary: Story = {
  args: {
    customWidth: "w-180",
    disabled: false,
    isLoading: false,
    modeButton: "primary",
  },
};

export const Secondary: Story = {
  args: {
    customWidth: "w-180",
    disabled: false,
    isLoading: false,
    modeButton: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    customWidth: "w-180",
    disabled: false,
    isLoading: false,
    modeButton: "tertiary",
  },
};

export const Loading: Story = {
  args: {
    customWidth: "w-180",
    disabled: true,
    isLoading: true,
  },
};
