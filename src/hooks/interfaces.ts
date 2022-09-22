export interface useAnimationParams {
  inAnimationName?: InAnimationName;
  outAnimationName?: OutAnimationName;
  animationTime?: number;
  destroy: () => void;
  duration?: number;
}
