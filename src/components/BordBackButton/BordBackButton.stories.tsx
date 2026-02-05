import { Meta, StoryObj } from "@storybook/react/*";
import BordBackButton from "./BordBackButton";
import { fn } from "@storybook/test";

const meta = {
  title: "BordBackButton",
  component: BordBackButton,
  args: {
    buttonText: "buttonText",
    onClick: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordBackButton>;

export const LongText: Story = {
  args: {
    buttonText: "This is a long long long long text",
    onClick: fn(),
  },
};

export const ShortText: Story = {
  args: {
    buttonText: "Short text",
    onClick: fn(),
  },
};
