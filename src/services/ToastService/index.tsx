import { RefObject } from 'react';
import { nanoid } from 'nanoid';

import { ToastProps } from 'components/Toast/interfaces';

import { ToastOptions } from './interfaces';

class ToastService {
  private static instance: ToastService;

  private toasts: Array<ToastOptions> = [];

  private toastQueue: Array<ToastOptions> = [];

  private position: ToastListPosition = 'bottomLeft';

  private containerRef: RefObject<ToastRefActions> | null = null;

  public static getInstance(): ToastService {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }

    return ToastService.instance;
  }

  public init(ref: RefObject<ToastRefActions>) {
    this.containerRef = ref;
  }

  private generateToast(options: Omit<ToastProps, 'destroy'>) {
    const toastId = nanoid();
    const destroy = () => this.removeToast(toastId);

    return {
      id: toastId,
      destroy,
      ...options,
    };
  }

  public addToast(options: Omit<ToastProps, 'destroy'>) {
    const newToast = this.generateToast(options);

    if (this.toasts.length >= 3) {
      this.toastQueue.push(newToast);
    } else {
      this.toasts = [...this.toasts, newToast];
      this.containerRef?.current?.onToastAdd(newToast);
    }
  }

  public setPosition(position: ToastListPosition) {
    this.position = position;
    this.containerRef?.current?.onPositionChange(position);
  }

  public removeToast(toastId: string) {
    if (this.toasts.length >= 3) {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
      const nextToast = this.toastQueue.shift();

      if (nextToast) {
        this.toasts = [...this.toasts, nextToast];
        this.containerRef?.current?.onToastAdd(nextToast);
      }
    } else {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    }

    this.containerRef?.current?.onToastRemove(toastId);
  }
}

export const ToastManager = ToastService.getInstance();
