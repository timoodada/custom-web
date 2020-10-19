import React, { FC, useEffect } from 'react';
import { useRefreshUserInfo } from '../../store/actions/user-info';
import './store/reducers';
import { Structure } from '../../business/structure';

interface Props {}

const Home: FC<Props> = () => {
  const refreshUserInfo = useRefreshUserInfo();

  useEffect(() => {
    refreshUserInfo();
  }, [refreshUserInfo]);

  return (
    <Structure>
      {
        new Array(50).fill(1).map((val, key) => (
          <div key={key}>Content</div>
        ))
      }
    </Structure>
  );
};

export default Home;
