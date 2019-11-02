import React, { FunctionComponent } from 'react';
import HeaderNav from './HeaderNav';
import HeaderNavLink from './HeaderNavLink';

interface Route {
  route: string;
  label: string;
}

interface HeaderProps {
  title: string;
  currentRoute: string;
  routes: Route[];
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  routes,
  currentRoute
}) => {
  return (
    <header>
      <p className="page-title" title="title">
        {title}
      </p>
      <HeaderNav>
        {routes.map(r => (
          <HeaderNavLink
            key={r.label}
            href={r.route}
            active={currentRoute === r.route}
          >
            {r.label}
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
