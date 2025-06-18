import TrashIcon from 'shared/assets/icons/account/trash-bin-2.svg';

import { InputNameType } from '~/PersonalAccount/types';

import styles from './Input.module.css';

type InputProps = {
  name: InputNameType;
};

export const Input = ({ name }: InputProps) => {
  const addPlaceholder = (name: InputNameType) => {
    switch (name) {
      case 'fullName':
        return 'ФИО';
      case 'login':
        return 'Логин';
      case 'reference':
        return 'Ссылка';
    }
  };
  return (
    <div className={styles.inputConteiner}>
      <input className={styles.input} type='text' name={name} placeholder={addPlaceholder(name)} />
      {name === 'reference' && <TrashIcon />}
    </div>
  );
};
