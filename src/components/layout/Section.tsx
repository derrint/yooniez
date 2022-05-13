import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
  isHeader?: boolean;
  isFooter?: boolean;
  id?: string;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`max-w-screen-xl mx-auto px-4 sm:px-8 
    ${props.yPadding || 'py-8 sm:py-16'} ${props.className || ''}`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
