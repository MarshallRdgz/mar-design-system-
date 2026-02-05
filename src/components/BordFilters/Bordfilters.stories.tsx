import type { Meta, StoryObj } from "@storybook/react/*";
import BordFilters from "./BordFilters";
import { fn } from "@storybook/test";
import { active } from "../BordActionButton/BordActionButton.stories";

const meta = {
  title: "BordFilters",
  component: BordFilters,
  args: {
    filtersTitle: "Limpiar",
    handleResetFilters: fn(),
    filterIcon: "filterMailCircle",
    filtersList: [
      {
        title: "Filter name",
        openStatus: false,
        openFunction: fn(),
        isFilterActive: false,
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
        ],
      },
      {
        title: "Filter 2",
        openStatus: active,
        openFunction: fn(),
        isFilterActive: false,
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
        ],
      },
      {
        title: "Filter 3",
        openStatus: false,
        openFunction: fn(),
        isFilterActive: false,
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
        ],
      },
      {
        title: "Filter 4",
        openStatus: false,
        openFunction: fn(),
        isFilterActive: false,
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
        ],
      },
    ],
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordFilters>;

export const FiltersOnlyIcon: Story = {
  args: {
    filtersTitle: "",
  },
};

export const FiltersWithTitle: Story = {
  args: {
    filtersTitle: "Limpiar",
  },
};

export const FilterLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const FilterWithCountries: Story = {
  args: {
    filtersList: [
      {
        title: "Filter name",
        openStatus: true,
        openFunction: fn(),
        isFilterActive: false,
        rawSelectOptions: [
          {
            name: "Argentina",
            value: "arg",
            isActive: true,
          },
          {
            name: "Mexico",
            value: "mex",
            isActive: false,
          },
          {
            name: "Colombia",
            value: "col",
            isActive: true,
          },
          {
            name: "Perú",
            value: "per",
            isActive: false,
          },
          {
            name: "Chile",
            value: "chl",
            isActive: true,
          },
          {
            name: "Venezuela",
            value: "ven",
            isActive: false,
          },
          {
            name: "Ecuador",
            value: "ecu",
            isActive: true,
          },
          {
            name: "Brasil",
            value: "bra",
            isActive: false,
          }

        ],
        handleChangeSelectedOption: fn(),
      },
    ],
  },
};
