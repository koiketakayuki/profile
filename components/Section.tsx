import React, { FunctionComponent } from 'react';

interface SectionProps {
  label: string;
  children?: React.ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({ label, children }) => (
  <section>
    <div data-testid="label" className="section-label">
      {label}
    </div>
    <div data-testid="content" className="section-content">
      {children}
    </div>
    <style jsx>{`
      .section-label {
        font-weight: bold;
        font-size: 2.1em;
        color: white;
        background: #2948e8;
        padding: 0.4em 0.6em;
      }
      .section-content {
        font-size: 1.4em;
        padding: 0.6em 0.9em;
      }
    `}</style>
  </section>
);

export default Section;
