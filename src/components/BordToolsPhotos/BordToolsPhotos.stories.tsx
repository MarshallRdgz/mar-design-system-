import type { Meta, StoryObj } from "@storybook/react/*";
import BordToolsPhotos from "./BordToolsPhotos";

const meta = {
  title: "BordToolsPhotos",
  component: BordToolsPhotos,
  args: {
    variant: "informative",
    title: "Alert Title",
    description:
      "This is an optional description. It cam span multiple lines. It may not get read so provide good alert title",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordToolsPhotos>;

export const Default: Story = {
  args: {
    url: "https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png",
    size: "h-64",
    variant: "square",
  },
};

export const CustomWidth: Story = {
  args: {
    url: "https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png",
    variant: "square",
    customSize: "h-50",
  },
};
