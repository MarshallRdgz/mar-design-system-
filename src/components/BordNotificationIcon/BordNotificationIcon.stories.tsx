import type { Meta, StoryObj } from "@storybook/react/*";
import BordNotificationIcon from "./BordNotificationIcon";

const meta = {
  title: "BordNotificationIcon",
  component: BordNotificationIcon,
  args: {
    variant: "on",
    customWidth: "20rem",
    standardSize: 32,
    stroke: 'white',
    onclick,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordNotificationIcon>;

export const SwitchNotification: Story = {
  args: {
    customWidth: undefined,
  },
};
