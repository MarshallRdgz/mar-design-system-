import type { Meta, StoryObj } from '@storybook/react/*';
import BordFlag from './BordFlag';

const meta = {
  title: 'BordFlag',
  component: BordFlag,
  args: {
    flagForm: 'square',
    customWidth: '25rem',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordFlag>;

export const Circular: Story = {
  args: {
    country: 'au',
    standardSize: 12,
    variant: 'circle',
    customWidth: undefined,
  },
};

export const Rectangular: Story = {
  args: {
    country: 'al',
    standardSize: 32,
    variant: 'square',
    customWidth: undefined,
  },
};

export const CustomSize: Story = {
  args: {
    country: 'ar',
    variant: 'square',
  },
};

export const NoCountry: Story = {
  args: {
    country: undefined,
    variant: 'square',
  },
};
