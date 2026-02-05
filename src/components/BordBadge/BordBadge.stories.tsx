import type { Meta, StoryObj } from "@storybook/react/*";
import BordBadge from "./BordBadge";

const meta = {
  title: "BordBadge",
  component: BordBadge,
  args: {
    label: "Label",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordBadge>;

export const Default: Story = {
  args: {
    label: "This is the badge",
    variant: "default",
  },
};

export const Gradient: Story = {
  args: {
    label: "Badge gradient",
    variant: "gradient",
  },
};

export const BigText: Story = {
  args: {
    label: "This badge have more text when use in the SOGA repository",
    variant: "default",
  },
};

export const LittleText: Story = {
  args: {
    label: "Badge",
    variant: "default",
  },
};
