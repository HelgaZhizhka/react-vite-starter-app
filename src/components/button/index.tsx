interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps): React.JSX.Element => (
  <button onClick={onClick} className={`button ${variant}`}>
    {children}
  </button>
);
