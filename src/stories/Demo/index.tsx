import React, { ChangeEvent, FormEvent, useState } from 'react';

import { ToastManager } from 'services/ToastService';
import { ToastContainer } from 'containers/ToastContainer';
import { inAnimations, outAnimations } from 'helpers/animations';
import { useToast } from 'hooks/index';

import { Form } from './styled';

export const Demo = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState('');
  const [spaces, setSpaces] = useState('');
  const [animationTime, setAnimationTime] = useState('');

  const [type, setType] = useState<ToastType>('info');
  const [position, setPosition] = useState<ToastListPosition>('bottomLeft');
  const [inAnimation, setInAnimation] = useState<InAnimationName | undefined>(
    undefined
  );
  const [outAnimation, setOutAnimation] = useState<
    OutAnimationName | undefined
  >(undefined);

  const { showInfoToast, showErrorToast, showSuccessToast, showWarningToast } =
    useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      heading,
      message,
      duration: Number(duration),
      inAnimationName: inAnimation,
      outAnimationName: outAnimation,
      animationTime: Number(animationTime),
      spaces,
    };

    switch (type) {
      case 'info':
        showInfoToast(options);
        break;
      case 'warning':
        showWarningToast(options);
        break;
      case 'success':
        showSuccessToast(options);
        break;
      case 'error':
        showErrorToast(options);
        break;
    }
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
    ToastManager.setPosition(event.target.value as ToastListPosition);
    setPosition(event.target.value as ToastListPosition);
  };

  const handleRadioInAnimationChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInAnimation(event.target.value as InAnimationName);
  };

  const handleRadioOutAnimationChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setOutAnimation(event.target.value as OutAnimationName);
  };

  const handleSpaces = (event: ChangeEvent<HTMLInputElement>) => {
    setSpaces(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
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

      <fieldset>
        <legend>In animation</legend>
        <label>
          <input
            type="radio"
            name="inAnimation"
            value={undefined}
            checked={!inAnimation}
            onChange={handleRadioInAnimationChange}
          />
          None
        </label>
        {Object.keys(inAnimations).map((animationName) => (
          <label key={animationName}>
            <input
              type="radio"
              name="inAnimation"
              value={animationName}
              checked={inAnimation === animationName}
              onChange={handleRadioInAnimationChange}
            />
            {animationName
              .split('-')
              .map((word, idx) =>
                idx === 0
                  ? word[0].toUpperCase() + word.toLowerCase().slice(1)
                  : word.toLowerCase()
              )
              .join(' ')}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Out animation</legend>
        <label>
          <input
            type="radio"
            name="outAnimation"
            value={undefined}
            checked={!outAnimation}
            onChange={handleRadioOutAnimationChange}
          />
          None
        </label>
        {Object.keys(outAnimations).map((animationName) => (
          <label key={animationName}>
            <input
              type="radio"
              name="outAnimation"
              value={animationName}
              checked={outAnimation === animationName}
              onChange={handleRadioOutAnimationChange}
            />
            {animationName
              .split('-')
              .map((word, idx) =>
                idx === 0
                  ? word[0].toUpperCase() + word.toLowerCase().slice(1)
                  : word.toLowerCase()
              )
              .join(' ')}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Animation Time</legend>
        <input
          value={animationTime}
          onChange={handleInputChange(setAnimationTime)}
          type="number"
          step={1000}
        />
      </fieldset>
      <fieldset>
        <legend>Spaces</legend>
        <input value={spaces} onChange={handleSpaces} />
      </fieldset>
      <button type="submit">Click me</button>
    </Form>
  );
};
