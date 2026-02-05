import type { Meta, StoryObj } from '@storybook/react/*';
import BordTextButton from './BordTextButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'BordTextButton',
  component: BordTextButton,
  args: {
    text: 'Una acción',
    onClick: fn(),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordTextButton>;

export const Default: Story = {
  args: {
    rightIconProps: { variant: 'arrowRightCircle', standardSize: 12 },
  },
};

export const UnderlinedNoIcons: Story = {
  args: {
    textProps: { style: { textDecorationLine: 'underline' } },
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    rightIconProps: { variant: 'arrowRightCircle', standardSize: 12 },
  },
};

export const TwoIcons: Story = {
  args: {
    isDisabled: true,
    textProps: { style: { textDecorationLine: 'underline' } },
    leftIconProps: { variant: 'bord', standardSize: 12 },
    rightIconProps: { variant: 'arrowRightCircle', standardSize: 12 },
  },
};

export const customColors: Story = {
  args: {
    textProps: { style: { color: 'yellow' } },
    leftIconProps: { variant: 'bord', standardSize: 12, stroke: 'purple' },
    rightIconProps: { variant: 'arrowRightCircle', standardSize: 12, stroke: 'red' },
  },
};
