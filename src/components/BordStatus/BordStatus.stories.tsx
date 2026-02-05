import type { Meta, StoryObj } from "@storybook/react/*";
import BordStatus from "./BordStatus";

const meta = {
  title: "BordStatus",
  component: BordStatus,
  args: {
    label: "Label",
    variant: "default",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordStatus>;

export const Default: Story = {
  args: {
    label: "status default",
    variant: "default",
  },
};

export const Informative: Story = {
  args: {
    label: "status informative",
    variant: "informative",
  },
};

export const Success: Story = {
  args: {
    label: "status success",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "status danger",
    variant: "danger",
  },
};
