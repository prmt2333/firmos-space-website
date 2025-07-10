import { SECTIONS } from '~/utils/constants';
import type { Section } from '~/types';

export const useTextManager = () => {
  // 현재 휠 카운트에 따라 섹션 계산
  const getCurrentSection = (wheelCount: number): Section => {
    return SECTIONS.find(section => 
      wheelCount >= section.range[0] && wheelCount <= section.range[1]
    ) || SECTIONS[0];
  };

  // 진행률 계산 (0 ~ 1)
  const getProgressPercentage = (wheelCount: number): number => {
    return (wheelCount / 10) * 100;
  };

  // 진행률 텍스트 생성
  const getProgressText = (wheelCount: number): string => {
    return `더 깊이 빨려들어가는 중... ${wheelCount}/10`;
  };

  // 섹션 변경 감지
  const hasSectioinChanged = (previousCount: number, currentCount: number): boolean => {
    const prevSection = getCurrentSection(previousCount);
    const currentSection = getCurrentSection(currentCount);
    return prevSection.title !== currentSection.title;
  };

  return {
    getCurrentSection,
    getProgressPercentage,
    getProgressText,
    hasSectioinChanged
  };
}; 