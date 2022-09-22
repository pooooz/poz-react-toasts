export interface IconProps {
  type: ToastType;
}

export interface CrossProps extends IconProps {
  destroy?: () => void;
}

export interface IconWrapProps {
  type: ToastType;
}
