import {
  ForwardedRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
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

  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const destroyRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!duration || !destroy) return;

    if (outAnimationName) {
      animationRef.current = setTimeout(() => {
        setAnimation(outAnimationName as OutAnimationName);
      }, duration - (animationTime || 1000));
    }

    destroyRef.current = setTimeout(() => {
      destroy();
    }, duration);

    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
      if (destroyRef.current !== null) {
        clearTimeout(destroyRef.current);
      }
    };
  }, [destroy, duration]);

  const deleteWithAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (destroyRef.current) {
      clearTimeout(destroyRef.current);
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
