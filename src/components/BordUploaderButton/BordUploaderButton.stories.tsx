import type { Meta, StoryObj } from "@storybook/react/*";
import BordUploaderButton from "./BordUploaderButton";

const meta = {
  title: "BordUploaderButton",
  component: BordUploaderButton,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordUploaderButton>;

export const DefaultEmpty: Story = {
  args: {
    label: "Title",
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
  },
};

export const DangerEmpty: Story = {
  args: {
    label: "Title",
    bordUploaderButtonType: "error",
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
  },
};

export const DisabledEmpty: Story = {
  args: {
    label: "Title",
    disabledBordUploaderButton: true,
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
  },
};

export const DefaultFilled: Story = {
  args: {
    label: "Title",
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
    isFilled: true,
    defaultFile: {
      documentFile: undefined,
      documentName: "Descargar Archivo de prueba",
      url: "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
    },
  },
};

export const ErrorFilled: Story = {
  args: {
    label: "Title",
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
    isFilled: true,
    defaultFile: {
      documentFile: undefined,
      documentName: "Error en el archivo cargado",
    },
    bordUploaderButtonType: "error",
    errorText: "Error en el archivo cargado",
  },
};

export const DisabledFilled: Story = {
  args: {
    label: "Title",
    emptyBordUploaderButtonSubtitle:
      "Formatos aceptados: [formato] Peso máximo: [peso]",
    isFilled: true,
    defaultFile: {
      documentFile: undefined,
      documentName: "Descargar Archivo de prueba",
    },
    disabledBordUploaderButton: true,
  },
};

export const LoadingButton: Story = {
  args: {
    label: "Title",
    loading: true,
  },
};
