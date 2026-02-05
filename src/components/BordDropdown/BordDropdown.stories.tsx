//eslint-disable-next-line
// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react/*";
import BordDropdown from "./BordDropdown";
import { CITIES_MOCKUP, COUNTRIES_MOCKUP } from "./mockup";

const meta = {
  title: "BordDropdown",
  component: BordDropdown,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordDropdown>;

export const CountryDropdown: Story = {
  args: {
    label: "País",
    componentSize: "medium",
    rawOptions: COUNTRIES_MOCKUP,
    filterBySearchStringCallback: (search: string, countriesList: []) => {
      return countriesList.filter(country => {
        const cleanSearch = search.toLowerCase().trim();
        const countryName = country?.name?.toLowerCase().trim();
        const countryPhoneCode = country?.phoneCode
          ?.toString()
          .toLowerCase()
          .trim();
        const countryCode = country?.code?.toLowerCase().trim();

        return (
          (countryName && countryName)?.includes(cleanSearch) ||
          (countryPhoneCode && countryPhoneCode)?.includes(cleanSearch) ||
          (countryCode && countryCode)?.includes(cleanSearch)
        );
      });
    },
    formDropdownOptionsCallback: (
      countriesList: ICountryDetail[],
      clickOptionCallback?: (option: ICountryDetail) => void,
      searchString?: string
    ) => {
      if (countriesList.length === 0)
        return [
          <div className="noOptionContainer" key="loading">
            {searchString
              ? "No hay resultados para tu búsqueda"
              : "No hay resultados"}
          </div>,
        ];
      return countriesList.map(country => {
        const countryNameKey = country?.name;
        const countryName = countryNameKey ?? "Sin datos";

        return (
          <div
            className="optionContainer flex"
            key={`country-option-${country?.id}`}
            onClick={() => alert(countryName)}
          >
            <div
              className="optionFlag"
              style={{ backgroundImage: `url(${country?.flag})` }}
            />
            <span>{countryName}</span>
          </div>
        );
      });
    },
    formSelectedOptionUICallback: (selectedOption: ICountryDetail) => {
      const countryName = selectedOption?.name ?? "Sin datos";

      const text = isPhoneIndicative
        ? `+${selectedOption.phoneCode}`
        : (countryName ?? "");

      return (
        <div className="optionContainer flex gap-1">
          {displayFlag && !!selectedOption?.flag && (
            <div
              className="optionFlag"
              style={{ backgroundImage: `url(${selectedOption?.flag})` }}
            />
          )}
          {displayText && <span>{text}</span>}
        </div>
      );
    },
  },
};

export const CityDropdown: Story = {
  args: {
    label: "Ciudad",
    componentSize: "w-380",
    rawOptions: CITIES_MOCKUP,
    filterBySearchStringCallback: (
      search: string,
      rawOptions: IcityDetails[]
    ) => {
      return rawOptions.filter(rawBillingData => {
        return rawBillingData?.name
          ?.toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim());
      });
    },
    formDropdownOptionsCallback: (
      rawOptions: IcityDetails[],
      clickOptionCallback?: (option: IcityDetails) => void,
      searchString?: string
    ) => {
      const noResultsOption = (
        <div className="optionContainer" key="loading">
          {searchString ? "No hay resultados para tu búsqueda" : "Cargando ..."}
        </div>
      );
      if (rawOptions.length === 0) {
        return [noResultsOption];
      }
      const cityOptions = rawOptions.map(rawBillingData => {
        const { id, name } = rawBillingData;
        return (
          <div
            className="optionContainer cityOption"
            key={`cityOption${id}`}
            onClick={() => alert(name)}
          >
            <span>{name}</span>
          </div>
        );
      });
      return cityOptions;
    },
    formSelectedOptionUICallback: rawBillingData => {
      const { id, name } = rawBillingData;
      return (
        <div
          className="optionContainer cityOption"
          key={`cityOption${id}`}
          onClick={() => alert(name)}
        >
          <span>{name}</span>
        </div>
      );
    },
  },
};
