import { FunctionComponent } from 'react';
import { BORD_AVATARS } from '../BordAvatar.types';
import BordCircularFigmaAvatar from './BordCircularFigmaAvatar';
import BordCircularUserAvatar from './BordCircularUserAvatar';
import BordCircularWorldAvatar from './BordCircularWorldAvatar';
import BordCircularZeppelinAvatar from './BordCircularZeppelinAvatar';
import BordCircularMascotAvatar from './BordCircularMascotAvatar';
import BordRectangularFigmaAvatar from './BordRectangularFigmaAvatar';
import BordRectangularUserAvatar from './BordRectangularUserAvatar';
import BordRectangularWorldAvatar from './BordRectangularWorldAvatar';
import BordRectangularZeppelinAvatar from './BordRectangularZeppelinAvatar';
import BordRectangularMascotAvatar from './BordRectangularMascotAvatar';

export const listOfBordAvatars: { [key in BORD_AVATARS]: FunctionComponent } = {
  circularFigma: BordCircularFigmaAvatar,
  circularUser: BordCircularUserAvatar,
  circularWorld: BordCircularWorldAvatar,
  circularZeppelin: BordCircularZeppelinAvatar,
  circularBordMascot: BordCircularMascotAvatar,
  rectangularFigma: BordRectangularFigmaAvatar,
  rectangularUser: BordRectangularUserAvatar,
  rectangularWorld: BordRectangularWorldAvatar,
  rectangularZeppelin: BordRectangularZeppelinAvatar,
  rectangularBordMascot: BordRectangularMascotAvatar,
};
