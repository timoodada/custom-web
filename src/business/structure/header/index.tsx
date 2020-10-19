import React, { FC, useCallback, useEffect } from 'react';
import './style.scss';

interface Props {}
const Header: FC<Props> = () => {
  const onScroll = useCallback((e) => {
    console.log(e);
  }, []);

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.addEventListener('scroll', onScroll);
    }
    return () => {
      if (root) {
        root.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll]);

  return (
    <div className={'custom-header'}>header</div>
  );
};

export { Header };
