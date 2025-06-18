import Avatar from 'shared/assets/images/account/Avatar.png';

import { CHANGE_PHOTO } from '~/PersonalAccount/constants';
import { MENTOR } from '~/PersonalAccount/moks';

import { Contacts } from '../Contacts/Contacts';
import { EditingForm } from '../EditingForm/EditingForm';
import { Header } from '../Header/Header';
import styles from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.conteiner}>
      <Header />
      <div className={styles.userConteiner}>
        <div className={styles.userInfo}>
          <img className={styles.userImage} src={Avatar} alt='avatar' />
          <div>
            <h2 className={styles.userName}>{MENTOR.name}</h2>
            <p className={styles.userLogin}>{MENTOR.login}</p>
          </div>
          <p className={styles.userDescription}>{MENTOR.description}</p>
          <Contacts contacts={MENTOR.contacts} />
        </div>
        <div className={styles.changePhotoConteiner}>
          <button className={styles.changePhotoBtn}>{CHANGE_PHOTO}</button>
        </div>
      </div>
      <EditingForm />
    </div>
  );
};
