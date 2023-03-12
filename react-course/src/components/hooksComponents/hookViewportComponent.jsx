import React from 'react';
import { useViewportSize } from '../../hooks/useViewportSize';

const HookViewportComponent = () => {
  const { height, width } = useViewportSize();
  return (
    <div>
      <hr style={{ width: '90vw' }} />
      <h3>Hook ViewportComponent</h3>
      <div>
        Width: {width}, height: {height}
      </div>
    </div>
  );
};

export default HookViewportComponent;
