import { RefObject } from 'react';
import { nanoid } from 'nanoid';

import { ToastProps } from 'components/Toast';

export interface ToastOptions extends ToastProps {
  id: string;
}

class ToastService {
  private static instance: ToastService;

  private toasts: Array<ToastOptions> = [];

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

    this.toasts = [...this.toasts, newToast];
    this.containerRef?.current?.onAdd(newToast);
  }

  public setPosition(position: ToastListPosition) {
    this.position = position;
    this.containerRef?.current?.onPositionChange(position);
  }

  public removeToast(toastId: string) {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    this.containerRef?.current?.onRemove(toastId);
  }
}

export const ToastManager = ToastService.getInstance();
