import classNames from 'classnames';
import Homework from 'shared/assets/icons/account/Homework.svg';
import Profile from 'shared/assets/icons/account/Profile.svg';
import Schedule from 'shared/assets/icons/account/Schedule.svg';

import { MENU_TITLE, SIDEBAR } from '~/PersonalAccount/constants';
import { SidebarType } from '~/PersonalAccount/types';

import styles from './MenuItems.module.css';

type MenuItemsProps = {
  isHidden: boolean;
};

const getSvg = (value: SidebarType) => {
  switch (value) {
    case SIDEBAR.Profile:
      return <Profile />;
    case SIDEBAR.Schedule:
      return <Schedule />;
    case SIDEBAR.Homework:
      return <Homework />;
  }
};

export const MenuItems = ({ isHidden }: MenuItemsProps) => {
  const itemClass = classNames({
    [styles.item]: !isHidden,
    [styles.miniItem]: isHidden,
  });
  const itemTextClass = classNames({
    [styles.itemText]: !isHidden,
    [styles.miniItemText]: isHidden,
  });
  return (
    <div className={styles.items}>
      {!isHidden && (
        <div className={styles.title}>
          <h1 className={styles.titleText}>{MENU_TITLE}</h1>
        </div>
      )}
      {Object.values(SIDEBAR).map((item) => {
        return (
          <div key={item} className={itemClass}>
            {getSvg(item)}
            <p className={itemTextClass}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
