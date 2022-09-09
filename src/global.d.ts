import { ToastOptions } from 'core';
import { inAnimations, outAnimations } from 'components/Toast/animations';

export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  type ToastListPosition =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

  interface ToastRefActions {
    onToastChange: (toasts: ToastOptions[]) => void;
    onPositionChange: (position: ToastListPosition) => void;
  }

  type InAnimationName = keyof typeof inAnimations;
  type OutAnimationName = keyof typeof outAnimations;
}
