<script lang="ts" setup>
import type { CollapseProps } from '~~/components/c-collapse.vue'
import { useFog } from '~~/hooks/useCanvasAnimation'
import { useScroll, useObserverAnimation } from '~~/hooks/useHooks'
import CCollapse from '~~/components/c-collapse.vue'
import rightArror from '~~/components/icon/rightArrow.vue'
import galaxy from '~~/components/icon/galaxy.vue'
import spaceRocket from '~~/components/icon/space-rocket.vue'
import astronaut from '~~/components/icon/astronaut.vue'

useHead({
  title: '首頁',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

type State = {
  isScroll: boolean
  works: any[]
  [key: string]: any
}

const State = ref<State>({
  isScroll: false,
  works: [
    { id: '1', backgroundImg: 'https://picsum.photos/id/237/200/300' },
    { id: '2', backgroundImg: 'https://picsum.photos/id/239/200/300' }
  ],
  fog: '',
  galaxy: ''
})

const collapseState: CollapseProps[] = [
  {
    Title: '網頁設計與軟體開發',
    SubTitle: [
      '需要形象網站或是高效的系統來增加公司競爭力嗎? 我們提供設計、開發、優化、維護等多元服務， 讓我們當您的最佳後盾',
      'Web design & system development'
    ],
    Content: {
      網站與系統客製化:
        '具吸引力且適應各種裝置的RWD網站可以幫助企業展示其品牌形象，吸引更多目標受眾。良好的系統也可以根據企業需求進行客製化設計，帶來更直觀的用戶體驗，減少使用者的學習成本，滿足業務流程和需求。',
      有效的數據管理:
        '為了使企業更好地蒐集和分析，我們提供數據管理服務，幫助您優化SEO、了解流量、用戶行為和市場趨勢，進而增加銷量。客製化系統也可以通過數據管理流程、訂單、客戶等，協助優化業務運作和省下更多人力資源。',
      安全性和可靠性:
        '我們重視安全性和可靠性，提供多種安全措施，例如:多重驗證、定期備份、加密和授權限制等，防止黑客攻擊和資料泄露，並在大流量進入時進行負載平衡監控和性能優化，確保系統運行和穩定，並且我們持續更新安全和可靠性設計，以因應不斷變化的風險和挑戰。'
    },
    Icon: astronaut,
    Gif: {
      link: '/gif/84098-web-design-icon-lottie-animation.gif',
      describe: 'aniamtion from https://lottiefiles.com/'
    },
    Grid: 'grid-cols-3 gap-10'
  },
  {
    Title: '數據收集分析與機器人代操',
    SubTitle: [
      '想從海量的數據中找出那潛藏的商機嗎? 想要機器人自動幫您完成不可能的任務嗎? 沒問題!讓我們來幫您分憂解勞吧!',
      'Data analysis & robotic automation'
    ],
    Content: {
      機器人代操:
        '機器人可以幫助企業自動化營銷、客服服務等。代替企業在需要的時候進行自動化操作，從而提高效率和生產力。常見如:自動回覆機器人、郵件排程發送、自動檢測、自動推薦商品或服務、自動化數據分類篩選等等。',
      數據收集和分析:
        '數據是網絡營銷和企業管理的核心，企業透過收集、整理和分析數據得以了解其用戶、市場和競爭對手，可以藉此制定更好的商業策略，提高市場佔有率，同時還可以優化行銷和銷售流程，提高商品的銷售效率和利潤。'
    },
    Icon: spaceRocket,
    Gif: {
      link: '/gif/84100-maintenance-icon-lottie-animation.gif',
      describe: 'aniamtion from https://lottiefiles.com/'
    },
    Grid: 'grid-cols-2 gap-20'
  },
  {
    Title: '企業數位化諮詢與協助',
    SubTitle: [
      '想透過數位化擁有更多元的發展機會?我們提供數位化的核心技術和服務，讓您輕鬆掌握，從而實現企業的全面轉型與發展',
      'Digital transformation for businesses'
    ],
    Content: {
      數位轉型規劃:
        '會針對企業現況進行評估與分析，進而提出數位轉型的整體規劃，協助企業建立完整的數位化架構，並整合企業內部和外部的資源，提升整體效能與生產力。',
      資訊安全管理:
        '我們能為企業提供完善的資訊安全管理方案，透過系統安全措施，保障企業資料安全，避免資料泄漏與損失。',
      系統應用開發:
        '我們提供客製化的系統開發，能夠完整呈現企業形象和風格，並根據企業需求進行客製化設計，幫助企業更好地滿足業務流程和需求，進一步提升企業效率與成本控制。',
      數據分析與應用:
        '提供數據分析和應用服務，能夠幫助企業更好地了解其流量、用戶行為和市場趨勢，進而優化業務流程、提高客戶滿意度和增加營收。'
    },
    Icon: galaxy,
    Gif: {
      link: '/gif/84101-task-completion-icon-lottie-animation.gif',
      describe: 'aniamtion from https://lottiefiles.com/'
    },
    Grid: 'grid-cols-2 gap-20'
  }
]

const title = ref<HTMLElement>()

const eventHandler = {
  sliderInit: 0,

  sliderHandler(type: string) {
    const els = [...(document.querySelector('#slider').children as HTMLCollectionOf<HTMLElement>)]

    if (type === 'left' && this.sliderInit < 0) {
      this.sliderInit++
    }

    if (
      type === 'right' &&
      Math.abs(this.sliderInit) < Math.floor(Math.abs(els.length / this.sliderInit))
    ) {
      this.sliderInit--
    }

    els.forEach((el, i) => {
      el.style.transform = `translateX(${(i + this.sliderInit) * 100}%)`
    })
  },

  scrollHandler: () => {
    if (!document.getElementById('hero')) return
    State.value.isScroll =
      window.scrollY > document.getElementById('hero')?.clientHeight ? true : false
  }
}

onMounted(() => {
  // remove landing animation
  if (!document.getElementById('landing')) return
  setTimeout(() => {
    document.getElementById('landing').remove()
  }, 2000)

  // create canvas
  State.value.fog = useFog('fog')
  State.value.fog.resize()
  // State.value.galaxy = useGalaxy('galaxy', '#galaxy-container')

  useScroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  window.addEventListener('scroll', eventHandler.scrollHandler)
  useObserverAnimation('.fade-in', 'active')
})

onBeforeUnmount(() => {
  //@ts-ignore-next-line
  if (State.value.fog) State.value.fog.destroy()
  if (State.value.galaxy) State.value.galaxy()
  window.removeEventListener('scroll', eventHandler.scrollHandler)
})
</script>

<template>
  <!-- landing start-->
  <div
    class="fixed top-0 left-0 z-50 h-screen w-full animate-[land_.5s_forwards_1.5s_ease-in] bg-[#100F42]"
    id="landing"
  >
    <svg
      width="152"
      height="134"
      viewBox="0 0 152 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="ufo-group absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <path
        class="ufo"
        d="M22.1696 69.7976C21.9874 70.1406 21.8195 70.4953 21.6673 70.8612C19.0501 77.1518 22.028 84.3732 28.3187 86.9904C32.462 88.7143 37.0091 88.0109 40.3784 85.5323"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="34"
        stroke-dashoffset="34"
      />
      <path
        class="ufo"
        d="M52.1875 92.4673C52.0052 92.8103 51.8374 93.165 51.6851 93.5308C49.0679 99.8215 52.0458 107.043 58.3365 109.66C64.6272 112.277 71.8485 109.299 74.4658 103.009C74.618 102.643 74.7513 102.274 74.8661 101.903"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="42"
        stroke-dashoffset="42"
      />
      <path
        class="ufo"
        d="M109.535 107.419C106.918 113.71 99.6966 116.688 93.4059 114.071C89.5352 112.46 86.9187 109.107 86.0882 105.299"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="42"
        stroke-dashoffset="42"
      />
      <path
        class="ufo"
        d="M113.802 63.5198C128.218 74.8133 135.725 87.2939 131.944 96.3813C126.086 110.46 95.3537 111.063 63.3011 97.7277C31.2486 84.3922 10.0134 62.1681 15.8711 48.089C19.5361 39.28 32.9387 35.7466 50.3098 37.6019"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="226"
        stroke-dashoffset="226"
      />
      <path
        class="ufo"
        d="M58.4665 12.9994C60.7706 12.0493 66.004 14.9775 67.0104 18.4625C68.0561 22.0839 67.1591 25.7518 66.4053 26.0342M66.4053 26.0342C57.2833 29.3281 49.9914 36.4282 46.3273 45.2351C39.5972 61.4111 54.7957 71.0312 70.9718 77.7612C87.1479 84.4913 104.685 88.4909 111.415 72.3148C115.901 61.5308 114.363 48.3222 107.519 38.8576M66.4053 26.0342C74.0382 23.278 82.9525 23.1868 92.095 26.9906C98.7846 29.7738 103.114 33.1048 107.519 38.8576M122.469 39.6278C122.469 39.6278 118.864 35.984 115.869 35.6094C112.397 35.175 109.785 36.1912 107.519 38.8576"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="239"
        stroke-dashoffset="239"
      />
      <circle
        class="ufo"
        cx="56.1626"
        cy="13.9494"
        r="2.93733"
        transform="rotate(22.5899 56.1626 13.9494)"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="18"
        stroke-dashoffset="18"
      />
      <circle
        class="ufo"
        cx="123.871"
        cy="40.8466"
        r="2.93733"
        transform="rotate(22.5899 123.871 40.8466)"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="18"
        stroke-dashoffset="18"
      />
      <path
        class="ufo"
        d="M54.0196 43.1595C58.495 34.6028 65.8409 31.9 72.0803 30.0801C76.2213 28.8722 78.2096 29.2538 79.0372 30.8557C79.8648 32.4576 78.1525 34.2788 75.5571 34.9956C73.1473 35.6612 71.4155 36.0432 67.1632 38.0846C62.9108 40.126 49.4025 51.9874 54.0196 43.1595Z"
        stroke="#F0FDFF"
        stroke-width="3"
        stroke-dasharray="65"
        stroke-dashoffset="65"
      />
      <path
        class="ufo"
        d="M53.4998 54.5C53.4998 56.5295 52.2753 57.5 51.4998 57.5C50.7242 57.5 49.4998 56.5295 49.4998 54.5C49.4998 52.4705 50.7242 51.5 51.4998 51.5C52.2753 51.5 53.4998 52.4705 53.4998 54.5Z"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="16"
        stroke-dashoffset="16"
      />
    </svg>
  </div>
  <!-- landing end -->
  <header
    id="hero"
    class="h-[calc(100vh-2px)]"
    :class="State.isScroll ? 'relative' : 'sticky top-0 left-0'"
  >
    <div class="absolute top-0 left-0 z-0 h-[calc(100vh-10px)] w-full" id="fog"></div>
    <c-banner></c-banner>

    <div
      class="absolute top-1/2 left-1/2 z-10 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
    >
      <h2 ref="title" class="mt-[60px] animate-[glow-white_2.5s_infinite_3s_ease-in] tracking-wide">
        <!-- Full -->
        <span class="block font-zenmaru text-[70px] font-[500] sm:text-[20px]"
          >Full Service for Impact Brands.</span
        >
      </h2>

      <c-button
        type="button"
        content="Explore"
        to="#promote"
        tailwind="relative mt-[10px] text-[20px] font-zenmaru"
        :icon="rightArror"
        :icon-style="{ height: '24px' }"
      ></c-button>
    </div>
  </header>

  <section
    class="relative z-40 bg-gradient-to-b from-[#100f42] via-[#0090a3] to-[#100f42] pt-[100px] sm:pt-0"
    id="galaxy-container"
  >
    <c-crystal />

    <!-- Promote Text -->
    <article
      id="promote"
      class="flex h-[720px] w-full items-center justify-center px-20 sm:h-fit sm:px-5"
    >
      <div class="fade-in flex gap-10 sm:pt-[100px]">
        <div class="w-1/2 sm:hidden">
          <img class="w-full" src="@/assets/planteGroup.png" alt="" />
        </div>
        <div class="w-1/2 self-center px-10 sm:w-full">
          <h2 class="font-zenmaru text-4xl sm:text-lg">CRYSTAL BIT</h2>
          <h2 class="mt-5 text-xl leading-8 sm:text-sm">
            我們對未知領域的挑戰抱有期待，且不斷關注科技與趨勢，我們相信，一個具有識別度且高效的網站和系統不僅需要專業的技術支持，還需要深入理解使用者的需求和感受，因此，我們始終將客戶的網站和系統視為自己的作品，盡心投入，精益求精。
          </h2>
        </div>
      </div>
    </article>

    <!-- Service  -->
    <article class="flex min-h-screen w-full flex-col justify-center pt-[80px]">
      <div class="fade-in sm:itesm-center flex w-full flex-col gap-10 px-10">
        <div class="mb-[40px] px-[100px] sm:mb-0 sm:px-0 sm:text-center">
          <h2 class="font-zenmaru text-6xl tracking-wide sm:text-lg" style="font-weight: 300">
            SERVICE
          </h2>
          <h2 class="mt-2 text-6xl tracking-wide sm:text-lg" style="font-weight: 300">服務內容</h2>
        </div>

        <c-collapse
          v-for="obj in collapseState"
          :Title="obj.Title"
          :SubTitle="obj.SubTitle"
          :Content="obj.Content"
          :Icon="obj.Icon"
          :Gif="obj.Gif"
          :Grid="obj.Grid"
        >
        </c-collapse>
      </div>
    </article>
  </section>
</template>

<style scoped>
.fade-in {
  filter: blur(12px);
  opacity: 0;
  transition: all 0.5s ease-in;
}

.text-stroke {
  position: absolute;
  left: 150px;
  top: -82px;
  /* color: white; */
  -webkit-text-fill-color: rgb(250, 204, 21);
  font-size: 100px;
  /* -webkit-text-stroke: 2px white; */
}

.fade-in.active {
  filter: blur(0);
  opacity: 1;
}

.ufo {
  animation: ufo 1s ease-in 0.2s forwards;
}

.ufo-group {
  animation: fly 0.5s ease-in 1.2s forwards;
}

@keyframes ufo {
  10% {
    opacity: 0.5;
  }

  50% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes fly {
  to {
    translate: 100vw;
  }
}

.hero {
  filter: blur(12px);
  opacity: 0;
  /* animation: tracking-in-expand 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 2s forwards; */
  animation: text-flicker-in-glow 0.5s 2s linear both;
}

@keyframes heroContext {
  to {
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    filter: blur(0);
    letter-spacing: 0em;
    opacity: 1;
  }
}

@keyframes text-flicker-in-glow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    filter: blur(10px);
    opacity: 1;

    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    filter: blur(8px);
    opacity: 1;

    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    filter: blur(6px);

    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    filter: blur(4px);
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    filter: blur(2px);
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    filter: blur(2px);

    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35),
      0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35),
      0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    filter: blur(10px);

    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
      0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    filter: blur(6px);

    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4),
      0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    filter: blur(12px);

    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45),
      0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes lighting {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  35% {
    opacity: 1;
  }

  36% {
    opacity: 0;
  }

  35% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
