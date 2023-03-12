import React from 'react';
import { useHover } from '../../hooks/useHover';

const HookHoverComponent = () => {
  const { hovered, ref } = useHover();
  return (
    <div>
      <hr style={{ width: '90vw' }} />
      <h3>Hook Hover</h3>
      <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>;
    </div>
  );
};

export default HookHoverComponent;
