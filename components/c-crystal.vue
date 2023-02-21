<script lang="ts" setup>
const clientStyle = ref()
const el = ref()

onMounted(() => {
  const el = document.querySelector('#animate-banner')
  if (!el) return
  clientStyle.value = { top: `-${el.clientHeight - 1}px` }

  window.addEventListener('resize', () => {
    clientStyle.value.top = `-${el.clientHeight - 1}px`
  })
})
</script>

<template>
  <svg
    id="animate-banner"
    :style="clientStyle"
    class="absolute left-0 -top-full w-full"
    viewBox="0 0 1720 349"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_600_800)">
      <path
        d="M167.331 240.834C347.874 246.834 447.106 153.123 635.738 197.479C824.371 241.834 1007.53 255.124 1172.57 264.055C1382.38 275.409 1612.44 232.835 1710.43 214.147C1808.42 195.458 1698.35 273.759 1648.15 317.979C1597.95 362.199 599.263 335.834 599.263 335.834C338.733 323.834 304.424 283.184 7.35612 240.834C7.35612 240.834 -11.5023 234.891 167.331 240.834Z"
        fill="url(#paint0_linear_600_800)"
        fill-opacity="0.3"
      />
      <path
        d="M167.331 240.834C347.874 246.834 447.106 153.123 635.738 197.479C824.371 241.834 1007.53 255.124 1172.57 264.055C1382.38 275.409 1612.44 232.835 1710.43 214.147C1808.42 195.458 1698.35 273.759 1648.15 317.979C1597.95 362.199 599.263 335.834 599.263 335.834C338.733 323.834 304.424 283.184 7.35612 240.834C7.35612 240.834 -11.5023 234.891 167.331 240.834Z"
        fill="url(#paint1_linear_600_800)"
        fill-opacity="0.2"
      />
      <path
        d="M21.0671 233.834C191.899 190.834 171.393 153.397 328.195 214.116C484.996 274.834 532.989 288.301 564.983 294.834C736.385 329.834 728.386 329.834 662.111 329.834C410.809 329.835 322.354 323.644 21.0672 280.692C21.0672 280.692 -150.922 277.126 21.0671 233.834Z"
        fill="url(#paint2_linear_600_800)"
        fill-opacity="0.3"
      />
      <path
        d="M21.0671 233.834C191.899 190.834 171.393 153.397 328.195 214.116C484.996 274.834 532.989 288.301 564.983 294.834C736.385 329.834 728.386 329.834 662.111 329.834C410.809 329.835 322.354 323.644 21.0672 280.692C21.0672 280.692 -150.922 277.126 21.0671 233.834Z"
        fill="url(#paint3_linear_600_800)"
        fill-opacity="0.2"
      />
      <path
        d="M21.0672 233.834C182.187 189.834 171.393 153.397 328.195 214.116C484.996 274.834 532.989 288.301 564.983 294.834C736.385 329.834 728.386 329.834 662.111 329.834C410.809 329.834 322.354 323.643 21.0673 280.692C21.0673 280.692 -149.77 280.488 21.0672 233.834Z"
        fill="url(#paint4_linear_600_800)"
        fill-opacity="0.3"
      />
      <path
        d="M1264.7 159.92C1130.95 117.22 1033.48 123.834 885.913 185.086C738.345 246.339 632.775 265.834 471.283 265.834C312.015 265.834 138.713 220.639 63.347 212.834C-12.0184 205.029 82.7724 321.834 149.048 321.834C215.323 321.834 885.913 346.834 885.913 346.834C1122.61 346.834 1437.58 295.13 1655.1 229.834C1655.1 229.834 1483.7 229.834 1264.7 159.92Z"
        fill="url(#paint5_linear_600_800)"
        fill-opacity="0.3"
      />
      <path
        d="M1264.7 159.92C1130.95 117.22 1033.48 123.834 885.913 185.086C738.345 246.339 632.775 265.834 471.283 265.834C312.015 265.834 138.713 220.639 63.347 212.834C-12.0184 205.029 82.7724 321.834 149.048 321.834C215.323 321.834 885.913 346.834 885.913 346.834C1122.61 346.834 1437.58 295.13 1655.1 229.834C1655.1 229.834 1483.7 229.834 1264.7 159.92Z"
        fill="url(#paint6_linear_600_800)"
        fill-opacity="0.3"
      />
      <path
        d="M1264.7 159.92C1130.95 117.22 1033.48 123.834 885.913 185.086C738.345 246.339 632.775 265.834 471.283 265.834C312.015 265.834 138.713 220.639 63.347 212.834C-12.0184 205.029 82.7724 321.834 149.048 321.834C215.323 321.834 885.913 346.834 885.913 346.834C1122.61 346.834 1437.58 295.13 1655.1 229.834C1655.1 229.834 1483.7 229.834 1264.7 159.92Z"
        fill="url(#paint7_linear_600_800)"
        fill-opacity="0.2"
      />
      <path
        d="M1335.16 192.358C1500.28 109.245 1485.12 147.652 1688.82 159.007C1748.8 162.351 1652.81 251.834 1652.81 251.834C1326.37 340.825 1271.27 295.464 1000.68 333.316C902.385 361.54 921.413 344.989 983.203 335.834C989.129 334.956 994.954 334.118 1000.68 333.316C1022.31 327.105 1049.63 318.726 1083.42 307.622C1118.39 296.13 1170.04 275.47 1335.16 192.358Z"
        fill="url(#paint8_linear_600_800)"
        fill-opacity="0.3"
      />
      <g filter="url(#filter0_i_600_800)">
        <path
          d="M1533.96 77.011L1572.23 137.777L1583.05 145.585L1584.57 131.009L1639 160.06L1653.3 175.387L1650.79 121.206L1626.23 52.3342L1556.17 3.40966L1533.96 77.011Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter1_i_600_800)">
        <path
          d="M1765.7 84.9194L1726.83 100.876L1723.68 122.058L1710.83 195.685L1703.6 245.767L1728.83 259.901L1746.6 258.895L1769.07 185.936L1772.33 174.732L1783.18 135.674L1765.7 84.9194Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter2_i_600_800)">
        <path
          d="M1550.82 203.334L1496.46 217.149L1528.52 253.063L1599.3 273.639L1663.74 291.214L1675.82 277.918L1685.66 261.8L1550.82 203.334Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter3_i_600_800)">
        <path
          d="M1533.19 105.624L1460.72 111.99L1485.68 176.334L1658.12 272.752L1674.27 256.367L1680.64 249.928L1687.83 244.892L1696.79 233.543L1704.62 222.348L1618.15 161.83L1533.19 105.624Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter4_i_600_800)">
        <path
          d="M1648.81 70.3257L1650.24 173.588L1648.6 200.167L1653.82 229.312L1656.11 242.155L1666.89 244.22L1680.59 247.909L1699.92 247.791L1705.65 247.909L1730.22 78.3343L1700.14 30.4109L1648.81 70.3257Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter5_i_600_800)">
        <path
          d="M1582.31 121.834L1582.31 189.451L1588.71 195.917L1619.81 229.944L1646.27 257.497L1688.65 297.92L1713.89 283.833L1735.65 269.715L1655.05 149.572L1582.31 121.834Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter6_i_600_800)">
        <path
          d="M-35.2014 62.0965L-62.198 123.597L-38.2169 195.394L-10.082 264.892L25.3296 248.586L30.7631 240.557L47.6328 212.221L40.6583 184.587L32.0516 166.508L12.9837 103.908L-35.2014 62.0965Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter7_i_600_800)">
        <path
          d="M109.205 40.1242L63.4743 109.334L0.915267 212.83L-3.93514 235.52L40.1878 252.237L88.1637 192.319L119.533 150.52L184.52 84.8343L189.169 13.3344L109.205 40.1242Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter8_i_600_800)">
        <path
          d="M194.242 217.22L152.261 201.086L117.147 207.475L21.6063 237.35L27.5858 258.309L33.2978 275.973L86.8228 265.152L104.651 260.17L116.562 257.388L159.565 249.072L194.242 217.22Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter9_i_600_800)">
        <path
          d="M236.649 127.209L175.518 113.545L91.3388 156.987L14.0817 203.49L19.5452 203.303L26.1148 214.536L30.6971 223.394L15.726 240.244L22.5905 254.462L38.0671 253.435L49.7861 246.288L206.279 177.026L236.649 127.209Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter10_i_600_800)">
        <path
          d="M78.0665 65.0603L48.5342 15.9553L-0.203404 55.8308L-18.3365 254.7L-18.9991 262.311L-10.1956 262.916L3.00961 263.823L13.6272 264.553L50.4066 191.052L78.0665 65.0603Z"
          fill="#100F42"
        />
      </g>
      <g filter="url(#filter11_i_600_800)">
        <path
          d="M123.242 121.475L51.1447 124.607L-55.3087 229.618L-19.3656 255.447L-2.69872 266.881L104.802 180.666L123.242 121.475Z"
          fill="#100F42"
        />
      </g>
      <path
        d="M-4.06934 225.931C-4.06934 225.931 519.459 331.048 862.081 331.048C1204.7 331.048 1725.95 225.931 1725.95 225.931V348.931H862.081H-4.06934V225.931Z"
        fill="url(#paint9_linear_600_800)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_600_800"
        x="1533.96"
        y="3.40967"
        width="123.335"
        height="176.977"
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
        <feOffset dx="4" dy="5" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter1_i_600_800"
        x="1703.6"
        y="84.9194"
        width="79.5752"
        height="178.981"
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
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter2_i_600_800"
        x="1496.46"
        y="203.334"
        width="191.194"
        height="90.8794"
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
        <feOffset dx="2" dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter3_i_600_800"
        x="1460.72"
        y="105.624"
        width="249.895"
        height="170.128"
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
        <feOffset dx="6" dy="3" />
        <feGaussianBlur stdDeviation="5.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter4_i_600_800"
        x="1648.6"
        y="30.4109"
        width="85.6162"
        height="222.498"
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
        <feOffset dx="4" dy="5" />
        <feGaussianBlur stdDeviation="3.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter5_i_600_800"
        x="1582.31"
        y="121.834"
        width="157.342"
        height="180.086"
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
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter6_i_600_800"
        x="-68.1978"
        y="60.9007"
        width="115.831"
        height="203.991"
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
        <feOffset dx="-6" dy="-1.19578" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter7_i_600_800"
        x="-8.93506"
        y="13.3344"
        width="198.104"
        height="240.902"
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
        <feOffset dx="-5" dy="2" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter8_i_600_800"
        x="19.6064"
        y="200.086"
        width="174.636"
        height="75.8877"
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
        <feOffset dx="-2" dy="-1" />
        <feGaussianBlur stdDeviation="3.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter9_i_600_800"
        x="9.08154"
        y="113.545"
        width="227.567"
        height="140.917"
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
        <feOffset dx="-5" />
        <feGaussianBlur stdDeviation="5.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter10_i_600_800"
        x="-21.999"
        y="15.9553"
        width="100.065"
        height="250.598"
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
        <feOffset dx="-3" dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <filter
        id="filter11_i_600_800"
        x="-59.3086"
        y="121.475"
        width="182.55"
        height="146.566"
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
        <feOffset dx="-4" dy="1.16013" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_800" />
      </filter>
      <linearGradient
        id="paint0_linear_600_800"
        x1="624.402"
        y1="203.834"
        x2="606.788"
        y2="324.598"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.703125" stop-color="#343360" />
        <stop offset="0.869792" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_600_800"
        x1="903.216"
        y1="301.834"
        x2="539.086"
        y2="201.666"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#100F42" />
        <stop offset="1" stop-color="#9F98A3" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_600_800"
        x1="215.162"
        y1="198.471"
        x2="200.245"
        y2="356.895"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.703125" stop-color="#343360" />
        <stop offset="0.869792" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_600_800"
        x1="297.597"
        y1="228.834"
        x2="324.781"
        y2="201.223"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#100F42" />
        <stop offset="1" stop-color="#100F42" stop-opacity="0.58" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_600_800"
        x1="261.031"
        y1="156.834"
        x2="235.899"
        y2="239.91"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.703125" stop-color="#343360" />
        <stop offset="0.869792" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_600_800"
        x1="1106.61"
        y1="131.834"
        x2="1105.81"
        y2="331.826"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.619792" stop-color="#343360" />
        <stop offset="0.8125" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_600_800"
        x1="1106.61"
        y1="113.834"
        x2="1102.9"
        y2="347.812"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.619792" stop-color="#343360" />
        <stop offset="0.8125" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_600_800"
        x1="1072.33"
        y1="191.834"
        x2="1077.58"
        y2="35.7803"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#100F42" stop-opacity="0" />
        <stop offset="0.505208" stop-color="#100F42" />
        <stop offset="0.744792" stop-color="#100F42" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_600_800"
        x1="1426.56"
        y1="147.834"
        x2="1452.8"
        y2="240.072"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F6F6D4" />
        <stop offset="0.703125" stop-color="#343360" />
        <stop offset="0.869792" stop-color="#22205B" />
        <stop offset="1" stop-color="#100F42" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_600_800"
        x1="862.081"
        y1="225.931"
        x2="862.081"
        y2="2364.98"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#100F42" />
        <stop offset="0.234375" stop-color="#100F42" />
        <stop offset="1" stop-color="#00AEC6" />
      </linearGradient>
      <clipPath id="clip0_600_800">
        <rect width="1720" height="349" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
