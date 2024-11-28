import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface INativeScrollBlockProps {
  children: ReactNode;
}

const NativeScrollBlock: FC<INativeScrollBlockProps> = ({ children }) => {
  return (
    <div className={ styles.section }>
      { children }
    </div>
  )
}

export default NativeScrollBlock;