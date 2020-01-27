import React, { FunctionComponent } from 'react';

interface DescriptionProps {
  label: string;
  children?: React.ReactNode;
}

const Description: FunctionComponent<DescriptionProps> = ({
  label,
  children
}) => (
  <>
    <dt data-testid="label">{label}</dt>
    <dd data-testid="description">{children}</dd>
    <style jsx>{`
      dt {
        font-weight: bold;
        font-size: 2.1em;
        color: white;
        background: #2948e8;
        padding: 0.4em 0.6em;
      }
      dd {
        font-size: 1.4em;
        padding: 0.6em 0.9em;
      }
    `}</style>
  </>
);

export default Description;
