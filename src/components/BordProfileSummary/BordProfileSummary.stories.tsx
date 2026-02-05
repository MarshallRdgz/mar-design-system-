import type { Meta, StoryObj } from "@storybook/react/*";
import BordProfileSummary from "./BordProfileSummary";

const meta = {
  title: "BordProfileSummary",
  component: BordProfileSummary,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordProfileSummary>;

export const ProfileSummary: Story = {
  args: {
    title: "Username",
    subTitle: "Admin",
    variant: "circularWorld",
  },
};
