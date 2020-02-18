import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import HeaderNav from './HeaderNav';
import HeaderNavLink from './HeaderNavLink';

const navMenus = [
  {
    route: '/',
    label: 'プロフィール'
  },
  {
    route: '/job-offer',
    label: '仕事'
  },
  {
    route: '/schedule',
    label: 'スケジュール'
  }
];

const Header: FunctionComponent = () => {
  const router = useRouter();

  return (
    <header>
      <div className="title-container">
        <p className="title">
          koiketakayuki
          <span className="accent">&#39;</span>s page
        </p>
      </div>
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
        .title {
          font-size: 5.6em;
          font-weight: bold;
          font-family: Andale Mono, monospace;
          font-style: oblique;
          overflow-wrap: break-word;
        }
        .title-container {
          padding: 128px 24px 24px;
          background-image: url('images/title-background.svg');
        }
        @media screen and (max-width: 480px) {
          .title {
            font-size: 3.6em;
          }
          .title-container {
            padding: 72px 24px 24px;
          }
        }
        .accent {
          color: #e88229;
        }
      `}</style>
    </header>
  );
};

export default Header;
