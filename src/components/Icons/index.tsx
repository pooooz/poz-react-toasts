import React from 'react';

import crossIcon from 'assets/icons/cross.svg';

import { iconsMap } from 'constants/index';

import { CrossWrap, IconImage, IconWrap } from './styled';
import { CrossProps, IconProps } from './interfaces';

export const Icon = ({ type }: IconProps) => (
  <IconWrap type={type}>
    <IconImage src={iconsMap.get(type)} alt="Warning icon" type={type} />
  </IconWrap>
);

export const CrossIcon = ({ type, destroy }: CrossProps) => (
  <CrossWrap type={type} onClick={destroy}>
    <IconImage src={crossIcon} alt="Cross icon" type={type} />
  </CrossWrap>
);
