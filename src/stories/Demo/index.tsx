import React, { ChangeEvent, FormEvent, useState } from 'react';

import ToastManager from 'core';

import { Form } from './styled';

export const Demo = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState('');

  const [type, setType] = useState<ToastType>('info');
  const [position, setPosition] = useState<ToastListPosition>('topLeft');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ToastManager.addToast(
      {
        heading,
        message,
        duration: Number(duration),
        type,
      },
      position
    );
  };

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

  const handleRadioTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as ToastType);
  };

  const handleRadioPositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value as ToastListPosition);
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
        <legend>Type</legend>
        <label>
          <input
            type="radio"
            name="type"
            value="info"
            checked={type === 'info'}
            onChange={handleRadioTypeChange}
          />
          Info
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="warning"
            checked={type === 'warning'}
            onChange={handleRadioTypeChange}
          />
          Warning
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="error"
            checked={type === 'error'}
            onChange={handleRadioTypeChange}
          />
          Error
        </label>

        <label>
          <input
            type="radio"
            name="type"
            value="success"
            checked={type === 'success'}
            onChange={handleRadioTypeChange}
          />
          Success
        </label>
      </fieldset>
      <fieldset>
        <legend>Position</legend>
        <label>
          <input
            type="radio"
            name="position"
            value="topLeft"
            checked={position === 'topLeft'}
            onChange={handleRadioPositionChange}
          />
          Top left
        </label>

        <label>
          <input
            type="radio"
            name="position"
            value="topRight"
            checked={position === 'topRight'}
            onChange={handleRadioPositionChange}
          />
          Top right
        </label>

        <label>
          <input
            type="radio"
            name="position"
            value="bottomLeft"
            checked={position === 'bottomLeft'}
            onChange={handleRadioPositionChange}
          />
          Bottom left
        </label>

        <label>
          <input
            type="radio"
            name="position"
            value="bottomRight"
            checked={position === 'bottomRight'}
            onChange={handleRadioPositionChange}
          />
          Bottom right
        </label>
      </fieldset>
      <button type="submit">Click me</button>
    </Form>
  );
};
