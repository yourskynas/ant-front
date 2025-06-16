import { Flex } from '@radix-ui/themes';

import { Profile } from '../components/Profile/Profile';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const PersonalAccount = () => {
  return (
    <Flex>
      <Sidebar />
      <Profile />
    </Flex>
  );
};
