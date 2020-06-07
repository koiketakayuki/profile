import React from 'react';

interface DescriptionProps {
  label: string;
}

const Description: React.FC<DescriptionProps> = ({ label, children }) => (
  <>
    <dt>{label}</dt>
    <dd>{children}</dd>
    <style jsx>{`
      dt {
        margin-top: 20px;
        font-weight: bold;
        font-size: 1.2em;
      }
      dd {
        font-weight: default;
        margin-top: 12px;
        line-height: 1.4em;
      }
    `}</style>
  </>
);

export default Description;
