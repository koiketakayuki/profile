import React from 'react';

interface DescriptionProps {
  label: string;
}

const Description: React.FC<DescriptionProps> = ({ label, children }) => (
  <dl>
    <dt>{label}</dt>
    <dd>{children}</dd>
    <style jsx>{`
      dt {
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 26px;
        color: #2948e8;
      }
      dd {
        font-weight: default;
        margin-top: 14px;
        margin-bottom: 26px;
        line-height: 1.4em;
      }
    `}</style>
  </dl>
);

export default Description;
