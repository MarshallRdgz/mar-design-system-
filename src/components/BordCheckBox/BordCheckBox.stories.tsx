import type { Meta, StoryObj } from "@storybook/react/*";
import BordCheckBox from "./BordCheckBox";
import { fn } from "@storybook/test";

const meta = {
  title: "BordCheckBox",
  component: BordCheckBox,
  args: {
    label: "CheckBox",
    handleClickButton: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordCheckBox>;

export const NotSelected: Story = {
  args: {
    label: "CheckBox",
    handleClickButton: fn(),
  },
};

export const Selected: Story = {
  args: {
    label: "CheckBox",
    handleClickButton: fn(),
    isButtonActive: true,
  },
};

export const DisabledAndSelected: Story = {
  args: {
    label: "CheckBox",
    handleClickButton: fn(),
    isButtonActive: true,
    isButtonDisabled: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "CheckBox",
    handleClickButton: fn(),
    isButtonDisabled: true,
  },
};
