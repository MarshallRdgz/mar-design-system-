import type { Meta, StoryObj } from "@storybook/react/*";
import BordToast from "./BordToast";
import { fn } from "@storybook/test";

const meta = {
  title: "BordToast",
  component: BordToast,
  args: {
    variant: "informative",
    title: "Alert Title",
    description:
      "This is an optional description. It cam span multiple lines. It may not get read so provide good alert title",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordToast>;

export const Toast: Story = {
  args: {
    variant: "informative",
    title: "Alert Title",
    description:
      "This is an optional description. It cam span multiple lines. It may not get read so provide good alert title",
    onClose: fn(),
    action: fn(),
    hideAction: false,
    actionLabel: "action",
    showAnimation: false,
  },
};
