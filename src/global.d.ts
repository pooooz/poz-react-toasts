export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  enum ToastListPosition {
    topLeft = 'topLeft',
    topRight = 'topRight',
    bottomLeft = 'bottomLeft',
    bottomRight = 'bottomRight',
  }
}
