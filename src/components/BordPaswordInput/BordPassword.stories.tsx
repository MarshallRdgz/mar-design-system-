import type { Meta, StoryObj } from "@storybook/react/*";
import BordPasswordInput from "./BordPasswordInput";
import { fn } from "@storybook/test";

const meta = {
  title: "BordPasswordInput",
  component: BordPasswordInput,
  args: {
    label: "Label",
    disabled: false,
    setCurrentValue: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: "Label Text",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: "",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomPlaceHolder: Story = {
  args: {
    label: "Password",
    placeholder: "Add your password",
  },
};

export const WithError: Story = {
  args: {
    errorText: "Your password is not correct",
    hideErrorText: false,
  },
};
