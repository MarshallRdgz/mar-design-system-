import type { Meta, StoryObj } from "@storybook/react/*";
import BordTextArea from "./BordTextArea";
import { fn } from "@storybook/test";

const meta = {
  title: "BordTextArea",
  component: BordTextArea,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    name: "name",
    setInputValue: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordTextArea>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const Error: Story = {
  args: {
    errorText: "Error",
    hideError: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
