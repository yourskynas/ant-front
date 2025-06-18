import Logout from 'shared/assets/icons/account/logout.svg';

import { HEADER_PROFILE, LOG_OUT } from '~/PersonalAccount/constants';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>{HEADER_PROFILE}</h1>
      <div className={styles.logoutConteiner}>
        <button className={styles.logoutBtn}>{LOG_OUT}</button>
        <Logout />
      </div>
    </div>
  );
};
