export const useMainPage = () => {
  // 개별 composables import
  const wheelHandler = useWheelHandler();
  const scrollAnimation = useScrollAnimation();
  const textManager = useTextManager();
  const productDisplay = useProductDisplay();

  // 현재 섹션 계산
  const currentSection = computed(() => {
    return textManager.getCurrentSection(wheelHandler.wheelState.wheelCount);
  });

  // 진행률 계산
  const progressPercentage = computed(() => {
    return textManager.getProgressPercentage(wheelHandler.wheelState.wheelCount);
  });

  // 진행률 텍스트
  const progressText = computed(() => {
    return textManager.getProgressText(wheelHandler.wheelState.wheelCount);
  });

  // 휠 이벤트 핸들러
  const handleWheel = (event: WheelEvent, finalProductRef: any) => {
    // throttle 확인
    if (wheelHandler.isThrottled()) return;

    // 휠 이벤트 처리
    const result = processWheelEvent(event, finalProductRef);
    
    if (result.shouldSetThrottle) {
      wheelHandler.setThrottleTimer();
    }
  };

  // 휠 이벤트 처리 로직
  const processWheelEvent = (event: WheelEvent, finalProductRef: any) => {
    // 애니메이션 중이면 무시
    if (wheelHandler.shouldIgnoreWheel()) {
      return { shouldSetThrottle: false };
    }

    // 휠 카운트 조정
    wheelHandler.adjustWheelCount(event.deltaY);

    // 애니메이션 초기화 확인
    if (wheelHandler.shouldResetAnimation()) {
      wheelHandler.resetAnimationState();
      scrollAnimation.updateScrollEffect(wheelHandler.wheelState.wheelCount);
      return { shouldSetThrottle: true };
    }

    // 상품 등장 확인
    if (wheelHandler.shouldShowProduct()) {
      wheelHandler.setProductState();
      productDisplay.showProduct(finalProductRef, scrollAnimation.dimBackground);
      return { shouldSetThrottle: true };
    }

    // 일반 스크롤 애니메이션
    scrollAnimation.updateScrollEffect(wheelHandler.wheelState.wheelCount);
    return { shouldSetThrottle: true };
  };

  // 초기화
  const initialize = () => {
    scrollAnimation.initializeBackground();
  };

  // 정리
  const cleanup = () => {
    wheelHandler.cleanup();
  };

  return {
    // 상태
    currentSection,
    progressPercentage,
    progressText,
    wheelState: wheelHandler.wheelState,
    
    // 메서드
    handleWheel,
    initialize,
    cleanup
  };
}; 