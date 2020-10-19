import React, { FC, ReactNode } from 'react';
import './style.scss';
import { combineClassNames } from '../../helpers/utils';
import { Header } from './header';

interface Props {
  header?: ReactNode;
  slider?: ReactNode;
  footer?: ReactNode;
  extra?: ReactNode;
  className?: string;
}

const Structure: FC<Props> = (props) => {
  const {
    children,
    header = <Header />,
    slider,
    footer,
    extra,
    className
  } = props;

  return (
    <section className={combineClassNames(className, 'structure')}>
      <header>{ header }</header>
      <section className={'content-middle'}>
        <aside>{ slider }</aside>
        <main className={'content-main'}>{ children }</main>
      </section>
      { extra }
      <footer>{ footer }</footer>
    </section>
  );
};

export { Structure };
