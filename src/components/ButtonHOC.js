import './Button.css';

const ButtonBase = ({ style, children }) => {
  return <button style={style}>{children}</button>;
};

const withTheme1 = (Button) => (props) => {
  if (props.theme === "theme1") {
    return <Button {...props} style={{ color: "red" }} />
  }

  return <Button {...props} />;
};

const compose = (...hocs) => (BaseComponent) =>
  hocs.reduce((Component, nextHOC) => nextHOC(Component), BaseComponent);

const withTheme2 = (Button) => (props) => {
  if (props.theme === "theme2") {
    return <Button {...props} style={{ color: "green" }} />;
  }

  return <Button {...props} />;
};

export default compose(withTheme1, withTheme2)(ButtonBase);