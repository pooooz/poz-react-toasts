export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  type ToastListPosition =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
}
