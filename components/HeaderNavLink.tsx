import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const HeaderNavLink: FunctionComponent<{
  href: string;
  active?: boolean;
  children?: React.ReactNode;
}> = ({ href, children, active = false }) => {
  if (active) {
    return (
      <li>
        <div className="active">{children}</div>
        <style jsx>{`
          .active {
            font-size: 1.4em;
            font-weight: bold;
            padding: 1em;
            color: #4f69ef;
            opacity: 0.8;
          }
        `}</style>
      </li>
    );
  }

  return (
    <li>
      <Link href={href}>
        <div role="link">{children}</div>
      </Link>
      <style jsx>{`
        div {
          font-size: 1.4em;
          padding: 1em;
          cursor: pointer;
          font-weight: bold;
        }
        div:hover {
          background: #4f69ef;
          color: white;
          opacity: 0.8;
        }
      `}</style>
    </li>
  );
};

export default HeaderNavLink;
