/* eslint-disable */
import { useState } from 'react';
import Button from '../Button';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import MenuMobile from './MenuMobile/MenuMobile';
import { Header } from './styles';

export const HeaderComponent = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <MenuDesktop
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </>
  );
};


