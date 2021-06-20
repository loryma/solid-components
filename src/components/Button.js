import cx from 'classnames';
import b from 'b_';
import "./Button.css";

const Button = ({ children, mix, theme }) => {
  return (
    <button 
      className={cx(
        b("my-button", { theme })
      , mix)}
    >
      {children}
    </button>
  )
};

export default Button;