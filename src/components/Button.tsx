import React from 'react';
import { FC } from 'react'

interface IProps {
  onClick?: React.MouseEventHandler;
  title?: string;
  children: React.ReactNode;
}

const Button: FC<IProps> = ({ onClick, title}) => {
  return (
    <input type="button" value={title} onClick={onClick}>
    </input>
  );
}

export default Button;
