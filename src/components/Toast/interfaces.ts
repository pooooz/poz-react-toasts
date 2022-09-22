export interface ToastProps {
  type?: ToastType;
  heading: string;
  message?: string;
  duration?: number;
  inAnimationName?: InAnimationName;
  outAnimationName?: OutAnimationName;
  animationTime?: number;
  destroy: () => void;
  spaces?: string;
}

export interface ToastWrapProps {
  type: ToastType;
  animationName: InAnimationName | OutAnimationName | null;
  animationTime?: number;
  spaces?: string;
}

export interface ToastTypeProps {
  type: ToastType;
}

export interface TextWrapProps {
  position?: 'center' | 'normal';
}
