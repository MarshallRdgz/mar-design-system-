import type { Meta, StoryObj } from "@storybook/react/*";
import BordFiltersExpandableSelect from "./BordFiltersExpandableSelect";
import { fn } from "@storybook/test";

const meta = {
  title: "BordFiltersExpandableSelect",
  component: BordFiltersExpandableSelect,
  args: {
    filterTitle: "Filter Title",
    openSelectStatus: false,
    openSelectFunction: fn(),
    rawSelectOptions: [
      {
        name: "Option 1",
        value: "Option 1",
        icon: "https://via.placeholder.com/50",
        isActive: true,
      },
      {
        name: "Option 2",
        value: "Option 2",
        icon: "https://via.placeholder.com/50",
        isActive: false,
      },
      {
        name: "Option 3",
        value: "Option 3",
        icon: "https://via.placeholder.com/50",
        isActive: true,
      },
    ],
    handleChangeSelectedOption: fn(),
    isFilterActive: true,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordFiltersExpandableSelect>;

export const FilterOpenFalse: Story = {
  args: {
    openSelectStatus: false,
  },
};

export const FilterOpenTrue: Story = {
  args: {
    openSelectStatus: true,
  },
};
