import styles from './Input.module.css';

import errorIcon from '../images/icon-error.svg';

const Input = (props) => {

  const inputErrorClass = props.error ? styles.errorBorder : "";

  return (
    <label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        className={inputErrorClass}
        placeholder={props.placeholder}
        value={props.val}
        onChange={props.changeHandler}
      />

      {props.error && <img src={errorIcon} alt="error icon" />}
      {props.error && <div className={styles.errorMessage}>{props.error}</div>}
    </label>
  )
}

export default Input;