import React from 'react';
import { useHover } from '../../hooks/useHover';

const HookHoverComponent = () => {
  const { hovered, ref } = useHover();
  return <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>;
};

export default HookHoverComponent;
