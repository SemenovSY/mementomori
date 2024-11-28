import type { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITabProps {
  children: ReactNode;
  className?: string;
}

const Tab: FC<ITabProps> = ({ children, className = undefined }) => {
  return (
    <div className={ clsx(styles.tab, className) }>
      { children }
    </div>
  )
}

export default Tab;