<template>
  <div class="hero-section" :style="{ zIndex: zIndex }">
    <div class="content">
      <h1 ref="titleRef">{{ title }}</h1>
      <p ref="subtitleRef">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  zIndex: number;
}

const props = defineProps<Props>();
const { $gsap } = useNuxtApp();

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);

// 텍스트 변경 시 부드러운 애니메이션
watch(() => props.title, (newTitle, oldTitle) => {
  if (newTitle !== oldTitle && titleRef.value) {
    $gsap.timeline()
      .to(titleRef.value, {
        opacity: 0.3,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(titleRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
  }
});

watch(() => props.subtitle, (newSubtitle, oldSubtitle) => {
  if (newSubtitle !== oldSubtitle && subtitleRef.value) {
    $gsap.timeline()
      .to(subtitleRef.value, {
        opacity: 0.3,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(subtitleRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
  }
});
</script>

<style scoped>
.content h1, .content p {
  transition: all 0.3s ease;
}
</style> 