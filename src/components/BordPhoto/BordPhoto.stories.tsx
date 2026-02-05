import type { Meta, StoryObj } from '@storybook/react/*';
import BordPhoto from './BordPhoto';
import { bordColorTheme } from '../../styles/constants';

const meta = {
  title: 'BordPhoto',
  component: BordPhoto,
  args: {
    variant: 'circle',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordPhoto>;

export const EmployeePhotoExample: Story = {
  args: {
    url: 'https://d3jfrqiwvd5im4.cloudfront.net/images/IMG_3833-80e9.jpg',
    variant: 'square',
    size: 's56',
    avatarProps: {
      variant: 'rectangularBordMascot',
      customWidth: '7rem',
    },
    flagProps: {
      country: 'br',
      variant: 'circle',
      standardSize: 24,
    },
    imageProps: { style: { width: '100%', borderRadius: '1.1rem' } },
  },
};

export const BrandExample: Story = {
  args: {
    url: 'https://d3jfrqiwvd5im4.cloudfront.net/images/brandinglenovo-logolenovologoposredlowres-CLRuzpnT_-regular.png',
    variant: 'circle',
    size: 's32',
    oneToneIconProps: {
      variant: 'bord',
      customWidth: '3.2rem',
      stroke: bordColorTheme.navyBlue[700],
    },
  },
};

export const ToolExample: Story = {
  args: {
    url: 'https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png',
    variant: 'square',
    size: 's100',
  },
};

export const LocationExample: Story = {
  args: {
    variant: 'square',
    size: 's48',
    style: {
      backgroundColor: bordColorTheme.layout.level2,
    },
    oneToneIconProps: {
      variant: 'building3',
      customWidth: '2rem',
      stroke: bordColorTheme.content.secondary,
    },
    flagProps: {
      country: 'ar',
      variant: 'circle',
      standardSize: 20,
    },
  },
};

export const BordToolExample: Story = {
  args: {
    variant: 'square',
    url: 'https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png',
    size: 's56',
    toolModelMarkerProps: {
      customSize: 3.2,
      isBordTool: true,
    },
  },
};

export const AvatarPlaceholder: Story = {
  args: {
    variant: 'square',
    size: 's56',
    avatarProps: {
      variant: 'rectangularBordMascot',
      customWidth: '7rem',
    },
  },
};

export const IconPlaceholder: Story = {
  args: {
    variant: 'square',
    size: 's100',
    oneToneIconProps: {
      variant: 'bord',
      customWidth: '6rem',
      stroke: bordColorTheme.primary.bgDefault,
    },
  },
};

export const CustomWidth: Story = {
  args: {
    url: 'https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png',
    variant: 'square',
    style: {
      width: '24rem',
      height: '24rem',
    },
  },
};

export const Rectangular: Story = {
  args: {
    url: 'https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png',
    variant: 'square',
    style: {
      height: '44rem',
      width: '24rem',
    },
  },
};

export const Ellipse: Story = {
  args: {
    url: 'https://d2bb2hf1hp3ih3.cloudfront.net/images/mac01-a5c2-H6zDk-5Md-regular.png',
    variant: 'circle',
    style: {
      width: '64rem',
      height: '24rem',
    },
    imageProps: {
      style: {
        width: 'auto',
        height: '24rem',
      },
    },
  },
};
