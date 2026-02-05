import type { Meta, StoryObj } from "@storybook/react/*";
import BordRadioButton from "./BordRadioButton";
import { fn } from "@storybook/test";

const meta = {
  title: "BordRadioButton",
  component: BordRadioButton,
  args: {
    onClick: fn(),
    label: "Label",
    disabled: false,
    isButtonActive: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    isButtonActive: true,
  },
};

export const SelectedDisabled: Story = {
  args: {
    isButtonActive: true,
    disabled: true,
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
};

export const customSize: Story = {
  args: {
    isButtonActive: true,
    customWidth: "24rem",
    labelProps: {
      style: { fontSize: "24rem" },
    },
  },
};

export const noLabel: Story = {
  args: {
    label: undefined,
  },
};
