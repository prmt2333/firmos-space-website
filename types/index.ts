// 섹션 정보 타입
export interface Section {
  title: string;
  subtitle: string;
  range: [number, number];
}

// 애니메이션 설정 타입
export interface AnimationConfig {
  maxScale: number;
  maxOpacity: number;
  duration: number;
  ease: string;
}

// 휠 핸들러 상태 타입
export interface WheelState {
  wheelCount: number;
  isAnimating: boolean;
  productShowing: boolean;
  throttleTimer: NodeJS.Timeout | null;
}

// 배경 레이어 타입 (향후 레이어 시스템용)
export interface BackgroundLayer {
  id: string;
  imageUrl: string;
  blendMode: string;
  rotationSpeed: number;
  scaleSpeed: number;
} 