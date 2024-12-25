import { FileDigit } from "lucide-react";
import modelIcon1 from "@/assets/modelIcon1.png";
import Model from "@/components/Model/model";
import { Link } from "react-router-dom";

const ModelsContainer = () => {
  const modelDataArray = [
    {
      title: "Images (High Resolution)",
      imgSrc1: modelIcon1,
      imgSrc: (
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-12 top-1/4 translate-y-[-87%] left-9 translate-x-[-26%] fill-current text-primary"
        >
          <path d="M30.6486 0.0712891H11.1892C9.76991 0.0712891 8.40878 0.625626 7.40522 1.61236C6.40164 2.59909 5.83784 3.93737 5.83784 5.33283V5.81115H5.35135C3.93208 5.81115 2.57094 6.36549 1.56738 7.35222C0.563799 8.33895 0 9.67723 0 11.0727V26.379C0 27.7743 0.563799 29.1127 1.56738 30.0994C2.57094 31.0862 3.93208 31.6405 5.35135 31.6405H24.8108C26.23 31.6405 27.5912 31.0862 28.5947 30.0994C29.5984 29.1127 30.1622 27.7743 30.1622 26.379V25.9007H30.6486C32.0678 25.9007 33.429 25.3464 34.4325 24.3595C35.4363 23.3728 36 22.0345 36 20.6391V5.33283C36 3.93737 35.4363 2.59909 34.4325 1.61236C33.429 0.625626 32.0678 0.0712891 30.6486 0.0712891ZM8.75676 5.33283C8.75676 4.69853 9.01304 4.09022 9.46921 3.64171C9.92537 3.1932 10.5441 2.94122 11.1892 2.94122H30.6486C31.2937 2.94122 31.9125 3.1932 32.3687 3.64171C32.8248 4.09022 33.0811 4.69853 33.0811 5.33283V17.1952L28.6638 13.5408C28.52 13.4178 28.3526 13.3242 28.1717 13.2653C27.9907 13.2064 27.7998 13.1834 27.6097 13.1976C27.4195 13.2119 27.2343 13.263 27.0644 13.3482C26.8947 13.4335 26.7437 13.551 26.6205 13.6939L24.5384 16.1046L16.7546 8.68108C16.6302 8.53523 16.4755 8.41712 16.3012 8.33464C16.1266 8.25216 15.9363 8.2072 15.7427 8.20276C15.5423 8.2102 15.3453 8.2582 15.1646 8.34381C14.9838 8.42939 14.8229 8.55073 14.6919 8.70021L8.75676 15.6454V5.33283ZM11.1892 23.0307C10.5441 23.0307 9.92537 22.7787 9.46921 22.3303C9.01304 21.8818 8.75676 21.2734 8.75676 20.6391V20.0651L15.8984 11.7997L22.6314 18.2858L18.5449 23.0307H11.1892ZM27.2432 26.379C27.2432 27.0132 26.987 27.6217 26.5308 28.0701C26.0747 28.5186 25.4559 28.7706 24.8108 28.7706H5.35135C4.70623 28.7706 4.08754 28.5186 3.63137 28.0701C3.1752 27.6217 2.91892 27.0132 2.91892 26.379V11.0727C2.91892 10.4384 3.1752 9.83008 3.63137 9.38157C4.08754 8.93306 4.70623 8.68108 5.35135 8.68108H5.83784V20.6391C5.83784 22.0345 6.40164 23.3728 7.40522 24.3595C8.40878 25.3464 9.76991 25.9007 11.1892 25.9007H27.2432V26.379ZM30.6486 23.0307H22.3784L27.9049 16.6404L33.0227 20.907C32.9649 21.4873 32.6899 22.0257 32.2513 22.4181C31.8127 22.8105 31.2416 23.0288 30.6486 23.0307Z" />
        </svg>
      ),
      description:
        "Teach a model to classify images using files or your webcam.",
      link: "/image",
    },
    {
      title: "Images (Low Resolution)",
      imgSrc1: modelIcon1,
      imgSrc: (
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-12 top-1/4 translate-y-[-87%] left-9 translate-x-[-26%] fill-current text-primary"
        >
          <path d="M30.6486 0.0712891H11.1892C9.76991 0.0712891 8.40878 0.625626 7.40522 1.61236C6.40164 2.59909 5.83784 3.93737 5.83784 5.33283V5.81115H5.35135C3.93208 5.81115 2.57094 6.36549 1.56738 7.35222C0.563799 8.33895 0 9.67723 0 11.0727V26.379C0 27.7743 0.563799 29.1127 1.56738 30.0994C2.57094 31.0862 3.93208 31.6405 5.35135 31.6405H24.8108C26.23 31.6405 27.5912 31.0862 28.5947 30.0994C29.5984 29.1127 30.1622 27.7743 30.1622 26.379V25.9007H30.6486C32.0678 25.9007 33.429 25.3464 34.4325 24.3595C35.4363 23.3728 36 22.0345 36 20.6391V5.33283C36 3.93737 35.4363 2.59909 34.4325 1.61236C33.429 0.625626 32.0678 0.0712891 30.6486 0.0712891ZM8.75676 5.33283C8.75676 4.69853 9.01304 4.09022 9.46921 3.64171C9.92537 3.1932 10.5441 2.94122 11.1892 2.94122H30.6486C31.2937 2.94122 31.9125 3.1932 32.3687 3.64171C32.8248 4.09022 33.0811 4.69853 33.0811 5.33283V17.1952L28.6638 13.5408C28.52 13.4178 28.3526 13.3242 28.1717 13.2653C27.9907 13.2064 27.7998 13.1834 27.6097 13.1976C27.4195 13.2119 27.2343 13.263 27.0644 13.3482C26.8947 13.4335 26.7437 13.551 26.6205 13.6939L24.5384 16.1046L16.7546 8.68108C16.6302 8.53523 16.4755 8.41712 16.3012 8.33464C16.1266 8.25216 15.9363 8.2072 15.7427 8.20276C15.5423 8.2102 15.3453 8.2582 15.1646 8.34381C14.9838 8.42939 14.8229 8.55073 14.6919 8.70021L8.75676 15.6454V5.33283ZM11.1892 23.0307C10.5441 23.0307 9.92537 22.7787 9.46921 22.3303C9.01304 21.8818 8.75676 21.2734 8.75676 20.6391V20.0651L15.8984 11.7997L22.6314 18.2858L18.5449 23.0307H11.1892ZM27.2432 26.379C27.2432 27.0132 26.987 27.6217 26.5308 28.0701C26.0747 28.5186 25.4559 28.7706 24.8108 28.7706H5.35135C4.70623 28.7706 4.08754 28.5186 3.63137 28.0701C3.1752 27.6217 2.91892 27.0132 2.91892 26.379V11.0727C2.91892 10.4384 3.1752 9.83008 3.63137 9.38157C4.08754 8.93306 4.70623 8.68108 5.35135 8.68108H5.83784V20.6391C5.83784 22.0345 6.40164 23.3728 7.40522 24.3595C8.40878 25.3464 9.76991 25.9007 11.1892 25.9007H27.2432V26.379ZM30.6486 23.0307H22.3784L27.9049 16.6404L33.0227 20.907C32.9649 21.4873 32.6899 22.0257 32.2513 22.4181C31.8127 22.8105 31.2416 23.0288 30.6486 23.0307Z" />
        </svg>
      ),
      description:
        "Teach a model to classify images using files or your webcam.",
      link: "/image",
    },
    {
      title: "Audio",
      imgSrc1: modelIcon1,
      imgSrc: (
        <svg
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-12 top-1/4 translate-y-[-85%] left-9 translate-x-[-30%] text-primary"
        >
          <path
            d="M0 16.5553H9.63581L11.8578 5.87032L14.0797 25.5031L16.3017 1.01855L18.5236 30.1095L20.7456 1.14534L22.9675 27.6657L25.1895 2.9266L27.4114 21.1903L29.6334 5.39893L31.8553 16.4633H40"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        "Teach a model to classify audio by recording short sound samples.",
      link: "/audio",
    },
    {
      title: "Text",
      imgSrc1: modelIcon1,
      imgSrc: (
        <svg
          viewBox="0 0 36 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-12 top-1/4 translate-y-[-80%] left-9 translate-x-[-28%] text-primary"
        >
          <path
            d="M18 0.851562C11.6232 0.851562 8.43484 0.851562 6.45384 2.82859C4.947 4.3324 4.58632 6.53337 4.5 10.3016M31.5 10.3016C31.4136 6.53337 31.053 4.3324 29.5461 2.82859C28.3183 1.6033 26.6269 1.1374 24 0.960252M31.5 18.4016C31.4136 22.1697 31.053 24.3707 29.5461 25.8746C27.5652 27.8516 24.3768 27.8516 18 27.8516C11.6232 27.8516 8.43484 27.8516 6.45384 25.8746C4.94701 24.3707 4.58634 22.1697 4.5 18.4016"
            stroke="currentColor"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M12 8.35156H24"
            stroke="currentColor"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M18 20.3516V8.35156"
            stroke="currentColor"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M33 14.3516H30"
            stroke="currentColor"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M6 14.3516H3"
            stroke="currentColor"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
        </svg>
      ),
      description:
        "Teach a model to classify texts by inputting alphabets and numbers.",
      link: "/text",
    },
    {
      title: "Numbers",
      imgSrc1: modelIcon1,
      imgSrc: (
        <FileDigit className="absolute w-9 h-12 top-1/4 translate-y-[-87%] left-9 translate-x-[-25%] text-primary " />
      ),
      description:
        "Teach a model to classify numbers by inputting alphabets and numbers.",
      link: "/text",
    },
    {
      title: "Poses",
      imgSrc1: modelIcon1,
      imgSrc: (
        <svg
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-12 top-1/4 translate-y-[-87%] left-9 translate-x-[-28%] 
      fill-current text-primary "
        >
          <g clipPath="url(#clip0_28_20)">
            <path d="M23.2847 20.9764L25.0607 21.8027C25.5048 22.0094 25.977 22.1081 26.4448 22.1081C27.5343 22.1081 28.5992 21.5725 29.2259 20.6187L32.504 15.6307C32.5227 15.6082 32.541 15.5851 32.5575 15.5601L33.9539 13.4558C34.2003 13.0844 34.099 12.5835 33.7277 12.3371C33.3563 12.0907 32.8554 12.192 32.609 12.5633L32.3158 13.0051L30.2459 11.6449C30.067 11.5274 29.8488 11.4857 29.6392 11.529C29.4296 11.5724 29.2458 11.6972 29.1283 11.8762L25.8732 16.8294L22.3324 15.3737C22.3322 15.3736 22.3319 15.3735 22.3317 15.3735C22.2827 15.3515 22.2329 15.3313 22.1826 15.3122C22.1779 15.3104 22.1734 15.3082 22.1686 15.3065C22.146 15.2972 22.1231 15.289 22.0997 15.2819C22.0936 15.2797 22.0873 15.278 22.0811 15.2759C22.0681 15.2715 22.0551 15.2676 22.0421 15.2634C22.0136 15.2542 21.9848 15.2456 21.9559 15.2375C21.9419 15.2335 21.9279 15.2297 21.9139 15.226C21.8822 15.2176 21.8502 15.2099 21.8182 15.2026C21.8081 15.2004 21.7981 15.1978 21.788 15.1956C21.7463 15.1867 21.7043 15.1788 21.6622 15.1719C21.6514 15.1701 21.6406 15.1687 21.6298 15.1671C21.5976 15.1623 21.5653 15.1578 21.5329 15.1541C21.5186 15.1525 21.5041 15.151 21.4897 15.1496C21.4592 15.1466 21.4285 15.1442 21.3976 15.1421C21.3843 15.1412 21.3709 15.1403 21.3576 15.1396C21.3142 15.1375 21.2707 15.1362 21.227 15.1362H21.0549H20.4952L20.4173 14.9066H24.3263C24.772 14.9066 25.1334 14.5453 25.1334 14.0995V7.77379C25.133 3.84049 21.9331 0.640625 18.0001 0.640625C14.067 0.640625 10.8671 3.84049 10.8671 7.77357V14.0995C10.8671 14.5452 11.2284 14.9065 11.6742 14.9065H15.5459L15.4684 15.1361H14.9456H14.7735C14.7297 15.1361 14.6861 15.1375 14.6426 15.1395C14.6293 15.1402 14.616 15.1412 14.6028 15.1421C14.5718 15.144 14.541 15.1465 14.5103 15.1495C14.4959 15.151 14.4817 15.1524 14.4673 15.154C14.4348 15.1578 14.4024 15.1622 14.3702 15.167C14.3593 15.1687 14.3485 15.17 14.3378 15.1718C14.2952 15.1788 14.2528 15.1867 14.2108 15.1957C14.2023 15.1975 14.194 15.1997 14.1855 15.2016C14.1517 15.2092 14.1182 15.2173 14.0847 15.2262C14.0712 15.2297 14.0578 15.2335 14.0444 15.2373C14.0152 15.2455 13.986 15.2542 13.9571 15.2634C13.9441 15.2677 13.931 15.2717 13.918 15.276C13.911 15.2783 13.904 15.2804 13.8971 15.2827C13.8764 15.2892 13.8559 15.2965 13.8357 15.3046C13.8306 15.3065 13.8257 15.3089 13.8207 15.3108C13.7687 15.3305 13.7172 15.3513 13.6665 15.3742C13.6658 15.3745 13.665 15.3747 13.6643 15.3751L10.1269 16.8292L6.87186 11.876C6.7543 11.6971 6.5705 11.5723 6.36097 11.5289C6.15137 11.4855 5.93326 11.5272 5.75424 11.6448L3.71208 12.9868L3.46521 12.6033C3.22397 12.2285 2.72453 12.1202 2.34984 12.3613C1.97507 12.6026 1.86679 13.1019 2.10796 13.4767L2.72847 14.4409C2.74612 14.4808 2.76637 14.52 2.79119 14.5577L6.7742 20.6186C7.40104 21.5723 8.46571 22.108 9.55535 22.1079C10.0229 22.1079 10.4953 22.0092 10.9394 21.8025L12.7154 20.9762L13.1435 22.9235C13.1818 23.0978 13.181 23.2819 13.141 23.4559L12.7211 25.2839L11.1452 24.5251C10.38 24.1566 9.5171 24.1083 8.71568 24.3888C7.91411 24.6694 7.26983 25.2452 6.90139 26.0104C6.5331 26.7755 6.48465 27.6383 6.7652 28.4398C6.77617 28.4711 6.78833 28.5018 6.80028 28.5327H4.07897C3.63326 28.5327 3.27192 28.894 3.27192 29.3398C3.27192 29.7856 3.63326 30.1468 4.07897 30.1468H8.15444C8.16379 30.1468 8.17293 30.1458 8.18228 30.1454C8.24901 30.1837 8.31686 30.2204 8.38689 30.2541L11.3075 31.6604C11.3184 31.7457 11.3421 31.8296 11.3801 31.9086L13.4383 36.1834C13.5774 36.4722 13.8656 36.6405 14.1661 36.6405C14.2835 36.6405 14.4028 36.6147 14.5156 36.5604L18.0001 34.8827L21.4845 36.5604C21.5974 36.6147 21.7166 36.6405 21.834 36.6405C22.1344 36.6405 22.4227 36.4721 22.5618 36.1834L24.62 31.9086C24.658 31.8295 24.6818 31.7457 24.6927 31.6604L27.6133 30.2541C27.6826 30.2208 27.7495 30.1844 27.8152 30.1468H31.9212C32.3669 30.1468 32.7283 29.7856 32.7283 29.3398C32.7283 28.894 32.367 28.5329 31.9212 28.5329H29.1983C29.5031 27.7421 29.4945 26.8326 29.0987 26.0105C28.7303 25.2454 28.086 24.6695 27.2844 24.389C26.4829 24.1086 25.6201 24.1569 24.855 24.5253L23.2789 25.2841L22.8591 23.4561C22.8192 23.2822 22.8182 23.098 22.8567 22.9237L23.2847 20.9764ZM23.889 18.2268C23.8947 18.201 23.899 18.175 23.9022 18.1489C23.9089 18.0921 23.9133 18.0354 23.9164 17.9786C23.9174 17.9615 23.9178 17.9442 23.9184 17.927C23.9199 17.8855 23.9205 17.8441 23.92 17.8028C23.92 17.7924 23.9207 17.782 23.9205 17.7716L25.8751 18.5752C26.2323 18.722 26.644 18.595 26.8564 18.272L30.0339 13.4369L31.4169 14.3458L27.8771 19.7322C27.4178 20.4311 26.4997 20.692 25.7417 20.3392L23.6397 19.3612L23.889 18.2268ZM10.2586 20.3393C9.50051 20.6921 8.5825 20.4311 8.12322 19.7323L4.74483 14.5915L4.58578 14.3444L5.96645 13.4371L9.14395 18.2721C9.3563 18.5951 9.76777 18.7223 10.1252 18.5753L12.08 17.7717C12.0798 17.782 12.0805 17.7924 12.0804 17.8028C12.08 17.8443 12.0805 17.8859 12.082 17.9275C12.0827 17.9445 12.0831 17.9615 12.084 17.9784C12.0872 18.0352 12.0915 18.092 12.0982 18.1489C12.1014 18.175 12.1057 18.201 12.1114 18.2268L12.3608 19.3613L10.2586 20.3393ZM12.4812 13.2925V7.77357C12.4812 4.73044 14.957 2.25465 18.0001 2.25465C21.0433 2.25465 23.519 4.73044 23.519 7.77357V13.2925H21.2921C21.2991 13.2858 21.3056 13.2785 21.3125 13.2718C21.3588 13.2268 21.404 13.1806 21.4483 13.1335C21.4613 13.1198 21.4742 13.1062 21.4871 13.0922C21.5377 13.037 21.5873 12.9807 21.6353 12.9228C21.6435 12.9129 21.6512 12.9028 21.6593 12.8929C21.7006 12.8422 21.7408 12.7905 21.7801 12.7378C21.7917 12.722 21.8036 12.7065 21.8151 12.6906C21.8597 12.6293 21.9031 12.5669 21.945 12.503C21.9516 12.4929 21.9578 12.4824 21.9644 12.4723C22.0007 12.416 22.0358 12.3586 22.0699 12.3004C22.0802 12.2828 22.0906 12.2653 22.1006 12.2476C22.1389 12.1804 22.1761 12.1124 22.2116 12.0429C22.2169 12.0326 22.2216 12.0222 22.2268 12.0118C22.2578 11.95 22.2876 11.8872 22.3164 11.8235C22.3251 11.8043 22.3339 11.7851 22.3423 11.7657C22.3741 11.693 22.4049 11.6195 22.4338 11.5445C22.4376 11.5349 22.4409 11.5252 22.4445 11.5155C22.4701 11.4478 22.4944 11.3791 22.5177 11.3097C22.5246 11.289 22.5314 11.2683 22.5382 11.2475C22.5633 11.1695 22.5874 11.0908 22.6094 11.0107C22.6118 11.0021 22.6138 10.9932 22.6162 10.9845C22.636 10.9112 22.6544 10.8368 22.6717 10.7617C22.6768 10.7395 22.6819 10.7174 22.6868 10.695C22.705 10.6121 22.7221 10.5286 22.7371 10.4438C22.7383 10.4367 22.7393 10.4296 22.7405 10.4225C22.7543 10.3431 22.7663 10.2626 22.7773 10.1816C22.7805 10.1582 22.7836 10.1347 22.7865 10.1111C22.7974 10.0237 22.8073 9.93562 22.8149 9.84625C22.8154 9.84119 22.8156 9.83599 22.8161 9.83086C22.8232 9.7455 22.8284 9.65894 22.8324 9.57197C22.8336 9.54743 22.8346 9.52289 22.8356 9.49821C22.839 9.40792 22.8412 9.31708 22.8413 9.22518C22.8413 9.22321 22.8414 9.22139 22.8414 9.21942V7.63386C22.8414 7.18815 22.4801 6.82681 22.0343 6.82681H13.966C13.5203 6.82681 13.159 7.18815 13.159 7.63386V9.21935C13.159 9.22139 13.159 9.22321 13.159 9.22525C13.1591 9.31821 13.1613 9.40989 13.1646 9.50102C13.1655 9.52584 13.1665 9.55073 13.1677 9.57548C13.1717 9.66443 13.1768 9.75281 13.1839 9.83986C13.1843 9.84379 13.1844 9.84773 13.1847 9.85174C13.1921 9.94174 13.2018 10.0303 13.2124 10.1183C13.2153 10.1422 13.2183 10.1659 13.2215 10.1897C13.2323 10.2722 13.2442 10.3541 13.2579 10.4348C13.2589 10.4407 13.2596 10.4468 13.2607 10.4527C13.2753 10.5376 13.292 10.6211 13.3097 10.7039C13.3146 10.7269 13.3196 10.7497 13.3248 10.7724C13.3421 10.8489 13.3603 10.9246 13.3801 10.9992C13.3819 11.0063 13.3835 11.0135 13.3855 11.0205C13.407 11.1003 13.4305 11.1785 13.455 11.256C13.4619 11.2778 13.4689 11.2993 13.476 11.3209C13.4991 11.3913 13.5233 11.4608 13.549 11.5294C13.5519 11.5375 13.5547 11.5458 13.5578 11.5538C13.586 11.6281 13.6161 11.7009 13.6472 11.7729C13.656 11.7932 13.665 11.8134 13.6739 11.8336C13.7028 11.8982 13.7327 11.962 13.7639 12.0247C13.7681 12.0331 13.7719 12.0416 13.776 12.0499C13.8108 12.1188 13.8474 12.1859 13.8849 12.2524C13.8954 12.271 13.9062 12.2896 13.917 12.308C13.9514 12.3671 13.9868 12.4253 14.0235 12.4824C14.0288 12.4906 14.0338 12.4991 14.0391 12.5072C14.0803 12.5705 14.1232 12.6319 14.167 12.6925C14.1791 12.7093 14.1915 12.7258 14.2038 12.7424C14.2437 12.7959 14.2845 12.8485 14.3266 12.9C14.333 12.9078 14.339 12.9159 14.3455 12.9236C14.3929 12.9809 14.442 13.0363 14.492 13.0908C14.5056 13.1056 14.5193 13.1202 14.533 13.1346C14.5784 13.1827 14.6247 13.23 14.6722 13.2758C14.6777 13.2812 14.683 13.2871 14.6886 13.2925H12.4812ZM14.7729 9.21942V8.44098H21.2274V9.21942C21.2274 10.1238 21.0026 12.2845 18.9212 12.8158C18.7033 12.8714 18.5185 13.0153 18.4112 13.213C18.3978 13.2377 18.3858 13.2629 18.3752 13.2887C18.3326 13.3916 18.3118 13.5016 18.3138 13.6117C18.3153 13.6943 18.3293 13.7771 18.3565 13.857L18.5267 14.3587V14.3588L18.7781 15.0998H17.1843L17.435 14.358C17.435 14.3579 17.4351 14.3579 17.4351 14.3578L17.6079 13.8462C17.6347 13.7668 17.6488 13.6846 17.6502 13.6024C17.6526 13.4655 17.6202 13.3288 17.5541 13.2057C17.5143 13.1319 17.4639 13.0655 17.4049 13.0084C17.3459 12.9511 17.2783 12.9032 17.2045 12.8663C17.1554 12.8417 17.1034 12.822 17.0494 12.8078C14.9947 12.2649 14.7729 10.1176 14.7729 9.21942ZM13.7858 17.39C13.8304 17.2908 13.8906 17.1977 13.9656 17.1131C13.9903 17.0852 14.0163 17.0592 14.0432 17.0343C14.0521 17.026 14.0618 17.0187 14.071 17.0107C14.0893 16.9949 14.1077 16.9791 14.1269 16.9647C14.1383 16.9561 14.1503 16.9483 14.162 16.9401C14.1799 16.9277 14.1978 16.9156 14.2162 16.9044C14.2292 16.8966 14.2424 16.8895 14.2555 16.8822C14.2714 16.8735 14.2873 16.8653 14.3036 16.8574L14.3491 16.8386L15 16.7501H20.9997L21.6509 16.8387L21.6947 16.8567C21.7112 16.8647 21.7276 16.8732 21.7438 16.882C21.7569 16.8891 21.77 16.8962 21.7828 16.9039C21.8014 16.9152 21.8195 16.9275 21.8375 16.9399C21.8492 16.948 21.8611 16.9557 21.8725 16.9643C21.8917 16.9789 21.9102 16.9945 21.9286 17.0104C21.9379 17.0184 21.9476 17.0257 21.9565 17.034C21.9833 17.0589 22.0094 17.085 22.0342 17.1128C22.1093 17.1974 22.1695 17.2906 22.214 17.3898C22.2735 17.522 22.3051 17.665 22.3069 17.8124C22.3073 17.8493 22.3059 17.8864 22.3026 17.9237L22.0047 19.2791L21.2799 22.5768C21.1907 22.9829 21.1926 23.4118 21.2858 23.8171L21.7875 26.0018L17.9999 27.8255L14.2123 26.0022L14.7141 23.8175C14.7193 23.7946 14.7233 23.7714 14.7279 23.7484H17.6462C18.092 23.7484 18.4533 23.3871 18.4533 22.9413C18.4533 22.4955 18.092 22.1343 17.6462 22.1343H14.6225L13.8436 18.5905L13.6971 17.9241C13.6938 17.8868 13.6924 17.8496 13.6928 17.8128C13.6947 17.6652 13.7264 17.5223 13.7858 17.39ZM9.08707 28.8001C8.71033 28.6188 8.42683 28.3015 8.28874 27.9069C8.15064 27.5123 8.17441 27.0875 8.35581 26.7108C8.62518 26.1514 9.18565 25.8248 9.76861 25.8248C9.996 25.8248 10.2269 25.8745 10.4452 25.9797L14.9159 28.1322L16.1399 28.7215L15.1551 29.1957L12.5318 30.4588L9.08707 28.8001ZM21.4575 34.7564L19.8604 33.9874L20.9433 33.4659L22.4217 32.7542L21.4575 34.7564ZM25.5552 25.9796C25.9318 25.7983 26.3566 25.7744 26.7513 25.9125C27.1459 26.0506 27.4631 26.3342 27.6444 26.7108C28.0189 27.4885 27.6908 28.4258 26.9131 28.8003L20.5929 31.8433L17.65 33.2603L17.65 33.2603L14.5426 34.7565L13.1845 31.9359L18.3501 29.4487H18.3502L19.149 29.0641L25.5552 25.9796Z" />
            <path d="M35.0766 29.1827C35.0661 29.131 35.0508 29.0802 35.0306 29.0309C35.0104 28.9825 34.9854 28.9357 34.9563 28.8921C34.9273 28.8478 34.8934 28.8066 34.8563 28.7695C34.8191 28.7323 34.778 28.6984 34.7336 28.6694C34.69 28.6395 34.6432 28.6153 34.5939 28.5951C34.5455 28.575 34.4947 28.5589 34.443 28.5492C34.3389 28.5282 34.2316 28.5282 34.1275 28.5492C34.0766 28.5589 34.0258 28.575 33.9766 28.5951C33.9281 28.6153 33.8814 28.6395 33.8378 28.6694C33.7934 28.6984 33.7522 28.7323 33.7151 28.7695C33.678 28.8066 33.6441 28.8477 33.6142 28.8921C33.5852 28.9357 33.5601 28.9825 33.5399 29.0309C33.5198 29.0802 33.5044 29.131 33.494 29.1827C33.4835 29.2344 33.4786 29.2876 33.4786 29.34C33.4786 29.3925 33.4835 29.4458 33.494 29.4974C33.5044 29.5491 33.5198 29.5999 33.5399 29.6483C33.5601 29.6975 33.5852 29.7443 33.6142 29.7879C33.6441 29.8323 33.678 29.8735 33.7151 29.9106C33.7522 29.9478 33.7934 29.9816 33.8378 30.0107C33.8814 30.0397 33.9281 30.0648 33.9766 30.0849C34.0258 30.1051 34.0766 30.1204 34.1275 30.1309C34.1799 30.1414 34.2332 30.1471 34.2857 30.1471C34.3381 30.1471 34.3914 30.1415 34.443 30.1309C34.4947 30.1204 34.5456 30.1051 34.5939 30.0849C34.6432 30.0648 34.69 30.0397 34.7336 30.0107C34.7779 29.9816 34.8191 29.9478 34.8563 29.9106C34.8934 29.8735 34.9273 29.8324 34.9563 29.7879C34.9854 29.7443 35.0104 29.6976 35.0306 29.6483C35.0508 29.5998 35.0661 29.549 35.0766 29.4974C35.087 29.4457 35.0927 29.3925 35.0927 29.34C35.0927 29.2876 35.087 29.2343 35.0766 29.1827Z" />
            <path d="M2.28486 28.7695C2.09762 28.5822 1.81918 28.4959 1.55692 28.5483C1.50524 28.5588 1.4544 28.5741 1.40603 28.5943C1.35681 28.6145 1.30998 28.6395 1.26638 28.6686C1.22202 28.6985 1.18081 28.7323 1.14369 28.7695C0.993571 28.9196 0.907227 29.1278 0.907227 29.3401C0.907227 29.3925 0.912852 29.4458 0.923398 29.4974C0.933875 29.5491 0.949203 29.5999 0.969383 29.6483C0.989563 29.6975 1.01459 29.7444 1.04363 29.788C1.07267 29.8323 1.10656 29.8735 1.14369 29.9106C1.18081 29.9478 1.22195 29.9817 1.26638 30.0107C1.30998 30.0397 1.35681 30.0648 1.40603 30.085C1.45447 30.1051 1.50531 30.1205 1.55692 30.1309C1.6086 30.1414 1.66182 30.1471 1.71428 30.1471C1.92655 30.1471 2.13475 30.0608 2.28486 29.9106C2.32199 29.8735 2.35588 29.8324 2.38576 29.788C2.4148 29.7444 2.43983 29.6976 2.46001 29.6483C2.48019 29.5999 2.49552 29.549 2.506 29.4974C2.51647 29.4457 2.52133 29.3925 2.52133 29.3401C2.52133 29.1278 2.43583 28.9196 2.28486 28.7695Z" />
            <path d="M20.8019 22.7838C20.7914 22.7321 20.7761 22.6812 20.7559 22.6329C20.7357 22.5836 20.7107 22.5368 20.6817 22.4932C20.6526 22.4489 20.6187 22.4077 20.5816 22.3705C20.5445 22.3334 20.5025 22.2995 20.4589 22.2705C20.4146 22.2414 20.3677 22.2164 20.3193 22.1962C20.2708 22.176 20.22 22.1599 20.1684 22.1502C20.0643 22.1293 19.957 22.1293 19.8528 22.1502C19.8011 22.1599 19.7503 22.176 19.7019 22.1962C19.6536 22.2164 19.6067 22.2414 19.5631 22.2705C19.5188 22.2995 19.4776 22.3334 19.4404 22.3705C19.4025 22.4077 19.3694 22.4488 19.3395 22.4932C19.3105 22.5368 19.2855 22.5836 19.2653 22.6329C19.2451 22.6813 19.2298 22.7321 19.2193 22.7838C19.2088 22.8354 19.204 22.8887 19.204 22.9411C19.204 22.9936 19.2088 23.0469 19.2193 23.0985C19.2298 23.1502 19.2451 23.201 19.2653 23.2502C19.2855 23.2987 19.3105 23.3454 19.3395 23.389C19.3694 23.4334 19.4025 23.4746 19.4404 23.5117C19.4776 23.5488 19.5187 23.5827 19.5631 23.6118C19.6067 23.6408 19.6536 23.6658 19.7019 23.686C19.7503 23.7062 19.8012 23.7223 19.8528 23.7328C19.9053 23.7433 19.9577 23.7482 20.011 23.7482C20.0635 23.7482 20.1159 23.7433 20.1684 23.7328C20.2201 23.7224 20.2709 23.7062 20.3193 23.686C20.3677 23.6658 20.4145 23.6408 20.4589 23.6118C20.5025 23.5827 20.5445 23.5488 20.5816 23.5117C20.6187 23.4746 20.6526 23.4334 20.6817 23.389C20.7107 23.3454 20.7357 23.2987 20.7559 23.2502C20.7761 23.201 20.7914 23.1502 20.8019 23.0985C20.8124 23.0468 20.8181 22.9936 20.8181 22.9411C20.8181 22.8887 20.8124 22.8354 20.8019 22.7838Z" />
          </g>
          <defs>
            <clipPath id="clip0_28_20">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(0 0.640625)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      description:
        "Teach a model to classify body positions using files or striking poses in your webcam.",
      link: "/pose",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="innermain w-3/4 mx-auto my-20 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
          {modelDataArray.map((modelData, index) => (
            <Link key={index} to={modelData.link} className="z-10">
              <Model modelData={modelData} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsContainer;