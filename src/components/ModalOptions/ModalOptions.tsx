import { ChangeEvent, useMemo } from 'react';

import type { FieldsType, OptionsFieldsType } from '@/types/types';

import { Button } from '@components/Button/Button';
import { Modal } from '@components/Modal/Modal';

import './ModalOptions.scss';

export const ModalOptions = ({
  handleSaveOptions,
  handleChange,
  fields,
  optionsFields,
}: {
  handleSaveOptions: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  fields: FieldsType;
  optionsFields: OptionsFieldsType;
}) => {
  const getOptionSelectField = useMemo(() => {
    const options = Object.entries(fields).filter(
      ([key, value]) => key !== '1' && value === 0,
    );

    return options.length
      ? options.map(([key]) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))
      : '';
  }, [fields]);

  return (
    <Modal className="modal-options">
      <p>Dodawanie pól specjalnych</p>
      <p className="modal-options__instruction">Instrukcja</p>
      <ul className="modal-options__list">
        <li>Wpisz -1, po wejsciu na pole gra kończy się przegrana</li>
        <li>Wpisz 0, pole standardowe</li>
        <li>
          Wpisz 1-19, po wejsciu na pole gracz przesuwa sie na wybrane pole
        </li>
      </ul>
      <div>
        <label htmlFor="selectField" className="modal-options__label">
          Wybierz pole:
        </label>
        <select
          name="selectField"
          id="selectField"
          value={optionsFields.selectField}
          onChange={handleChange}
        >
          <option>Wybierz</option>
          {getOptionSelectField}
        </select>
      </div>
      <div>
        <label htmlFor="selectAction" className="modal-options__label">
          Wybierz opcję:
        </label>
        <input
          name="selectAction"
          type="number"
          id="selectAction"
          min={-1}
          max={19}
          onChange={handleChange}
          value={optionsFields.selectAction}
        />
      </div>
      <div className="modal-options__buttons">
        <Button text="Anuluj" onClick={handleSaveOptions} />
        <Button
          text="Zapisz"
          onClick={handleSaveOptions}
          disabled={
            optionsFields.selectAction == 0 || !optionsFields.selectField.length
          }
        />
      </div>
    </Modal>
  );
};
