import type { Meta, StoryObj } from "@storybook/react/*";
import BordSearchBar from "./BordSearchBar";

const meta = {
  title: "BordSearchBar",
  component: BordSearchBar,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordSearchBar>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: { defaultValue: "Ejemplo de texto" },
};

export const Disabled: Story = {
  args: { isDeactivated: true },
};

export const Loading: Story = {
  args: { loading: true },
};
