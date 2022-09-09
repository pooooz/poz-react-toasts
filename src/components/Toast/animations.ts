import { keyframes } from 'styled-components';

export const inAnimations = {
  appearance: keyframes` 
    0% {
      opacity: 0;
    } 
    100% {
      opacity: 1;
    }
  `,
  'left-slide-in': keyframes`
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translate(0%);
    }
  `,
  'right-slide-in': keyframes`
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translate(0%);
    }
  `,
  'top-slide-in': keyframes`
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translate(0%);
    }
  `,
  'bottom-slide-in': keyframes`
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translate(0%);
    }
  `,
};

export const outAnimations = {
  disappearance: keyframes` 
    from {
      opacity: 1;
    } 
    to {
      opacity: 0;
    }
  `,
  'left-slide-out': keyframes`
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translate(-100%);
    }
  `,
  'right-slide-out': keyframes`
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translate(100%);
    }
  `,
  'top-slide-out': keyframes`
    0% {
      opacity: 1;
      transform: translate(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  `,
  'bottom-slide-out': keyframes`
    0% {
      opacity: 1;
      transform: translate(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  `,
};
