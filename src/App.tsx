import { ChangeEvent, useEffect, useState } from 'react';

import { dataFields } from '@/data/data';
import type { FieldsType, OptionsFieldsType, RollType } from '@/types/types';

import { Button } from '@components/Button/Button';
import { Fields } from '@components/Fields/Fields';
import { Header } from '@components/Header/Header';
import { ModalOptions } from '@components/ModalOptions/ModalOptions';
import { ModalResult } from '@components/ModalResult';

import '@/index.scss';

const App = () => {
  const [fields, setFields] = useState<FieldsType>({ ...dataFields });
  const [position, setPosition] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [roll, setRoll] = useState<RollType>({
    result: 0,
    count: 0,
    totalResult: 0,
  });
  const [modalOption, setModalOption] = useState<OptionsFieldsType>({
    isOpen: false,
    selectField: '',
    selectAction: 0,
  });

  useEffect(() => {
    setFields({ ...dataFields });
  }, []);

  const handleOpenOptions = () => {
    setModalOption((prev) => ({
      ...prev,
      isOpen: true,
    }));
  };

  const handleChangeOptions = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setModalOption((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveOptions = () => {
    if (modalOption.selectField.length && modalOption.selectAction !== 0) {
      setFields((prev) => ({
        ...prev,
        [modalOption.selectField]: Number(modalOption.selectAction),
      }));
    }
    setModalOption({ isOpen: false, selectField: '', selectAction: 0 });
  };

  const handleRollDice = () => {
    if (fields) {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      const newPosition = position + diceResult;
      const specialField = fields[newPosition];

      setRoll(({ count, totalResult }) => ({
        result: diceResult,
        count: ++count,
        totalResult: totalResult + diceResult,
      }));

      if (specialField === -1 || newPosition === 20) {
        setIsGameFinished(true);
        setPosition(newPosition);
      } else if (specialField > 0) {
        setPosition(specialField);
      } else if (newPosition > 20) {
        setPosition(20 - (newPosition - 20));
      } else {
        setPosition(newPosition);
      }
    }
  };

  const handlePlayAgain = () => {
    setRoll({ result: 0, count: 0, totalResult: 0 });
    setIsGameFinished(false);
    setPosition(0);
  };

  return (
    <div className="app">
      <div className="container">
        <Header
          position={position}
          rollResult={roll.result}
          handleRollDice={handleRollDice}
        />
        <Fields fields={fields} position={position} />
        <Button text="Opcje" onClick={handleOpenOptions} />
      </div>

      {isGameFinished && (
        <ModalResult
          position={position}
          roll={roll}
          handlePlayAgain={handlePlayAgain}
        />
      )}
      {modalOption.isOpen && (
        <ModalOptions
          fields={fields}
          optionsFields={modalOption}
          handleChange={handleChangeOptions}
          handleSaveOptions={handleSaveOptions}
        />
      )}
    </div>
  );
};

export default App;
