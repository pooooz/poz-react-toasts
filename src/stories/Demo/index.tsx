import React, { ChangeEvent, FormEvent, useState } from 'react';

import ToastManager from 'core';

import { Form } from './styled';

export const Demo = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState('');

  const [type, setType] = useState<ToastType>('info');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ToastManager.addToast({
      heading,
      message,
      duration: Number(duration),
      type,
    });
  };

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as ToastType);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Heading</legend>
        <input
          value={heading}
          onChange={handleInputChange(setHeading)}
          required
        />
      </fieldset>
      <fieldset>
        <legend>Message</legend>
        <input value={message} onChange={handleInputChange(setMessage)} />
      </fieldset>
      <fieldset>
        <legend>Duration</legend>
        <input
          value={duration}
          onChange={handleInputChange(setDuration)}
          type="number"
          step={1000}
        />
      </fieldset>
      <fieldset>
        <label>
          <input
            type="radio"
            name="type"
            value="info"
            checked={type === 'info'}
            onChange={handleRadioChange}
          />
          Info
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="warning"
            checked={type === 'warning'}
            onChange={handleRadioChange}
          />
          Warning
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="error"
            checked={type === 'error'}
            onChange={handleRadioChange}
          />
          Error
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="success"
            checked={type === 'success'}
            onChange={handleRadioChange}
          />
          Success
        </label>
      </fieldset>
      <button type="submit">Click me</button>
    </Form>
  );
};
