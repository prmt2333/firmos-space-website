import { WHEEL_CONFIG } from '~/utils/constants';

export const useProductDisplay = () => {
  // 상품 표시 처리
  const showProduct = (finalProductRef: any, onDimBackground: () => void) => {
    // 배경 어둡게 만들기
    onDimBackground();
    
    // 상품 등장 애니메이션 실행
    setTimeout(() => {
      if (finalProductRef.value) {
        finalProductRef.value.showProduct();
      }
    }, WHEEL_CONFIG.PRODUCT_DELAY);
  };

  // 페이지 전환 처리
  const navigateToProducts = () => {
    // 상품 페이지로 이동
    navigateTo('/products');
  };

  return {
    showProduct,
    navigateToProducts
  };
}; 