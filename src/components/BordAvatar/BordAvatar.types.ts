import { ComponentProps } from 'react';

export enum BORD_AVATARS {
  'circularFigma' = 'circularFigma',
  'circularUser' = 'circularUser',
  'circularWorld' = 'circularWorld',
  'circularZeppelin' = 'circularZeppelin',
  'circularBordMascot' = 'circularBordMascot',
  'rectangularFigma' = 'rectangularFigma',
  'rectangularUser' = 'rectangularUser',
  'rectangularWorld' = 'rectangularWorld',
  'rectangularZeppelin' = 'rectangularZeppelin',
  'rectangularBordMascot' = 'rectangularBordMascot',
}

export type TbordAvatarsVariant =
  | 'circularFigma'
  | 'circularUser'
  | 'circularWorld'
  | 'circularZeppelin'
  | 'circularBordMascot'
  | 'rectangularFigma'
  | 'rectangularUser'
  | 'rectangularWorld'
  | 'rectangularZeppelin'
  | 'rectangularBordMascot';

export interface IBordAvatarProps extends ComponentProps<'svg'> {
  variant: TbordAvatarsVariant;
  standardSize?: 20 | 32 | 48;
  customWidth?: string;
}
