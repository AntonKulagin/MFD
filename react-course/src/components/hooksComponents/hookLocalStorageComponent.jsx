import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const HookLocalStorageComponent = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token');
  return (
    <div>
      <hr style={{ width: '90vw' }} />
      <h3>Hook LocalStorage</h3>
      <p>Твой токен: {token}</p>
      <div>
        <button onClick={() => setItem('token')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  );
};

export default HookLocalStorageComponent;
