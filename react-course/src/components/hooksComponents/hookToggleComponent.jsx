import React from 'react';
import { useToggle } from '../../hooks/useToggle';

const HookToggleComponent = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  return (
    <div>
      <hr style={{ width: '90vw' }} />
      <h3>Hook Toggle</h3>
      <button onClick={() => toggle()}>{value}</button>
    </div>
  );
};

export default HookToggleComponent;
