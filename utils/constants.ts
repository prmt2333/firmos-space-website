import type { Section, AnimationConfig } from '~/types';

// 섹션 정보
export const SECTIONS: Section[] = [
  { title: "우주의 시작", subtitle: "무한한 가능성을 향해", range: [0, 5] },
  { title: "블랙홀의 심연", subtitle: "더 깊은 곳으로 빨려들어가다", range: [6, 10] }
];

// 애니메이션 설정
export const ANIMATION_CONFIG: AnimationConfig = {
  maxScale: 3, // 최대 3배 확대
  maxOpacity: 0.4, // 투명도 감소
  duration: 0.8, // 애니메이션 지속시간
  ease: "power2.out"
};

// 휠 관련 상수
export const WHEEL_CONFIG = {
  MAX_COUNT: 10, // 최대 휠 카운트
  THROTTLE_DELAY: 200, // 휠 throttle 지연시간 (ms)
  PRODUCT_DELAY: 800, // 상품 등장 지연시간 (ms)
  PRODUCT_DURATION: 4000 // 상품 표시 시간 (ms)
};

// 배경 애니메이션 설정
export const BACKGROUND_CONFIG = {
  CONVERGENCE_FACTOR: 0.1, // 중앙 수렴 효과
  TEXT_OPACITY_FACTOR: 0.2, // 텍스트 투명도 감소율
  PRODUCT_SCALE: 0.5, // 상품 등장 시 배경 축소율
  BRIGHTNESS_FACTOR: 0.3 // 상품 등장 시 밝기
}; 