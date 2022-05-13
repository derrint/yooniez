import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  className?: string;
  id?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} ${props.className || ''}`} id={props.id}>
    {props.children}
  </div>
);

export { Background };
