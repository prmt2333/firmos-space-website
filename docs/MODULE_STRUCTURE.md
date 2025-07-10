# 🔧 모듈화 구조 문서

## 📁 디렉토리 구조

```
├── types/
│   └── index.ts                    # 공통 타입 정의
├── utils/
│   └── constants.ts                # 상수 값들
├── composables/
│   ├── useScrollAnimation.ts       # 배경 애니메이션
│   ├── useWheelHandler.ts          # 휠 이벤트 처리
│   ├── useTextManager.ts           # 텍스트 관리
│   ├── useProductDisplay.ts        # 상품 표시
│   └── useMainPage.ts              # 메인 통합
├── components/
│   ├── HeroSection.vue             # 메인 섹션
│   └── FinalProduct.vue            # 상품 컴포넌트
├── pages/
│   ├── index.vue                   # 메인 페이지
│   └── products.vue                # 상품 페이지
└── assets/
    └── styles/main.scss            # 스타일시트
```

## 🎯 모듈별 역할

### **1. Types (`types/index.ts`)**
- 모든 타입 정의 중앙 관리
- `Section`, `AnimationConfig`, `WheelState` 등

### **2. Constants (`utils/constants.ts`)**
- 설정값들 중앙 관리
- 섹션 정보, 애니메이션 설정, 휠 설정 등

### **3. Scroll Animation (`composables/useScrollAnimation.ts`)**
- 배경 확대/축소 애니메이션
- 텍스트 투명도 조절
- 상품 등장 시 배경 어둡게

### **4. Wheel Handler (`composables/useWheelHandler.ts`)**
- 휠 이벤트 상태 관리
- 카운트 조정 및 범위 제한
- throttle 처리

### **5. Text Manager (`composables/useTextManager.ts`)**
- 섹션별 텍스트 관리
- 진행률 계산
- 섹션 변경 감지

### **6. Product Display (`composables/useProductDisplay.ts`)**
- 상품 등장 로직
- 페이지 전환 처리

### **7. Main Page (`composables/useMainPage.ts`)**
- 모든 composables 통합
- 메인 페이지 로직 통합

## 🔄 데이터 플로우

```
User Wheel Event
       ↓
useMainPage.handleWheel()
       ↓
useWheelHandler (상태 관리)
       ↓
useScrollAnimation (배경 애니메이션)
       ↓
useTextManager (텍스트 업데이트)
       ↓
useProductDisplay (상품 표시)
```

## ✅ 모듈화 장점

### **1. 독립성**
- 각 모듈이 독립적으로 동작
- 하나의 오류가 전체에 영향 없음

### **2. 재사용성**
- 다른 페이지에서도 활용 가능
- 컴포넌트별 독립 테스트 가능

### **3. 유지보수성**
- 기능별 수정 시 해당 모듈만 변경
- 코드 가독성 향상

### **4. 확장성**
- 새 기능 추가 시 새 composable 생성
- 기존 코드 영향 최소화

## 🚀 향후 확장 계획

### **1. 레이어 시스템 (`composables/useLayerSystem.ts`)**
```typescript
export const useLayerSystem = () => {
  // 다중 레이어 배경 관리
  // 레이어별 회전 속도
  // blend-mode 적용
};
```

### **2. 사운드 시스템 (`composables/useSoundEffect.ts`)**
```typescript
export const useSoundEffect = () => {
  // 휠 스크롤 사운드
  // 배경 음악 관리
  // 상품 등장 효과음
};
```

### **3. 모바일 대응 (`composables/useMobileHandler.ts`)**
```typescript
export const useMobileHandler = () => {
  // 터치 스크롤 처리
  // 모바일 애니메이션 최적화
  // 디바이스별 설정
};
```

## 📝 사용 예시

```vue
<script setup>
// 간단한 사용법
const mainPage = useMainPage();

// 개별 모듈 사용법
const scrollAnimation = useScrollAnimation();
const wheelHandler = useWheelHandler();
</script>
``` 