import { Meta, StoryObj } from "@storybook/react/*";
import BordMarketplaceButton from "./BordMarketplaceButton";
import { fn } from "@storybook/test";

const meta = {
  title: "BordMarketplaceButton",
  component: BordMarketplaceButton,
  args: {
    buttonText: "buttonText",
    onClick: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordMarketplaceButton>;

export const DarkButton: Story = {
  args: {
    onClick: fn(),
    buttonText: ".bord Store",
    buttonColor: "dark",
  },
};

export const LightButton: Story = {
  args: {
    onClick: fn(),
    buttonText: ".bord Store",
    buttonColor: "light",
  },
};
