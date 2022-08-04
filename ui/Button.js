import classes from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
