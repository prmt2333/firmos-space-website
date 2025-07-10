import { ANIMATION_CONFIG, BACKGROUND_CONFIG } from '~/utils/constants';

export const useScrollAnimation = () => {
  const { $gsap } = useNuxtApp();

  // 스크롤 진행도에 따른 배경 애니메이션
  const updateScrollEffect = (wheelCount: number) => {
    const heroSection = document.querySelector('.hero-section');
    const contentSection = document.querySelector('.hero-section .content');
    const mainContainer = document.querySelector('.main-container');
    
    if (!heroSection || !contentSection || !mainContainer) return;

    // 스크롤 진행도 계산 (0 ~ 1)
    const scrollProgress = wheelCount / 10;
    
    // 배경 이미지 확대 계산
    const backgroundScale = 1 + (scrollProgress * (ANIMATION_CONFIG.maxScale - 1));
    
    // 투명도 계산
    const opacity = 1 - (scrollProgress * ANIMATION_CONFIG.maxOpacity);
    
    // 중앙 수렴 효과
    const convergence = scrollProgress * BACKGROUND_CONFIG.CONVERGENCE_FACTOR;

    // 배경 이미지 레이어 애니메이션 적용 (main-container::before)
    applyBackgroundImageAnimation(mainContainer as HTMLElement, backgroundScale);

    // 히어로 섹션 애니메이션 적용
    applyBackgroundAnimation(heroSection as HTMLElement, {
      opacity,
      convergence,
      backgroundScale
    });

    // 텍스트 애니메이션 적용
    applyTextAnimation(contentSection as HTMLElement, scrollProgress);
  };

  // 배경 이미지 레이어 애니메이션 적용 (main-container::before)
  const applyBackgroundImageAnimation = (mainContainer: HTMLElement, backgroundScale: number) => {
    // CSS 변수로 배경 이미지 scale 전달
    mainContainer.style.setProperty('--background-scale', backgroundScale.toString());
    
    // 별 흔적 효과 강화 (확대될수록 흔적이 더 길어짐)
    const trailIntensity = Math.min(backgroundScale, 3);
    mainContainer.style.setProperty('--trail-intensity', trailIntensity.toString());
  };

  // 배경 애니메이션 적용
  const applyBackgroundAnimation = (
    heroSection: HTMLElement, 
    { opacity, convergence, backgroundScale }: {
      opacity: number;
      convergence: number;
      backgroundScale: number;
    }
  ) => {
    // 투명도와 밝기 조절
    $gsap.to(heroSection, {
      opacity: opacity,
      filter: `brightness(${1 - convergence})`,
      scale: backgroundScale, // 전체 배경을 확대/축소
      duration: ANIMATION_CONFIG.duration,
      ease: ANIMATION_CONFIG.ease
    });
  };

  // 텍스트 애니메이션 적용
  const applyTextAnimation = (contentSection: HTMLElement, scrollProgress: number) => {
    const textOpacity = 1 - (scrollProgress * BACKGROUND_CONFIG.TEXT_OPACITY_FACTOR);
    const backgroundScale = 1 + (scrollProgress * (ANIMATION_CONFIG.maxScale - 1));
    
    $gsap.set(contentSection, {
      scale: 1 / backgroundScale, // 배경 확대에 반비례하여 텍스트 크기 고정
      opacity: textOpacity
    });
  };

  // 상품 등장 시 배경 어둡게
  const dimBackground = () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    $gsap.to(heroSection, {
      opacity: 0.1,
      filter: `brightness(${BACKGROUND_CONFIG.BRIGHTNESS_FACTOR})`,
      scale: BACKGROUND_CONFIG.PRODUCT_SCALE, // 전체 배경 축소
      duration: 1.5,
      ease: "power3.out"
    });
  };

  // 초기 배경 설정
  const initializeBackground = () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    $gsap.fromTo(heroSection, 
      { opacity: 0, scale: 1 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }
    );
  };

  return {
    updateScrollEffect,
    dimBackground,
    initializeBackground
  };
}; 