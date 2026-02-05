import type { Meta, StoryObj } from "@storybook/react/*";
import BordBreadCrumb from "./BordBreadCrumb";

const meta = {
  title: "BordBreadCrumb",
  component: BordBreadCrumb,
  args: {
    headerNavigationTitle: "home",
    headerNavigationSubtitle: "employees",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordBreadCrumb>;

export const Default: Story = {
  args: {},
};
