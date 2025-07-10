<template>
  <div class="main-container">
    <HeroSection 
      :title="currentSection.title"
      :subtitle="currentSection.subtitle"
      :z-index="100"
    />
    <div class="progress-indicator" v-if="wheelState.wheelCount < 10 && !wheelState.productShowing">
      <div class="progress-text">
        {{ progressText }}
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
    <FinalProduct ref="finalProductRef" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import FinalProduct from '~/components/FinalProduct.vue';

// 메인 composable 사용
const mainPage = useMainPage();
const finalProductRef = ref<InstanceType<typeof FinalProduct> | null>(null);

// 반응형 상태들
const { currentSection, progressPercentage, progressText, wheelState } = mainPage;

// 휠 이벤트 핸들러
const handleWheelEvent = (event: WheelEvent) => {
  mainPage.handleWheel(event, finalProductRef);
};

// 라이프사이클
onMounted(() => {
  window.addEventListener('wheel', handleWheelEvent);
  mainPage.initialize();
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheelEvent);
  mainPage.cleanup();
});
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.progress-indicator {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}

.progress-text {
  margin-bottom: 1rem;
  font-weight: bold;
  animation: pulse 2s infinite;
}

.progress-bar {
  width: 300px;
  height: 8px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style> 