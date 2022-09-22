import { RefObject } from 'react';
import { nanoid } from 'nanoid';

import { ToastProps } from 'components/Toast/interfaces';

export interface ToastOptions extends ToastProps {
  id: string;
}

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

  public addToast(options: Omit<ToastProps, 'destroy'>) {
    const toastId = nanoid();
    const destroy = () => this.removeToast(toastId);

    const newToast = {
      id: toastId,
      destroy,
      ...options,
    };

    if (this.toasts.length >= 3) {
      this.toastQueue.push(newToast);
    } else {
      this.toasts = [...this.toasts, newToast];
    }

    this.containerRef?.current?.onToastChange(this.toasts);
  }

  public setPosition(position: ToastListPosition) {
    this.position = position;
    this.containerRef?.current?.onPositionChange(position);
  }

  public removeToast(toastId: string) {
    if (this.toasts.length >= 3) {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
      const nextToast = this.toastQueue.pop();

      if (nextToast) {
        this.toasts = [...this.toasts, nextToast];
      }
    } else {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    }

    this.containerRef?.current?.onToastChange(this.toasts);
  }
}

export const ToastManager = ToastService.getInstance();
