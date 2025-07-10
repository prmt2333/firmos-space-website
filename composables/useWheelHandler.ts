import { WHEEL_CONFIG } from '~/utils/constants';
import type { WheelState } from '~/types';

export const useWheelHandler = () => {
  // 휠 상태 관리
  const wheelState = reactive<WheelState>({
    wheelCount: 0,
    isAnimating: false,
    productShowing: false,
    throttleTimer: null
  });

  // 휠 카운트 조정
  const adjustWheelCount = (delta: number) => {
    if (delta > 0) {
      wheelState.wheelCount++;
    } else {
      wheelState.wheelCount--;
    }

    // 카운트 범위 제한
    if (wheelState.wheelCount < 0) {
      wheelState.wheelCount = 0;
    }
  };

  // 애니메이션 상태 확인
  const shouldIgnoreWheel = (): boolean => {
    return wheelState.productShowing || wheelState.isAnimating;
  };

  // 상품 등장 조건 확인
  const shouldShowProduct = (): boolean => {
    return wheelState.wheelCount >= WHEEL_CONFIG.MAX_COUNT && !wheelState.isAnimating;
  };

  // 애니메이션 초기화 조건 확인
  const shouldResetAnimation = (): boolean => {
    return wheelState.isAnimating && wheelState.wheelCount < WHEEL_CONFIG.MAX_COUNT;
  };

  // 상품 등장 상태로 전환
  const setProductState = () => {
    wheelState.isAnimating = true;
    wheelState.productShowing = true;
  };

  // 애니메이션 상태 초기화
  const resetAnimationState = () => {
    wheelState.isAnimating = false;
    wheelState.productShowing = false;
  };

  // throttle 타이머 설정
  const setThrottleTimer = () => {
    wheelState.throttleTimer = setTimeout(() => {
      wheelState.throttleTimer = null;
    }, WHEEL_CONFIG.THROTTLE_DELAY);
  };

  // throttle 상태 확인
  const isThrottled = (): boolean => {
    return wheelState.throttleTimer !== null;
  };

  // 타이머 정리
  const cleanup = () => {
    if (wheelState.throttleTimer) {
      clearTimeout(wheelState.throttleTimer);
      wheelState.throttleTimer = null;
    }
  };

  return {
    wheelState: readonly(wheelState),
    adjustWheelCount,
    shouldIgnoreWheel,
    shouldShowProduct,
    shouldResetAnimation,
    setProductState,
    resetAnimationState,
    setThrottleTimer,
    isThrottled,
    cleanup
  };
}; 