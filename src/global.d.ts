import { ToastOptions } from 'services/ToastService';
import { inAnimations, outAnimations } from 'helpers/animations';

export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  type ToastListPosition =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

  interface ToastRefActions {
    onToastAdd: (toast: ToastOptions) => void;
    onToastRemove: (toastId: string) => void;
    onPositionChange: (position: ToastListPosition) => void;
  }

  type InAnimationName = keyof typeof inAnimations;
  type OutAnimationName = keyof typeof outAnimations;
}
