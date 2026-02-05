import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import BordSidebarButton from "./BordSidebarButton";

const meta = {
  title: "BordSidebarButton",
  component: BordSidebarButton,
  args: {
    onClick: fn(),
    isOpen: true,
    isSelected: false,
    disabled: false,
    buttonText: "Órdenes",
    buttonIcon: "shoppingCartCheck2",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Closed: Story = {
  args: {
    isOpen: false,
    isSelected: true,
    buttonText: "Empleados",
    buttonIcon: "employee",
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    buttonText: "Home",
    buttonIcon: "menuSquare",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: "Servicios logísticos",
    buttonIcon: "trackingTruck",
  },
};
