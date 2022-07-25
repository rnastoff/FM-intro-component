import { useState } from 'react';

import styles from './Intro.module.css';

import useForm from '../hooks/useForm';
import validate from '../hooks/validateInfo';

import Wrapper from './Wrapper';
import Input from './Input';

const Intro = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <Wrapper>
      <div className={styles.left}>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.tryItFree}>
          <h2><span className={styles.bold}>Try it free 7 days</span> then $20/mo. thereafter</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            changeHandler={handleChange}
            error={errors.firstName}
          />
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            changeHandler={handleChange}
            error={errors.lastName}
          />
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email Address"
            value={values.email}
            changeHandler={handleChange}
            error={errors.email}
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            changeHandler={handleChange}
            error={errors.password}
          />

          <button>CLAIM YOUR FREE TRIAL</button>
          <div className={styles.terms}>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </div>
        </form>

      </div>
    </Wrapper>
  )
}

export default Intro;