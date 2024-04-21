import Link from "next/link";

export const Logo = ({className}:{className: string}) => {
  return (
    <Link href="/">
    <svg
    className={className}
      viewBox="0 0 215 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#71BC78" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.2385 11.7825C31.0201 13.5641 32.021 15.9804 32.021 18.5H22.521H13.0835C13.0835 15.9804 14.0219 13.5641 15.8035 11.7825C17.5851 10.0009 20.0014 9 22.521 9C25.0405 9 27.4569 10.0009 29.2385 11.7825ZM9.78249 27.7175C8.00089 25.9359 7 23.5196 7 21L16.5 21L25.9375 21C25.9375 23.5196 24.9991 25.9359 23.2175 27.7175C21.4359 29.4991 19.0196 30.5 16.5 30.5C13.9804 30.5 11.5641 29.4991 9.78249 27.7175Z"
        fill="white"
      />
      <path
        d="M52.514 19.416C52.514 15.7013 53.186 12.9667 54.53 11.212C55.8927 9.43867 58.142 8.552 61.278 8.552C62.286 8.552 63.3033 8.72933 64.33 9.084C65.3753 9.42 66.3553 9.94267 67.27 10.652L66.654 14.208L66.094 14.46C65.59 13.8627 64.9087 13.3867 64.05 13.032C63.1913 12.6773 62.2673 12.5 61.278 12.5C60.1393 12.5 59.234 12.7333 58.562 13.2C57.9087 13.648 57.4327 14.3667 57.134 15.356C56.854 16.3453 56.714 17.6987 56.714 19.416C56.714 21.2267 56.8353 22.6453 57.078 23.672C57.3207 24.68 57.722 25.408 58.282 25.856C58.8607 26.2853 59.654 26.5 60.662 26.5C61.9313 26.5 62.8553 26.136 63.434 25.408C64.0127 24.68 64.302 23.4853 64.302 21.824H60.27V17.96H68.222V30H65.982L65.282 27.9C64.7967 28.6467 64.0967 29.2627 63.182 29.748C62.2673 30.2147 61.334 30.448 60.382 30.448C58.5527 30.448 57.0593 30.0653 55.902 29.3C54.7633 28.5347 53.914 27.3493 53.354 25.744C52.794 24.12 52.514 22.0107 52.514 19.416ZM78.0935 13.004C79.2322 13.004 80.1095 13.1347 80.7255 13.396L80.0815 16.84L79.7175 17.092C79.1389 16.7187 78.3082 16.532 77.2255 16.532C76.6282 16.532 76.0962 16.6533 75.6295 16.896C75.1815 17.1387 74.7615 17.5307 74.3695 18.072V25.8L74.6495 30H70.1695L70.4495 25.8V17.26L70.1695 13.2H73.8095L74.2855 14.964C75.2375 13.6573 76.5069 13.004 78.0935 13.004ZM88.1094 30.448C85.5894 30.448 83.7508 29.7013 82.5934 28.208C81.4548 26.7147 80.8854 24.5027 80.8854 21.572C80.8854 18.6413 81.4548 16.4387 82.5934 14.964C83.7508 13.4893 85.5894 12.752 88.1094 12.752C90.6294 12.752 92.4588 13.4893 93.5974 14.964C94.7548 16.4387 95.3334 18.6413 95.3334 21.572C95.3334 24.5027 94.7548 26.7147 93.5974 28.208C92.4588 29.7013 90.6294 30.448 88.1094 30.448ZM88.1094 26.584C88.9868 26.584 89.6494 26.444 90.0974 26.164C90.5454 25.8653 90.8534 25.3707 91.0214 24.68C91.2081 23.9707 91.3014 22.944 91.3014 21.6C91.3014 20.256 91.2081 19.2387 91.0214 18.548C90.8534 17.8387 90.5454 17.344 90.0974 17.064C89.6494 16.7653 88.9868 16.616 88.1094 16.616C87.2321 16.616 86.5694 16.7653 86.1214 17.064C85.6734 17.344 85.3561 17.8387 85.1694 18.548C85.0014 19.2387 84.9174 20.256 84.9174 21.6C84.9174 22.944 85.0014 23.9707 85.1694 24.68C85.3561 25.3707 85.6734 25.8653 86.1214 26.164C86.5694 26.444 87.2321 26.584 88.1094 26.584ZM119.64 13.2L118.24 17.26L115.72 30H109.448L107.404 17.848L105.36 30H99.0883L96.5963 17.26L95.1683 13.2H100.096L102.252 27.284L104.24 17.26L104.884 13.2H109.924L110.54 17.26L112.556 27.312L114.712 13.2H119.64ZM119.781 14.32L121.573 13.2L122.413 9.7H125.493V13.2H129.917V16.98H125.493V24.372C125.493 25.0253 125.633 25.5293 125.913 25.884C126.212 26.2387 126.641 26.416 127.201 26.416C127.798 26.416 128.34 26.304 128.825 26.08C129.329 25.856 129.74 25.548 130.057 25.156L130.645 25.436L129.777 28.88C129.012 29.4587 128.377 29.8413 127.873 30.028C127.388 30.2333 126.79 30.336 126.081 30.336C124.998 30.336 124.13 30.1213 123.477 29.692C122.824 29.244 122.338 28.5347 122.021 27.564C121.722 26.5747 121.573 25.2307 121.573 23.532V16.98H119.781V14.32ZM140.96 25.8V18.604C140.96 17.988 140.783 17.5027 140.428 17.148C140.092 16.7747 139.635 16.588 139.056 16.588C137.88 16.588 136.882 17.2227 136.06 18.492V25.8L136.34 30H131.86L132.14 25.8V11.66L131.86 7.6H136.34L136.06 11.66V15.244C137.05 13.7507 138.58 13.004 140.652 13.004C141.959 13.004 142.986 13.4147 143.732 14.236C144.498 15.0573 144.88 16.2613 144.88 17.848V25.8L145.16 30H140.68L140.96 25.8ZM147.488 25.8V11.66L147.208 7.6H151.688L151.408 11.66V25.8L151.688 30H147.208L147.488 25.8ZM160.691 30.448C158.171 30.448 156.332 29.7013 155.175 28.208C154.036 26.7147 153.467 24.5027 153.467 21.572C153.467 18.6413 154.036 16.4387 155.175 14.964C156.332 13.4893 158.171 12.752 160.691 12.752C163.211 12.752 165.04 13.4893 166.179 14.964C167.336 16.4387 167.915 18.6413 167.915 21.572C167.915 24.5027 167.336 26.7147 166.179 28.208C165.04 29.7013 163.211 30.448 160.691 30.448ZM160.691 26.584C161.568 26.584 162.231 26.444 162.679 26.164C163.127 25.8653 163.435 25.3707 163.603 24.68C163.789 23.9707 163.883 22.944 163.883 21.6C163.883 20.256 163.789 19.2387 163.603 18.548C163.435 17.8387 163.127 17.344 162.679 17.064C162.231 16.7653 161.568 16.616 160.691 16.616C159.813 16.616 159.151 16.7653 158.703 17.064C158.255 17.344 157.937 17.8387 157.751 18.548C157.583 19.2387 157.499 20.256 157.499 21.6C157.499 22.944 157.583 23.9707 157.751 24.68C157.937 25.3707 158.255 25.8653 158.703 26.164C159.151 26.444 159.813 26.584 160.691 26.584ZM177.764 12.864C179.686 12.864 181.133 13.5733 182.104 14.992C183.093 16.4107 183.588 18.604 183.588 21.572C183.588 24.372 183.056 26.5187 181.992 28.012C180.946 29.4867 179.444 30.224 177.484 30.224C176.849 30.224 176.177 30.0653 175.468 29.748C174.777 29.412 174.254 28.992 173.9 28.488L173.816 30H169.7L169.98 25.828V11.66L169.7 7.6H174.18L173.9 11.66V13.816C174.366 13.5173 174.936 13.284 175.608 13.116C176.28 12.948 176.998 12.864 177.764 12.864ZM176.924 26.444C177.614 26.444 178.146 26.304 178.52 26.024C178.893 25.7253 179.154 25.2307 179.304 24.54C179.472 23.8493 179.556 22.86 179.556 21.572C179.556 20.228 179.472 19.22 179.304 18.548C179.136 17.8573 178.846 17.3813 178.436 17.12C178.025 16.8587 177.428 16.728 176.644 16.728C175.43 16.728 174.516 16.8493 173.9 17.092V25.632C174.217 25.856 174.665 26.052 175.244 26.22C175.841 26.3693 176.401 26.444 176.924 26.444ZM193.439 12.864C195.362 12.864 196.809 13.5733 197.779 14.992C198.769 16.4107 199.263 18.604 199.263 21.572C199.263 24.372 198.731 26.5187 197.667 28.012C196.622 29.4867 195.119 30.224 193.159 30.224C192.525 30.224 191.853 30.0653 191.143 29.748C190.453 29.412 189.93 28.992 189.575 28.488L189.491 30H185.375L185.655 25.828V11.66L185.375 7.6H189.855L189.575 11.66V13.816C190.042 13.5173 190.611 13.284 191.283 13.116C191.955 12.948 192.674 12.864 193.439 12.864ZM192.599 26.444C193.29 26.444 193.822 26.304 194.195 26.024C194.569 25.7253 194.83 25.2307 194.979 24.54C195.147 23.8493 195.231 22.86 195.231 21.572C195.231 20.228 195.147 19.22 194.979 18.548C194.811 17.8573 194.522 17.3813 194.111 17.12C193.701 16.8587 193.103 16.728 192.319 16.728C191.106 16.728 190.191 16.8493 189.575 17.092V25.632C189.893 25.856 190.341 26.052 190.919 26.22C191.517 26.3693 192.077 26.444 192.599 26.444ZM214.555 13.2L213.155 17.26L209.879 30C208.815 32.688 207.303 34.704 205.343 36.048L202.011 32.884L202.235 32.604C202.813 32.4547 203.467 32.1 204.195 31.54C204.941 30.9987 205.427 30.4853 205.651 30H203.859L200.611 17.26L199.183 13.2H204.111L204.727 17.26L206.855 27.088L208.983 17.26L209.627 13.2H214.555Z"
        fill="black"
      />
    </svg>
    </Link>

  );
};