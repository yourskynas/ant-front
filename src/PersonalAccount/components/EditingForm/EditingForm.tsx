import AddIcon from 'shared/assets/icons/account/add.svg';

import {
  ABOUT_ME,
  ADD_TEXT_BTN,
  EDITING_TITLE,
  INPUT_NAME,
  REFERENCES,
  SAVE_TEXT_BTN,
} from '~/PersonalAccount/constants';

import { Input } from '../Input/Input';
import styles from './EditingForm.module.css';

export const EditingForm = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>{EDITING_TITLE}</h3>
      <div className={styles.inputConteiner}>
        <Input name={INPUT_NAME.FullName} />
        <Input name={INPUT_NAME.Login} />
      </div>
      <div className={styles.aboutMe}>
        <h4 className={styles.aboutMeTitle}>{ABOUT_ME}</h4>
        <textarea className={styles.aboutMeTextarea} />
      </div>
      <div className={styles.referencesConteiner}>
        <h4 className={styles.aboutMeTitle}>{REFERENCES}</h4>
        <div className={styles.referencesInput}>
          <Input name={INPUT_NAME.Reference} />
          <button className={styles.referencesButton}>
            <span>{ADD_TEXT_BTN}</span>
            <span>
              <AddIcon />
            </span>
          </button>
        </div>
      </div>
      <button type='submit' className={styles.submitButton}>
        {SAVE_TEXT_BTN}
      </button>
    </form>
  );
};
