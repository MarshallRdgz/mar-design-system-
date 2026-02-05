import type { Meta, StoryObj } from "@storybook/react/*";
import BordOneToneIcon from "./BordOneToneIcon";

const meta = {
  title: "BordOneToneIcon",
  component: BordOneToneIcon,
  args: {
    variant: "bord",
    customWidth: "20rem",
    stroke: undefined,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordOneToneIcon>;

export const Default: Story = {
  args: {
    customWidth: undefined,
  },
};

export const CustomWidth: Story = {
  args: {
    variant: "cloudLightning",
  },
};

export const CustomColors: Story = {
  args: {
    variant: "users",
    stroke: "red",
  },
};
