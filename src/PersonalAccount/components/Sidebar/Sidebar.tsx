import { Box } from '@radix-ui/themes';
import classNames from 'classnames';
import { useState } from 'react';
import SidebarLeft from 'shared/assets/icons/account/layout-sidebar-left-collapse.svg';
import Logo from 'shared/assets/icons/account/Logo.svg';

import { MenuItems } from '../MenuItems/MenuItems';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const buttonClass = classNames({
    [styles.hideButton]: true,
    [styles.rotateHideButton]: isHidden,
  });
  const boxClass = classNames({
    [styles.conteiner]: true,
    [styles.miniConteiner]: isHidden,
  });

  const handleHiddenClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Box className={boxClass}>
      <div className={styles.logo}>
        <Logo width='45px' height='24px' />
      </div>
      <MenuItems isHidden={isHidden} />
      <button className={buttonClass} onClick={handleHiddenClick}>
        <SidebarLeft />
      </button>
    </Box>
  );
};
