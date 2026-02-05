import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import BordTextInput from "./BordTextInput";

const meta = {
  title: "BordTextInput",
  component: BordTextInput,
  args: {
    setCurrentText: fn(),
    handleBlur: fn(),
    placeholder: "Placeholder",
    label: "Label",
    caption: "Caption",
    showSkeletonLoader: false,
    disabled: false,
    style: undefined,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordTextInput>;

export const Default: Story = {
  args: {
    leftIconVariant: "figma",
  },
};

export const Loading: Story = {
  args: {
    showSkeletonLoader: true,
  },
};

export const NoIcon: Story = {
  args: {
    leftIconVariant: undefined,
    standardSize: "w-380",
  },
};

export const Large: Story = {
  args: {
    leftIconVariant: "bord",
    standardSize: "w-380",
  },
};

export const Filled: Story = {
  args: {
    leftIconVariant: "bord",
    standardSize: "w-180",
    currentText: "This is a test text",
  },
};

export const Error: Story = {
  args: {
    leftIconVariant: "bord",
    standardSize: "w-280",
    currentText: "This is a test text",
    errorText: "This is wrong",
  },
};

export const ExtraSmall: Story = {
  args: {
    leftIconVariant: "bord",
    standardSize: "w-80",
    currentText: "This is a test text",
  },
};

export const NoLabelNorCaption: Story = {
  args: {
    leftIconVariant: "bord",
    standardSize: "w-180",
    label: undefined,
    caption: undefined,
  },
};

export const CustomeSize: Story = {
  args: {
    leftIconVariant: "bord",
    style: {
      width: "55.45rem",
    },
    caption: undefined,
  },
};
