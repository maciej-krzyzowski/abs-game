import { ReactNode } from 'react';

import './Modal.scss';

export const Modal = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={`modal ${className ?? ''}`}>
    <div className="modal__container">{children}</div>
  </div>
);
