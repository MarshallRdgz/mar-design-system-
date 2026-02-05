import type { Meta, StoryObj } from "@storybook/react/*";
import BordDatePicker from "./BordDatePicker";

const meta = {
  title: "BordDatePicker",
  component: BordDatePicker,
  args: {
    label: "Date",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordDatePicker>;

export const Active: Story = {
  args: {
    label: "Fechas",
  },
};

export const Disabled: Story = {
  args: {
    label: "Fechas",
    isDisabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Dates",
    errorText: "Date is not correct",
  },
};
