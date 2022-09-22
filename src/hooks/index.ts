import {
  ForwardedRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { ToastManager } from 'services/ToastService';
import { ToastOptions } from 'services/ToastService/interfaces';
import { ToastProps } from 'components/Toast/interfaces';

import { useAnimationParams } from './interfaces';

export const useToastAnimation = ({
  inAnimationName,
  outAnimationName,
  animationTime,
  destroy,
  duration,
}: useAnimationParams) => {
  const [animation, setAnimation] = useState<
    InAnimationName | OutAnimationName | null
  >(inAnimationName || null);

  let animationTimer: NodeJS.Timer;
  let destroyTimer: NodeJS.Timer;

  useEffect(() => {
    if (!duration || !destroy) return;

    if (outAnimationName) {
      animationTimer = setTimeout(() => {
        setAnimation(outAnimationName as OutAnimationName);
      }, duration - (animationTime || 1000));
    }

    destroyTimer = setTimeout(() => {
      destroy();
    }, duration);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(destroyTimer);
    };
  }, [destroy, duration]);

  const deleteWithAnimation = () => {
    if (destroyTimer) {
      clearTimeout(destroyTimer);
    }
    if (animationTimer) {
      clearTimeout(animationTimer);
    }

    if (!outAnimationName) {
      destroy();
    }
    setAnimation(outAnimationName as OutAnimationName);
    setTimeout(() => destroy(), (animationTime || 1000) - 100);
  };

  return {
    animation,
    deleteWithAnimation,
  };
};

export const useToastService = (ref: ForwardedRef<ToastRefActions>) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);
  const [position, setPosition] = useState<ToastListPosition>('bottomLeft');

  const handleToastAdd = useCallback((toast: ToastOptions) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  }, []);

  const handleToastRemove = useCallback((toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  const handlePosition = useCallback((newPosition: ToastListPosition) => {
    setPosition(newPosition);
  }, []);

  useImperativeHandle(ref, () => ({
    onToastAdd: handleToastAdd,
    onToastRemove: handleToastRemove,
    onPositionChange: handlePosition,
  }));

  return { toasts, position };
};

const showToast =
  (type: ToastType) => (options: Omit<ToastProps, 'destroy' | 'type'>) => {
    ToastManager.addToast({ ...options, type });
  };

export const useToast = () => {
  const showInfoToast = showToast('info');
  const showWarningToast = showToast('warning');
  const showSuccessToast = showToast('success');
  const showErrorToast = showToast('error');

  return { showInfoToast, showWarningToast, showSuccessToast, showErrorToast };
};
