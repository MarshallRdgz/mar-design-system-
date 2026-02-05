import type { Meta, StoryObj } from "@storybook/react/*";
import BordTwoToneIcon from "./BordTwoToneIcon";
import { bordColorTheme } from "../../styles/constants";

const meta = {
  title: "BordTwoToneIcon",
  component: BordTwoToneIcon,
  args: {
    variant: "menuSquare",
    customWidth: "20rem",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordTwoToneIcon>;

export const Default: Story = {
  args: {
    customWidth: undefined,
  },
};

export const CustomWidth: Story = {
  args: {
    variant: "shoppingCartCheck2",
  },
};

export const CustomColors: Story = {
  args: {
    colorTones: {
      tone1: bordColorTheme.primary.bgDefault,
      tone2: bordColorTheme.primary.bgDefault,
      opacity1: ".4",
      opacity2: "1",
    },
  },
};

export const EcommerceExample: Story = {
  args: {
    variant: "laptopCharging",
    colorTones: {
      tone1: bordColorTheme.primary.bgDefault,
      tone2: bordColorTheme.white.default,
      opacity1: "1",
      opacity2: "1",
    },
  },
};
