# 🚀 Firmos 우주 애니메이션 웹사이트

https://solk.com/ 스타일의 풀스크린 스크롤 애니메이션 웹사이트입니다.

## ✨ 주요 기능

- **우주 배경 애니메이션**: 휠을 돌릴수록 빨려들어가는 우주 효과
- **스크롤 카운터**: 6~7번의 휠 동작으로 상품 등장
- **GSAP 애니메이션**: 부드러운 페이드인/아웃 효과
- **반응형 디자인**: PC 우선, 모바일 대응 예정

## 🛠 기술 스택

- **Nuxt 3**: Vue.js 기반 프레임워크
- **GSAP**: 애니메이션 라이브러리
- **SCSS**: 스타일링
- **TypeScript**: 타입 안정성

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 정적 사이트 생성
npm run generate

# Vercel 배포
npm run build
```

## 🎯 사용 방법

1. 메인 페이지에서 마우스 휠을 6~7번 굴려보세요
2. 우주 배경이 점점 확대되며 신비로운 효과가 나타납니다
3. 마지막에 상품이 등장하고 자동으로 상품 페이지로 이동합니다

## 📁 프로젝트 구조

```
/pages
  ├── index.vue          # 메인 애니메이션 페이지
  └── products.vue       # 상품 목록 페이지
  
/components
  ├── HeroSection.vue    # 반복 섹션 컴포넌트
  └── FinalProduct.vue   # 최종 상품 등장 컴포넌트
  
/assets
  └── styles
      └── main.scss      # 메인 스타일 파일
      
/plugins
  └── gsap.ts           # GSAP 설정 플러그인
```

## 🎨 커스터마이징

- `assets/styles/main.scss`: 우주 배경 및 애니메이션 스타일 수정
- `pages/index.vue`: 섹션 타이틀과 휠 카운터 조정
- `components/FinalProduct.vue`: 상품 등장 애니메이션 수정

## 🚀 배포

Vercel을 이용한 정적 사이트 배포:

```bash
# 프로젝트 빌드
npm run generate

# Vercel CLI를 통한 배포
vercel deploy
```

## �� 라이선스

MIT License
