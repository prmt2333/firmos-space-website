<template>
  <div ref="productRef" class="final-product">
    <div class="product-image">
      <span>우리 상품</span>
    </div>
    <div class="product-progress" ref="progressRef">
      <div class="progress-text">상품 페이지로 이동 중...</div>
      <div class="progress-bar">
        <div class="progress-fill" ref="progressFillRef"></div>
      </div>
    </div>
  </div>
  <div ref="transitionOverlayRef" class="transition-overlay"></div>
</template>

<script setup lang="ts">
const router = useRouter();
const { $gsap } = useNuxtApp();
const productRef = ref<HTMLElement | null>(null);
const progressRef = ref<HTMLElement | null>(null);
const progressFillRef = ref<HTMLElement | null>(null);
const transitionOverlayRef = ref<HTMLElement | null>(null);

const showProduct = () => {
  if (!productRef.value || !progressRef.value || !progressFillRef.value || !transitionOverlayRef.value) return;
  
  const tl = $gsap.timeline();
  
  // 상품 등장 애니메이션
  tl.to(productRef.value, { 
    opacity: 1, 
    scale: 1, 
    duration: 1.5,
    ease: "power3.out"
  })
  // 프로그레스바 표시
  .to(progressRef.value, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.5")
  // 프로그레스바 채우기 (4초 동안)
  .to(progressFillRef.value, {
    width: "100%",
    duration: 4,
    ease: "none"
  }, "-=0.5")
  // 검은색 오버레이 표시 (페이드아웃 전에)
  .to(transitionOverlayRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out"
  })
  // 전체 페이드아웃
  .to(productRef.value, { 
    opacity: 0, 
    duration: 1.5,
    ease: "power3.in"
  }, "-=0.3")
  .add(() => {
    router.push('/products');
  });
};

defineExpose({
  showProduct
});
</script>

<style scoped>
.product-progress {
  margin-top: 2rem;
  opacity: 0;
  text-align: center;
}

.progress-text {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
  font-weight: bold;
}

.progress-bar {
  width: 300px;
  height: 8px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.8);
}

.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
}
</style> 