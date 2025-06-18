import { INPUT_NAME, SIDEBAR } from '../constants';
import { MENTOR } from '../moks';

export type SidebarType = (typeof SIDEBAR)[keyof typeof SIDEBAR];

export type MentorType = typeof MENTOR;

export type ContactsType = Pick<MentorType, 'contacts'>;

export type ContactsValueType = MentorType['contacts'][keyof MentorType['contacts']];

export type InputNameType = (typeof INPUT_NAME)[keyof typeof INPUT_NAME];
