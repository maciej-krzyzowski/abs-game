import type { FieldsType } from '@/types/types';

import './Fields.scss';

export const Fields = ({
  fields,
  position,
}: {
  fields: FieldsType;
  position: number;
}) => (
  <div className="fields">
    {fields &&
      Object.entries(fields).map(([key, val]) => {
        const specialField = val !== 0 ? ' fields__field--special' : '';
        const activeField =
          Number(key) === position ? ' fields__field--active' : '';

        return (
          <div
            key={key}
            className={`fields__field${specialField}${activeField}`}
          >
            {key}
          </div>
        );
      })}
  </div>
);
