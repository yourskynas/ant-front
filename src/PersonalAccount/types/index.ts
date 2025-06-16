import { SIDEBAR } from '../constants';

export type SidebarType = (typeof SIDEBAR)[keyof typeof SIDEBAR];
