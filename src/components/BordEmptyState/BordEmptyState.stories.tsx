import type { Meta, StoryObj } from '@storybook/react/*';
import BordEmptyState from './BordEmptyState';
import { fn } from '@storybook/test';
import { bordColorTheme } from '../../styles/constants';

const meta = {
  title: 'BordEmptyState',
  component: BordEmptyState,
  args: {
    title: 'BordEmptyState',
    component: BordEmptyState,
    buttonOneProps: {
      onClick: fn(),
      buttonIconOne: 'youtube',
      buttonIconTwo: 'instagram',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordEmptyState>;

export const Default: Story = {
  args: {},
};

export const RealCase: Story = {
  args: {
    title: '¿Encontró lo que buscaba?',
    subTitle:
      'Corresponde a un campo opcional extra para cada fila del detalle, que puede almacenar hasta 1.000 caracteres, con incluso saltos de línea, y que busca complementar la glosa básica del documento de solo 80 caracteres.',
    buttonOneProps: {
      label: 'Ver más',
    },
    buttonTwoProps: {
      onClick: fn(),
      modeButton: 'tertiary',
      buttonIconOne: 'figma',
      buttonIconTwo: 'facebook',
    },
    ilustrationIconProps: {
      variant: 'danger',
      standardSize: 100,
    },
  },
};

export const SingleButton: Story = {
  args: {},
};

export const BigButtons: Story = {
  args: {
    buttonOneProps: {
      onClick: fn(),
      customWidth: 'w-380',
    },
    buttonTwoProps: {
      onClick: fn(),
      modeButton: 'tertiary',
      customWidth: 'w-380',
    },
    ilustrationIconProps: {
      variant: 'marketPlace',
      standardSize: 100,
    },
  },
};

export const TwoToneIconCase: Story = {
  args: {
    title: 'No hay laptops con DEP disponibles para Colombia',
    subTitle: '¿Necesitas alguna en específico? Cuéntanos y la encontraremos para ti',
    buttonOneProps: {
      label: 'Solicitar producto',
      buttonIconTwo: 'plus',
      customWidth: 'w-280',
    },
    twoToneIconProps: {
      variant: 'macLaptopSettings',
      customWidth: '10rem',
      colorTones: {
        tone1: bordColorTheme.primary.bgDefault,
        tone2: bordColorTheme.white.default,
        opacity1: '1',
        opacity2: '1',
      },
    },
    ilustrationIconProps: undefined,
  },
};

export const OneToneIconCase: Story = {
  args: {
    title: 'No hay laptops con DEP disponibles para Colombia',
    subTitle: '¿Necesitas alguna en específico? Cuéntanos y la encontraremos para ti',
    oneToneIconProps: {
      variant: 'bord',
      customWidth: '10rem',
    },
    ilustrationIconProps: undefined,
    buttonOneProps: {
      label: 'Solicitar producto',
      buttonIconTwo: 'plus',
      customWidth: 'w-280',
    },
  },
};
