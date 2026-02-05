import { Meta, StoryObj } from '@storybook/react/*';
import BordMentions from './BordMentions';
import { fn } from '@storybook/test';

const meta = {
  title: 'BordMentions',
  component: BordMentions,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordMentions>;

export const OneMention: Story = {
  args: {
    placeholder: 'Escribe un mensaje...',
    style: {
      width: '40rem',
      height: '10rem',
    },
    updateMessageCallback: fn(),
    updateMentionedUsersCallback: fn(),
    userListProps: {
      style: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
    userList: [
      {
        userId: 1,
        firstName: 'Brad',
        lastName: 'Pitt',
        email: 'brad.pitt@example.com',
        photoUrl:
          'https://www.lavanguardia.com/peliculas-series/images/profile/1963/12/w1280/1k9MVNS9M3Y4KejBHusNdbGJwRw.jpg',
      },
      {
        userId: 2,
        firstName: 'Scarlett',
        lastName: 'Johansson',
        email: 'scarlett.johansson@example.com',
        photoUrl: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg',
      },
      {
        userId: 3,
        firstName: 'Pedro',
        lastName: 'Pascal',
        email: 'pedro.pascal@example.com',
        photoUrl:
          'https://www.usmagazine.com/wp-content/uploads/2023/01/Pedro-Pascal-Through-the-Years-2023.jpg?quality=86&strip=all',
      },
    ],
  },
};
