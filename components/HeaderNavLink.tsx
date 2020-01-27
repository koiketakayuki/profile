import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const HeaderNavLink: FunctionComponent<{
  href: string;
  active?: boolean;
  children?: React.ReactNode;
}> = ({ href, children, active = false }) => (
  <li>
    {active ? (
      <div className="active">{children}</div>
    ) : (
      <Link href={href}>
        <div className="link" role="link">
          {children}
        </div>
      </Link>
    )}

    <style jsx>{`
      li {
        display: inline-block;
      }
      li:not(:first-child) {
        margin-left: 24px;
      }
      .active {
        color: blue;
      }
      .link {
        cursor: pointer;
      }
      .link:hover {
        opacity: 0.8;
      }
    `}</style>
  </li>
);

export default HeaderNavLink;
