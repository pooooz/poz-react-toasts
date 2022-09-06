import React from 'react';
import ReactDOM from 'react-dom';
import { nanoid } from 'nanoid';

import { Toast, ToastProps } from 'components/Toast';
import { ToastList } from 'components/ToastList';

interface ToastOptions extends ToastProps {
  id: string;
}

class ToastManager {
  private static instance: ToastManager;

  private toasts: Array<ToastOptions> = [];

  private containerRef: HTMLDivElement | null = null;

  private rootElement: HTMLDivElement;

  private constructor() {
    this.rootElement = document.getElementById('root') as HTMLDivElement;
  }

  public static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }

    return ToastManager.instance;
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

    this.render();
  }

  public removeToast(toastId: string) {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);

    this.render();
  }

  private render() {
    const toastsList = this.toasts.map((toastOptions) => (
      <Toast key={toastOptions.id} {...toastOptions} />
    ));

    if (!this.containerRef) {
      this.containerRef = document.createElement('div');
      this.rootElement.insertAdjacentElement('beforeend', this.containerRef);
    }

    ReactDOM.render(
      <ToastList position="bottomLeft">{toastsList}</ToastList>,
      this.containerRef
    );
  }
}

export default ToastManager.getInstance();
