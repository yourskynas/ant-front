import Github from 'shared/assets/icons/contacts/github 16.svg';
import Website from 'shared/assets/icons/contacts/square-arrow-right-up 16.svg';
import Telegram from 'shared/assets/icons/contacts/telegram 16.svg';
import Vk from 'shared/assets/icons/contacts/vk 16.svg';

import { ContactsValueType } from '~/PersonalAccount/types';

import styles from './Contacts.module.css';

type ContactsProps = {
  contacts: {
    website: string;
    github: string;
    telegram: string;
    vk: string;
  };
};

const getSvg = (value: ContactsValueType) => {
  switch (value) {
    case 'github.com':
      return <Github />;
    case 'telegram':
      return <Telegram />;
    case 'vk.com':
      return <Vk />;
    case 'website.com':
      return <Website />;
  }
};

export const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <div className={styles.mainConteiner}>
      {Object.values(contacts).map((contact) => {
        return (
          <div key={contact} className={styles.contactConteiner}>
            <div className={styles.contactSvg}>{getSvg(contact as ContactsValueType)}</div>
            <p className={styles.contactText}>{contact}</p>
          </div>
        );
      })}
    </div>
  );
};
