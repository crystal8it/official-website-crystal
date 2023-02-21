<script lang="ts" setup>
const clientStyle = ref()
const el = ref()

onMounted(() => {
  const el = document.querySelector('#animate-footer')
  if (!el) return
  clientStyle.value = { top: `-${el.clientHeight - 1}px` }

  window.addEventListener('resize', () => {
    clientStyle.value.top = `-${el.clientHeight - 1}px`
  })
})
</script>

<template>
  <svg
    id="animate-footer"
    :style="clientStyle"
    class="absolute left-0 -top-full z-40 w-full"
    viewBox="0 0 1513 315"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1263_3260)">
      <path
        d="M113.079 235.468C63.6315 235.468 13.7583 246.658 -0.0869141 248.017V315H1492.44C1492.44 269.561 1492.44 359.14 1492.44 247.916C1492.44 247.916 1391.78 243.169 1325.52 244.527C1296.01 245.133 1183.61 249.963 1146.53 251.208C1109.44 252.454 1036.26 240.727 996.206 240.727C953.681 240.727 873.088 254.247 805.34 256.87C748.601 259.068 747.981 250.869 664.91 254.266C623.374 255.965 586.783 259.022 512.612 256.87C438.441 254.719 442.397 258.116 415.696 258.116C375.83 258.116 365.143 250.727 302.462 248.717C253.014 247.132 250.542 250.076 217.907 250.076C185.272 250.076 154.614 235.468 113.079 235.468Z"
        fill="#203A68"
      />
      <path
        d="M181.174 271.017C128.244 268.05 55.34 268.735 -0.586243 271.017V318L1504.43 316.5V271.929C1482.46 271.929 1463.48 267.594 1414.55 267.594C1367.07 267.594 1334.34 272.938 1292.71 274.44C1216.81 277.178 1184.85 268.977 1067.01 275.809C986.67 280.466 949.74 269.58 843.301 272.842C790.975 274.446 743.433 281.514 660.542 279.46C577.651 277.406 570.66 283.339 482.776 282.198C394.892 281.057 377.915 276.722 319.991 276.722C262.067 276.721 250.414 274.897 181.174 271.017Z"
        fill="#102A57"
      />
      <g filter="url(#filter0_f_1263_3260)">
        <g filter="url(#filter1_i_1263_3260)">
          <path
            d="M1351.43 128.974L1383.09 186.421L1392.04 193.803L1393.3 180.023L1438.33 207.488L1450.16 221.977L1448.09 170.755L1427.77 105.645L1369.81 59.3919L1351.43 128.974Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter2_i_1263_3260)">
          <path
            d="M1512.65 162.57L1512.65 151.569L1508.39 171.561L1497.76 241.167L1491.78 288.514L1512.65 301.876L1512.65 288.514L1512.65 252.57L1512.65 232.069L1512.65 187.57L1512.65 162.57Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter3_i_1263_3260)">
          <path
            d="M1365.37 248.399L1320.4 261.459L1346.93 295.411L1405.49 314.864L1455.5 314.864L1469.5 314.864L1476.93 303.672L1365.37 248.399Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter4_i_1263_3260)">
          <path
            d="M1350.79 156.025L1290.84 162.043L1311.49 222.873L1454.15 314.026L1467.52 298.536L1472.78 292.448L1478.74 287.688L1486.15 276.958L1492.62 266.374L1421.08 209.161L1350.79 156.025Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter5_i_1263_3260)">
          <path
            d="M1446.45 122.654L1447.63 220.277L1446.28 245.405L1450.59 272.958L1452.49 285.1L1461.41 287.052L1472.75 290.539L1488.73 290.427L1493.47 290.539L1513.8 130.225L1488.91 84.9185L1446.45 122.654Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter6_i_1263_3260)">
          <path
            d="M1391.43 171.35L1391.43 235.274L1396.73 241.387L1422.45 273.555L1444.35 299.604L1457.1 313.5L1479.54 315.069L1498.54 315.069L1512.92 315.069L1512.92 300.569L1451.61 197.573L1391.43 171.35Z"
            fill="#04132D"
          />
        </g>
      </g>
      <g filter="url(#filter7_f_1263_3260)">
        <g filter="url(#filter8_i_1263_3260)">
          <path
            d="M90.9068 112.344L53.0717 177.774L1.31373 275.618L-1.58106 296.569L33.8057 312.873L73.4983 256.227L99.4513 216.711L153.218 154.612L157.065 87.0168L90.9068 112.344Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter9_i_1263_3260)">
          <path
            d="M161.262 279.768L126.529 264.515L97.4779 270.555L18.4325 298.799L23.0374 314L38.5374 314L71.5374 316L86.5374 316L96.9939 317.742L132.572 309.88L161.262 279.768Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter10_i_1263_3260)">
          <path
            d="M196.347 194.673L145.77 181.755L76.125 222.825L12.2066 266.789L16.7268 266.612L22.1622 277.23L25.9533 285.605L13.5671 301.535L19.2464 314.977L32.0509 314.005L41.7465 307.249L171.221 241.769L196.347 194.673Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter11_i_1263_3260)">
          <path
            d="M65.1443 135.918L40.7109 89.4945L-1.58109 129.069L-1.58103 311.069L0.388005 315L17.1437 312.384L42.26 255.029L65.1443 135.918Z"
            fill="#04132D"
          />
        </g>
        <g filter="url(#filter12_i_1263_3260)">
          <path
            d="M102.52 189.252L42.8708 192.213L-1.67641 240.569L-1.67641 265.569L-1.67641 310.569L2.03742 316L15.9438 310.569L87.2638 245.21L102.52 189.252Z"
            fill="#04132D"
          />
        </g>
      </g>
      <path
        d="M-2 318L1512.54 316.5C1512.54 306.904 1512.54 329.586 1512.54 316.5C1512.54 300.124 1512.54 312.319 1512.54 312.319C1512.54 312.319 1430.11 300.023 1243.72 305.843C1116.66 309.81 1058.24 300.537 889.895 303.316C807.134 304.682 731.938 310.702 600.834 308.953C469.729 307.203 449.435 315.259 319.423 308.953C189.411 302.647 134.262 312.611 63.3997 308.953C18.1804 306.618 -2 307.5 -2 307.5V318Z"
        fill="#04132D"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1263_3260"
        x="1289.89"
        y="58.4467"
        width="224.854"
        height="257.568"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.472695" result="effect1_foregroundBlur_1263_3260" />
      </filter>
      <filter
        id="filter1_i_1263_3260"
        x="1351.43"
        y="59.3921"
        width="102.513"
        height="167.312"
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
        <feOffset dx="3.78156" dy="4.72695" />
        <feGaussianBlur stdDeviation="4.25425" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter2_i_1263_3260"
        x="1491.78"
        y="151.569"
        width="20.8696"
        height="154.088"
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
        <feOffset dy="3.78156" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter3_i_1263_3260"
        x="1320.4"
        y="248.398"
        width="158.42"
        height="69.3015"
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
        <feOffset dx="1.89078" dy="2.83617" />
        <feGaussianBlur stdDeviation="2.83617" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter4_i_1263_3260"
        x="1290.84"
        y="156.025"
        width="207.457"
        height="160.837"
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
        <feOffset dx="5.67234" dy="2.83617" />
        <feGaussianBlur stdDeviation="5.19964" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter5_i_1263_3260"
        x="1446.28"
        y="84.9185"
        width="71.3066"
        height="210.348"
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
        <feOffset dx="3.78156" dy="4.72695" />
        <feGaussianBlur stdDeviation="3.30886" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter6_i_1263_3260"
        x="1391.43"
        y="171.35"
        width="125.27"
        height="147.501"
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
        <feOffset dx="3.78156" dy="3.78156" />
        <feGaussianBlur stdDeviation="2.83617" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter7_f_1263_3260"
        x="-2.62178"
        y="86.0712"
        width="199.914"
        height="232.616"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.472695" result="effect1_foregroundBlur_1263_3260" />
      </filter>
      <filter
        id="filter8_i_1263_3260"
        x="-6.308"
        y="87.0166"
        width="163.373"
        height="227.747"
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
        <feOffset dx="-4.72695" dy="1.89078" />
        <feGaussianBlur stdDeviation="5.67234" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter9_i_1263_3260"
        x="16.5417"
        y="263.57"
        width="144.72"
        height="54.1724"
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
        <feOffset dx="-1.89078" dy="-0.94539" />
        <feGaussianBlur stdDeviation="3.30886" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter10_i_1263_3260"
        x="7.47972"
        y="181.755"
        width="188.867"
        height="133.222"
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
        <feOffset dx="-4.72695" />
        <feGaussianBlur stdDeviation="5.19964" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter11_i_1263_3260"
        x="-4.41729"
        y="89.4946"
        width="69.5616"
        height="227.396"
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
        <feOffset dx="-2.83617" dy="1.89078" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter12_i_1263_3260"
        x="-5.45795"
        y="189.252"
        width="107.978"
        height="127.845"
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
        <feOffset dx="-3.78156" dy="1.09678" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <clipPath id="clip0_1263_3260">
        <rect width="1513" height="315" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <!-- <svg
    id="animate-footer"
    :style="clientStyle"
    class="absolute left-0 -top-full z-40 w-full"
    viewBox="0 0 1514 315"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1263_3260)">
      <path
        d="M114.541 180.815C65.0941 180.815 15.221 192.149 1.37573 193.525V312.495L1493.9 302.835C1487.75 188.041 1493.9 306.077 1493.9 193.422C1493.9 193.422 1393.25 188.614 1326.99 189.991C1297.47 190.604 1185.07 195.496 1147.99 196.758C1110.9 198.019 1037.72 186.141 997.669 186.141C955.144 186.141 874.551 199.835 806.803 202.492C750.063 204.718 749.444 196.414 666.372 199.854C624.837 201.575 588.246 204.672 514.075 202.492C439.904 200.313 443.86 203.754 417.158 203.754C377.293 203.754 366.605 196.27 303.924 194.234C254.477 192.629 252.005 195.611 219.369 195.611C186.734 195.611 156.077 180.815 114.541 180.815Z"
        fill="url(#paint0_linear_1263_3260)"
      />
      <path
        d="M182.637 216.82C129.706 213.816 56.8026 214.509 0.876343 216.82V308.936H1505.89V217.745C1483.92 217.745 1464.95 213.354 1416.01 213.354C1368.53 213.354 1335.8 218.766 1294.17 220.287C1218.27 223.061 1186.31 214.754 1068.47 221.674C988.133 226.392 951.202 215.366 844.764 218.669C792.438 220.294 744.895 227.452 662.005 225.372C579.114 223.292 572.123 229.301 484.239 228.146C396.355 226.99 379.377 222.599 321.454 222.599C263.53 222.599 251.876 220.751 182.637 216.82Z"
        fill="#333269"
      />
      <g filter="url(#filter0_f_1263_3260)">
        <g filter="url(#filter1_i_1263_3260)">
          <path
            d="M1352.89 71.9739L1384.55 129.421L1393.51 136.803L1394.77 123.023L1439.79 150.488L1451.63 164.977L1449.55 113.755L1429.23 48.6447L1371.27 2.39191L1352.89 71.9739Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter2_i_1263_3260)">
          <path
            d="M1514.12 105.57L1514.12 94.5693L1509.85 114.561L1499.23 184.167L1493.25 231.514L1514.12 244.876L1514.12 231.514L1514.12 195.57L1514.12 175.069L1514.12 130.57L1514.12 105.57Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter3_i_1263_3260)">
          <path
            d="M1366.84 191.399L1321.87 204.459L1348.39 238.411L1406.95 257.864L1460.26 274.479L1470.26 261.909L1478.4 246.672L1366.84 191.399Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter4_i_1263_3260)">
          <path
            d="M1352.26 99.0248L1292.3 105.043L1312.95 165.873L1455.62 257.026L1468.98 241.536L1474.25 235.448L1480.2 230.688L1487.61 219.958L1494.08 209.374L1422.55 152.161L1352.26 99.0248Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter5_i_1263_3260)">
          <path
            d="M1447.91 65.6536L1449.09 163.277L1447.74 188.405L1452.05 215.958L1453.96 228.1L1462.87 230.052L1474.21 233.539L1490.2 233.427L1494.94 233.539L1515.26 73.2249L1490.38 27.9185L1447.91 65.6536Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter6_i_1263_3260)">
          <path
            d="M1392.89 114.35L1392.89 178.274L1398.19 184.387L1423.92 216.555L1445.81 242.604L1480.87 280.82L1501.75 267.501L1514.38 258.069L1514.38 243.569L1453.07 140.573L1392.89 114.35Z"
            fill="#100F42"
          />
        </g>
      </g>
      <g filter="url(#filter7_f_1263_3260)">
        <g filter="url(#filter8_i_1263_3260)">
          <path
            d="M92.3694 55.3437L54.5343 120.774L2.77637 218.618L-0.118413 239.569L35.2683 255.873L74.961 199.227L100.914 159.711L154.681 97.6122L158.527 30.0168L92.3694 55.3437Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter9_i_1263_3260)">
          <path
            d="M162.725 222.768L127.992 207.515L98.9406 213.555L19.8951 241.799L24.8422 261.614L29.568 278.313L73.8517 268.082L88.602 263.373L98.4566 260.742L134.035 252.88L162.725 222.768Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter10_i_1263_3260)">
          <path
            d="M197.809 137.673L147.233 124.755L77.5875 165.825L13.6692 209.789L18.1894 209.612L23.6247 220.23L27.4159 228.605L15.0296 244.535L20.7089 257.977L33.5134 257.005L43.209 250.249L172.683 184.769L197.809 137.673Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter11_i_1263_3260)">
          <path
            d="M66.6068 78.9178L42.1735 32.4944L-0.118529 72.0693L-0.118466 254.069L1.85058 262.069L1.85057 266.618L4.50885 266.826L13.2933 267.516L43.7226 198.029L66.6068 78.9178Z"
            fill="#100F42"
          />
        </g>
        <g filter="url(#filter12_i_1263_3260)">
          <path
            d="M103.982 132.252L44.3333 135.213L-0.213889 183.569L-0.21389 208.569L-0.213888 253.569L-0.213889 269.717L88.7264 188.21L103.982 132.252Z"
            fill="#100F42"
          />
        </g>
      </g>
      <path
        d="M-5 267.798C-5 267.798 -5 289.985 -5 308.442V315.047L1514 315.763C1514 306.044 1514 329.018 1514 315.763C1514 299.177 1514 258.655 1514 258.655C1514 258.655 1431.57 246.2 1245.18 252.095C1118.12 256.113 1059.71 246.721 891.358 249.535C808.597 250.919 733.401 257.017 602.296 255.245C471.192 253.473 450.898 261.632 320.886 255.245C190.874 248.858 135.725 258.95 64.8623 255.245C19.6431 252.881 -5 254.08 -5 254.08L-5 267.798Z"
        fill="#100F42"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1263_3260"
        x="1291.35"
        y="1.4467"
        width="224.854"
        height="280.319"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.472695" result="effect1_foregroundBlur_1263_3260" />
      </filter>
      <filter
        id="filter1_i_1263_3260"
        x="1352.89"
        y="2.39209"
        width="102.513"
        height="167.312"
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
        <feOffset dx="3.78156" dy="4.72695" />
        <feGaussianBlur stdDeviation="4.25425" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter2_i_1263_3260"
        x="1493.25"
        y="94.5693"
        width="20.8696"
        height="154.088"
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
        <feOffset dy="3.78156" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter3_i_1263_3260"
        x="1321.87"
        y="191.398"
        width="158.42"
        height="85.9167"
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
        <feOffset dx="1.89078" dy="2.83617" />
        <feGaussianBlur stdDeviation="2.83617" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter4_i_1263_3260"
        x="1292.3"
        y="99.0249"
        width="207.457"
        height="160.837"
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
        <feOffset dx="5.67234" dy="2.83617" />
        <feGaussianBlur stdDeviation="5.19964" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter5_i_1263_3260"
        x="1447.74"
        y="27.9185"
        width="71.3067"
        height="210.348"
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
        <feOffset dx="3.78156" dy="4.72695" />
        <feGaussianBlur stdDeviation="3.30886" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter6_i_1263_3260"
        x="1392.89"
        y="114.35"
        width="125.271"
        height="170.252"
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
        <feOffset dx="3.78156" dy="3.78156" />
        <feGaussianBlur stdDeviation="2.83617" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter7_f_1263_3260"
        x="-1.15926"
        y="29.0712"
        width="199.914"
        height="250.187"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.472695" result="effect1_foregroundBlur_1263_3260" />
      </filter>
      <filter
        id="filter8_i_1263_3260"
        x="-4.84536"
        y="30.0166"
        width="163.373"
        height="227.747"
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
        <feOffset dx="-4.72695" dy="1.89078" />
        <feGaussianBlur stdDeviation="5.67234" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter9_i_1263_3260"
        x="18.0044"
        y="206.57"
        width="144.72"
        height="71.7432"
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
        <feOffset dx="-1.89078" dy="-0.94539" />
        <feGaussianBlur stdDeviation="3.30886" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter10_i_1263_3260"
        x="8.94224"
        y="124.755"
        width="188.867"
        height="133.222"
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
        <feOffset dx="-4.72695" />
        <feGaussianBlur stdDeviation="5.19964" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter11_i_1263_3260"
        x="-2.9547"
        y="32.4946"
        width="69.5615"
        height="236.912"
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
        <feOffset dx="-2.83617" dy="1.89078" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <filter
        id="filter12_i_1263_3260"
        x="-3.99543"
        y="132.252"
        width="107.978"
        height="138.562"
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
        <feOffset dx="-3.78156" dy="1.09678" />
        <feGaussianBlur stdDeviation="3.78156" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1263_3260" />
      </filter>
      <linearGradient
        id="paint0_linear_1263_3260"
        x1="744.391"
        y1="180.815"
        x2="744.391"
        y2="478.748"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#59588B" stop-opacity="0.63" />
        <stop offset="0.255208" stop-color="#59588B" />
      </linearGradient>
      <clipPath id="clip0_1263_3260">
        <rect width="1514" height="315" fill="white" />
      </clipPath>
    </defs>
  </svg> -->
</template>
