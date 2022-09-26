import React from 'react';

import crossIcon from 'assets/icons/cross.svg';
import { IconImage } from 'components/Icons/styled';

import { CrossWrap } from './styled';
import { CrossProps } from './interfaces';

export const CrossIcon = ({ type, destroy }: CrossProps) => (
  <CrossWrap type={type} onClick={destroy}>
    <IconImage src={crossIcon} alt="Cross icon" type={type} />
  </CrossWrap>
);
