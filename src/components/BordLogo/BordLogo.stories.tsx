import type { Meta, StoryObj } from "@storybook/react/*";
import BordLogo from "./BordLogo";

const meta = {
  title: "BordLogo",
  component: BordLogo,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    customWidth: "23.75rem",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordLogo>;

export const CustomWidth: Story = {
  args: {
    customWidth: "23.75rem",
    standardSize: 80,
  },
};
