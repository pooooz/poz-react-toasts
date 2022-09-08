import { useEffect, useState } from 'react';

interface useAnimationParams {
  inAnimationName?: InAnimationName;
  outAnimationName?: OutAnimationName;
  animationTime?: number;
  destroy: () => void;
  duration?: number;
}
export const useAnimation = ({
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

  const handleDelete = () => {
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
    handleDelete,
  };
};
