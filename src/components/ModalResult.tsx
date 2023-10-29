import type { RollType } from '@/types/types';

import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';

export const ModalResult = ({
  handlePlayAgain,
  position,
  roll,
}: {
  handlePlayAgain: () => void;
  position: number;
  roll: RollType;
}) => (
  <Modal>
    <p>
      {position === 20 ? 'Gratulacje! Wygrałeś grę.' : 'Przegrałeś grę! :('}
    </p>
    <p>Aktualna pozycja: {position}</p>
    <p>Ilość rzutów: {roll.count}</p>
    <p>Średnią liczbę wyrzuconych oczek: {roll.totalResult / roll.count}</p>
    <Button text="Zagraj jeszcze raz" onClick={handlePlayAgain} />
  </Modal>
);
