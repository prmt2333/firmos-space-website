<template>
  <div class="products-page">
    <div class="container">
      <h1>우리의 특별한 상품들</h1>
      <div class="products-grid">
        <div 
          v-for="(product, index) in products" 
          :key="index"
          class="product-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="product-image">
            <span>{{ product.name }}</span>
          </div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="price">{{ product.price }}</div>
        </div>
      </div>
      
      <div class="back-button">
        <button @click="goBack">메인으로 돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { $gsap } = useNuxtApp();

const products = [
  {
    name: "우주 탐험가 키트",
    description: "무한한 우주를 탐험할 수 있는 완벽한 도구 세트입니다.",
    price: "₩299,000"
  },
  {
    name: "별빛 컬렉션",
    description: "밤하늘의 별들을 담은 특별한 컬렉션입니다.",
    price: "₩199,000"
  },
  {
    name: "은하수 여행 패키지",
    description: "은하수를 따라 떠나는 특별한 여행 경험을 선사합니다.",
    price: "₩499,000"
  },
  {
    name: "블랙홀 시뮬레이터",
    description: "신비로운 블랙홀의 세계를 체험해보세요.",
    price: "₩399,000"
  },
  {
    name: "차원 이동 장치",
    description: "다른 차원으로의 이동을 가능하게 하는 혁신적인 기술입니다.",
    price: "₩699,000"
  },
  {
    name: "시공간 조작기",
    description: "시간과 공간을 자유롭게 조작할 수 있는 미래 기술입니다.",
    price: "₩999,000"
  }
];

const goBack = () => {
  router.push('/');
};

onMounted(() => {
  // 페이지 로드 애니메이션
  const cards = document.querySelectorAll('.product-card');
  
  $gsap.fromTo(cards, 
    { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }
  );
  
  // 제목 애니메이션
  $gsap.fromTo('h1', 
    { opacity: 0, y: -30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      ease: "power3.out"
    }
  );
});
</script>

<style scoped>
.back-button {
  text-align: center;
  margin-top: 3rem;
  
  button {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255,255,255,0.3);
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
  }
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #ffd700;
}

.product-card {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 