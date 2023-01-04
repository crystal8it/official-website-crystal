<script lang="ts" setup>
function getOffset(el) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

const scrollAnimation = (els: NodeListOf<Element>) => {
  return () => {
    const h = document.documentElement.scrollTop + document.documentElement.clientHeight - 50

    els.forEach((el) => {
      const condition = getOffset(el).top - h < 0

      const stroke = el['dataset'].stroke
      el.setAttribute('stroke-dasharray', stroke)

      if (condition) {
        el['style'].transition = `all .8s ease-in ${el.classList[0] === 'draw_line' ? '.8s' : '0s'}`
        el.setAttribute('stroke-dashoffset', '0')
        el['style'].opacity = 1
      } else {
        el.setAttribute('stroke-dashoffset', stroke)
        el['style'].opacity = 0
        el['style'].transition = ''
      }
    })
  }
}

const animateHandler = (els: NodeListOf<Element>) => {
  window.addEventListener('scroll', scrollAnimation(els))
}

onMounted(() => {
  const StarsAndStarTrail = document.querySelectorAll('.animation-plane,.draw_line')

  if (!StarsAndStarTrail) return

  animateHandler(StarsAndStarTrail)
})
//@ts-ignore-next-line
onBeforeUnmount(() => window.removeEventListener('scroll', scrollAnimation))
</script>

