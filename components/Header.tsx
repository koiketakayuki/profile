import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import HeaderNav from './HeaderNav';
import HeaderNavLink from './HeaderNavLink';

const navMenus = [
  {
    route: '/',
    label: 'Profile'
  }
];

const Header: FunctionComponent = () => {
  const router = useRouter();

  return (
    <header>
      <p className="page-title">koiketakayuki&#39;s Page</p>
      <HeaderNav>
        {navMenus.map(m => (
          <HeaderNavLink
            key={m.label}
            href={m.route}
            active={router.route === m.route}
          >
            {m.label}
          </HeaderNavLink>
        ))}
      </HeaderNav>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 54px;
          padding: 0 24px;
        }
        .page-title {
          font-size: 1.6em;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Header;
