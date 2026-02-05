import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import BordSidebar from "./BordSidebar";

const meta = {
  title: "BordSidebar",
  component: BordSidebar,
  args: {
    isOpen: true,
    onClick: fn(),
    sidebarBaseModules: [
      {
        isSelected: true,
        isOpen: true,
        buttonText: "Home",
        buttonIcon: "menuSquare",
        onClick: fn(),
      },
      {
        isSelected: false,
        isOpen: true,
        buttonText: "Empleados",
        buttonIcon: "employee",
        onClick: fn(),
      },
      {
        isSelected: false,
        isOpen: true,
        buttonText: "Inventario",
        buttonIcon: "inventory",
        onClick: fn(),
      },
      {
        isSelected: false,
        isOpen: true,
        buttonText: "Órdenes",
        buttonIcon: "shoppingCartCheck2",
        onClick: fn(),
      },
      {
        isSelected: false,
        isOpen: true,
        buttonText: "Servicios logísticos",
        buttonIcon: "trackingTruck",
        onClick: fn(),
      },
      {
        isSelected: false,
        isOpen: true,
        buttonText: "Reportes",
        buttonIcon: "pieChart",
        onClick: fn(),
      },
    ],
    sidebarAdditionalModules: [
      {
        isSelected: false,
        isOpen: true,
        onClick: fn(),
        buttonText: "Soporte",
        buttonIcon: "helpCircle",
      },
      {
        isSelected: false,
        isOpen: true,
        onClick: fn(),
        buttonText: "Configuración",
        buttonIcon: "settings",
      },
      {
        isSelected: false,
        isOpen: true,
        onClick: fn(),
        buttonText: "Salir de .bord",
        buttonIcon: "logout1",
      },
    ],
    logoProps: {
      onClick: fn(),
      style: {
        cursor: "pointer",
      },
    },
  },
  decorators: Story => (
    <div
      style={{ marginTop: "-1rem", marginLeft: "-1rem", marginBottom: "-1rem" }}
    >
      {Story()}
    </div>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {},
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