<template>
  <svg
    class="absolute top-0 left-0 w-full"
    viewBox="0 0 1483 1703"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="draw_line 1"
      d="M1.35822 1C-16.6418 221 649.329 305.305 733.358 405C842.958 535.034 505.706 627.887 323.658 682.5C253.825 703.667 101.958 770.8 53.1581 870C-7.84192 994 112.658 1112 280.658 1176C448.658 1240 673.673 1271.12 923.658 1239C960.825 1234.17 1048.16 1222.2 1100.16 1205.8"
      stroke="url(#paint0_linear_810_805)"
      stroke-width="2"
      stroke-linecap="round"
      data-stroke="3032"
    />
    <path
      class="draw_line 2"
      d="M395.706 1702C395.706 1702 -10.2942 1676 31.7058 1540C72.673 1407.34 718.658 1320 1099.66 1206C1161.32 1189 1301.66 1136.6 1369.66 1063C1454.66 971 1440.66 879 1359.66 801C1278.66 723 1116.66 669 1014.66 650C912.658 631 827.158 624.7 767.158 623.7C730.158 622.633 635.048 623.139 548.158 634C432.158 648.5 363.158 670.5 338.658 678"
      stroke="url(#paint1_linear_810_805)"
      stroke-width="2"
      stroke-linecap="round"
      data-stroke="3239"
    />
    <circle
      class="animation-plane"
      cx="1292.66"
      cy="398"
      r="190"
      fill="url(#paint2_radial_810_805)"
    />
    <g filter="url(#filter0_f_810_805)">
      <path
        class="animation-plane"
        d="M1299.98 502.326C1242.15 506.637 1191.78 463.253 1187.47 405.423C1183.15 347.594 1226.54 297.219 1284.37 292.907C1342.2 288.595 1392.57 331.98 1396.89 389.809C1401.2 447.639 1357.81 498.014 1299.98 502.326Z"
        fill="url(#paint3_radial_810_805)"
      />
      <path
        class="animation-plane"
        d="M1299.98 502.326C1242.15 506.637 1191.78 463.253 1187.47 405.423C1183.15 347.594 1226.54 297.219 1284.37 292.907C1342.2 288.595 1392.57 331.98 1396.89 389.809C1401.2 447.639 1357.81 498.014 1299.98 502.326Z"
        stroke="url(#paint4_radial_810_805)"
        stroke-opacity="0.7"
        stroke-width="13"
      />
    </g>
    <circle
      class="animation-plane"
      cx="283.658"
      cy="1396"
      r="213"
      fill="url(#paint5_radial_810_805)"
    />
    <g filter="url(#filter1_i_810_805)">
      <circle
        class="animation-plane"
        cx="283.906"
        cy="1395.82"
        r="94.8071"
        transform="rotate(85.7359 283.906 1395.82)"
        fill="url(#paint6_radial_810_805)"
      />
    </g>
    <circle
      class="animation-plane"
      cx="283.906"
      cy="1395.82"
      r="94.8071"
      transform="rotate(85.7359 283.906 1395.82)"
      stroke="url(#paint7_radial_810_805)"
      stroke-opacity="0.7"
      stroke-width="10.1128"
    />
    <circle
      class="animation-plane"
      cx="297.658"
      cy="251"
      r="243"
      fill="url(#paint8_radial_810_805)"
    />
    <g filter="url(#filter2_f_810_805)">
      <circle
        class="animation-plane"
        cx="298.066"
        cy="251.407"
        r="148.158"
        transform="rotate(108.435 298.066 251.407)"
        fill="url(#paint9_radial_810_805)"
      />
      <circle
        class="animation-plane"
        cx="298.066"
        cy="251.407"
        r="148.158"
        transform="rotate(108.435 298.066 251.407)"
        stroke="url(#paint10_radial_810_805)"
        stroke-opacity="0.7"
        stroke-width="20"
      />
      <circle
        class="animation-plane"
        cx="298.066"
        cy="251.407"
        r="148.158"
        transform="rotate(108.435 298.066 251.407)"
        stroke="url(#paint11_radial_810_805)"
        stroke-opacity="0.2"
        stroke-width="20"
      />
    </g>
    <circle class="animation-plane" cx="665.658" cy="624" r="13" fill="white" />
    <circle class="animation-plane" cx="123.658" cy="1301" r="13" fill="white" />
    <circle class="animation-plane" cx="1209.66" cy="1165" r="13" fill="white" />
    <circle class="animation-plane" cx="1315.66" cy="1430" r="13" fill="white" />
    <circle class="animation-plane" cx="110.757" cy="1028.5" r="13" fill="white" />
    <circle class="animation-plane" cx="888.656" cy="468.5" r="13" fill="white" />
    <circle class="animation-plane" cx="888.656" cy="468.5" r="13" fill="white" />
    <circle class="animation-plane" cx="52.6582" cy="506" r="13" fill="white" />
    <circle class="animation-plane" cx="1343.66" cy="708" r="13" fill="white" />
    <circle class="animation-plane" cx="595.658" cy="1328" r="13" fill="white" />
    <circle class="animation-plane" cx="475.659" cy="575.5" r="5" fill="white" />
    <circle class="animation-plane" cx="475.659" cy="575.5" r="5" fill="white" />
    <circle class="animation-plane" cx="400.658" cy="713" r="5" fill="white" />
    <circle class="animation-plane" cx="58.6582" cy="861" r="5" fill="white" />
    <circle class="animation-plane" cx="188.659" cy="1167.5" r="5" fill="white" />
    <circle class="animation-plane" cx="470.658" cy="1147" r="5" fill="white" />
    <circle class="animation-plane" cx="770.658" cy="300" r="5" fill="white" />
    <circle class="animation-plane" cx="1178.66" cy="221" r="5" fill="white" />
    <circle class="animation-plane" cx="1426.96" cy="929" r="5" fill="white" />
    <circle class="animation-plane" cx="1130.66" cy="645.5" r="5" fill="white" />
    <circle class="animation-plane" cx="927.958" cy="678" r="5" fill="white" />
    <circle class="animation-plane" cx="1348.66" cy="1037" r="5" fill="white" />
    <circle class="animation-plane" cx="1416.66" cy="1492" r="5" fill="white" />
    <circle class="animation-plane" cx="657.658" cy="1249.2" r="5" fill="white" />
    <circle class="animation-plane" cx="949.658" cy="1306" r="5" fill="white" />
    <circle class="animation-plane" cx="1451.06" cy="842" r="5" fill="white" />
    <circle class="animation-plane" cx="1330.66" cy="1160.4" r="5" fill="white" />
    <circle class="animation-plane" cx="55.6582" cy="1381" r="5" fill="white" />
    <circle class="animation-plane" cx="1141.66" cy="1381" r="5" fill="white" />
    <circle class="animation-plane" cx="1450.66" cy="1306" r="5" fill="white" />
    <circle class="animation-plane" cx="1460.66" cy="522" r="5" fill="white" />
    <circle class="animation-plane" cx="123.658" cy="557.399" r="5" fill="white" />
    <defs>
      <filter
        id="filter0_f_810_805"
        x="1179.67"
        y="285.111"
        width="225.01"
        height="225.01"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_810_805" />
      </filter>
      <filter
        id="filter1_i_810_805"
        x="165.214"
        y="1254.54"
        width="218.56"
        height="241.148"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-18.8236" dy="-46.1179" />
        <feGaussianBlur stdDeviation="20.706" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_810_805" />
      </filter>
      <filter
        id="filter2_f_810_805"
        x="139.013"
        y="92.3546"
        width="318.105"
        height="318.105"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.425742" result="effect1_foregroundBlur_810_805" />
      </filter>
      <linearGradient
        id="paint0_linear_810_805"
        x1="70.858"
        y1="-513.499"
        x2="70.858"
        y2="837.498"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.432292" stop-color="#100F42" />
        <stop offset="0.640625" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_810_805"
        x1="67.8584"
        y1="-1094.5"
        x2="67.8584"
        y2="1418.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.432292" stop-color="#100F42" />
        <stop offset="0.640625" stop-color="white" />
      </linearGradient>
      <radialGradient
        id="paint2_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1292.66 398) rotate(152.613) scale(186.955)"
      >
        <stop stop-color="#EFFFF7" />
        <stop offset="1" stop-color="#95CAB0" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1224.66 312) rotate(47.5553) scale(191.888 144.078)"
      >
        <stop stop-color="white" />
        <stop offset="0.473958" stop-color="#B2D299" />
        <stop offset="0.78125" stop-color="#648D79" />
        <stop offset="1" stop-color="#354368" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1226.66 336) rotate(54.1888) scale(194.833)"
      >
        <stop stop-color="white" />
        <stop offset="0.473958" stop-color="#7FCEFB" stop-opacity="0.31" />
        <stop offset="1" stop-color="#0B446D" stop-opacity="0.52" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(283.658 1396) rotate(77.4987) scale(143.075)"
      >
        <stop stop-color="#FFF6D6" />
        <stop offset="1" stop-color="#AFD3DB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(229.862 1349.57) rotate(41.7767) scale(157.769)"
      >
        <stop stop-color="#FFFEE9" />
        <stop offset="0.489583" stop-color="#C6BDAB" />
        <stop offset="1" stop-color="#186C87" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(192.307 1334.73) rotate(42.2536) scale(194.076)"
      >
        <stop stop-color="white" stop-opacity="0.58" />
        <stop offset="0.505208" stop-color="#CFB88B" stop-opacity="0.61" />
        <stop offset="1" stop-color="#7379AC" stop-opacity="0.6" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(297.658 251) rotate(146.176) scale(237.135)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(152.66 199.112) rotate(23.7543) scale(273.98 306.686)"
      >
        <stop stop-color="white" />
        <stop offset="0.46875" stop-color="#7DB0AD" />
        <stop offset="1" stop-color="#382C82" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(141.708 211.793) rotate(22.3051) scale(324.218 276.465)"
      >
        <stop stop-color="#FDFFFC" stop-opacity="0.63" />
        <stop offset="0.65737" stop-color="#986CBA" stop-opacity="0.558229" />
        <stop offset="1" stop-color="#27318B" stop-opacity="0.5" />
      </radialGradient>
      <radialGradient
        id="paint11_radial_810_805"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(190.607 183.3) rotate(36.0274) scale(240.865)"
      >
        <stop stop-color="#4EB6BD" />
        <stop offset="1" stop-color="#0F1E55" />
      </radialGradient>
    </defs>
  </svg>
</template>
