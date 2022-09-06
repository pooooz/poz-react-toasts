export {};

declare global {
  type ToastType = 'info' | 'warning' | 'error' | 'success';

  export enum ToastListPosition {
    topLeft = 'topLeft',
    topRight = 'topRight',
    bottomLeft = 'bottomLeft',
    bottomRight = 'bottomRight',
  }
}
