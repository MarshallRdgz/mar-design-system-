import type { Meta, StoryObj } from '@storybook/react/*';
import BordToolModelMarker from './BordToolModelMarker';

const meta = {
  title: 'BordToolModelMarker',
  component: BordToolModelMarker,
  args: {
    isBordTool: true,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordToolModelMarker>;

export const BordTool: Story = {
  args: {},
};

export const ExternalTool: Story = {
  args: {
    isBordTool: false,
  },
};

export const CustomSize: Story = {
  args: {
    customSize: 33,
  },
};
