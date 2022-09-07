import { ToastOptions } from 'core';

export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  type ToastListPosition =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

  interface ToastRefActions {
    onAdd: (toast: ToastOptions) => void;
    onRemove: (toastId: string) => void;
    onPositionChange: (position: ToastListPosition) => void;
  }
}
