import type { Meta, StoryObj } from "@storybook/react/*";
import BordIlustrationIcon from "./BordIlustrationIcon";

const meta = {
  title: "BordIlustrationIcon",
  component: BordIlustrationIcon,
  args: {
    variant: "wiping",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordIlustrationIcon>;

export const Default: Story = {
  args: {
    variant: "wiping",
  },
};

export const StandarSize: Story = {
  args: {
    variant: "wiping",
    standardSize: 16,
  },
};

export const Variant: Story = {
  args: {
    variant: "apple",
  },
};

export const CustomWidth: Story = {
  args: {
    variant: "store",
    customWidth: "30rem",
  },
};
