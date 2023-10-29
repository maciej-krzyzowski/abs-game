import { Button } from '@components/Button/Button';

import './Header.scss';

export const Header = ({
  position,
  rollResult,
  handleRollDice,
}: {
  position: number;
  rollResult: number;
  handleRollDice: () => void;
}) => (
  <div className="header">
    <h1 className="header__title">Zadanie rekrutacyjne - ABS - Gra</h1>
    <p className="header__position">Aktualna pozycja: {position}</p>
    <p className="header__dice">Liczba wyrzuconych oczek: {rollResult}</p>
    <Button text="Rzuć kostką" onClick={handleRollDice} />
  </div>
);
