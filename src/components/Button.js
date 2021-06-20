import cx from 'classnames';
import "./Button.css";

const Button = ({ children, mix }) => {
  return (
    <button 
      className={cx("my-button", mix)}
    >
      {children}
    </button>
  )
};

export default Button;