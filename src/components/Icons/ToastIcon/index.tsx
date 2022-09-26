import React from 'react';

import { iconsMap } from 'constants/index';

import { IconImage, IconWrap } from '../styled';
import { IconProps } from '../interfaces';

export const ToastIcon = ({ type }: IconProps) => (
  <IconWrap type={type}>
    <IconImage src={iconsMap.get(type)} alt="Warning icon" type={type} />
  </IconWrap>
);
