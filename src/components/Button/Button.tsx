import './Button.scss';

export const Button = ({
  onClick,
  text,
  disabled,
}: {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}) => (
  <button className="button" type="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
