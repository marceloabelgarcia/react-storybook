import React from 'react';

const StorybookIconSet = () => {
  return (
    <svg style={{ display: 'none' }} id="storybook-icon-set">
      <defs>
        <symbol id="storybook-edslogo" viewBox="0 0 24 24">
          <path
            d="M20.2726 6.54867C19.0905 4.9078 17.381 3.72243 15.4299 3.1907C13.4788 2.65898 11.4043 2.81312 9.55309 3.62738C7.70198 4.44162 6.18644 5.86664 5.25988 7.66418C4.33331 9.46173 4.05186 11.5228 4.46257 13.503L13.3474 9.55102H8.48051C8.82349 8.81138 9.33949 8.16524 9.98493 7.66713C10.6304 7.16902 11.3862 6.83367 12.1886 6.6894C12.991 6.54513 13.8164 6.59618 14.5949 6.83825C15.3734 7.08033 16.0822 7.50627 16.6613 8.08014L20.2726 6.54867Z"
            fill="#003761"
          />
          <path d="M22.08 6.11934L13.1951 15.1578H1.92001L22.08 6.11934Z" fill="#2990EA" />
          <path
            d="M13.0384 16.8341C11.8473 16.8364 10.6919 16.4272 9.76778 15.6758H5.03493C5.802 17.1717 6.97222 18.4233 8.41336 19.289C9.85451 20.1547 11.509 20.6 13.19 20.5746C14.871 20.5492 16.5113 20.054 17.9257 19.1451C19.3399 18.2362 20.4718 16.9498 21.1932 15.4313H16.5923C15.6303 16.3361 14.359 16.8391 13.0384 16.8374"
            fill="#003761"
          />
        </symbol>

        <symbol id="storybook-figmalogo" viewBox="0 0 24 24">
          <g>
            <path
              d="M12.0001 12.24C12.0001 10.447 13.4536 8.99343 15.2467 8.99343C17.0397 8.99343 18.4933 10.447 18.4933 12.24C18.4933 14.0331 17.0397 15.4866 15.2467 15.4866C13.4536 15.4866 12.0001 14.0331 12.0001 12.24Z"
              fill="#1ABCFE"
            />
            <path
              d="M5.50676 18.7332C5.50676 16.9402 6.96031 15.4865 8.75337 15.4865H12V18.7332C12 20.5262 10.5465 21.9798 8.75337 21.9798C6.96031 21.9798 5.50676 20.5262 5.50676 18.7332Z"
              fill="#0ACF83"
            />
            <path
              d="M12.0001 2.50031V8.99351H15.2467C17.0398 8.99351 18.4933 7.53996 18.4933 5.74691C18.4933 3.95387 17.0398 2.50031 15.2467 2.50031H12.0001Z"
              fill="#FF7262"
            />
            <path
              d="M5.50676 5.74691C5.50676 7.53996 6.96031 8.99351 8.75337 8.99351H12V2.50031H8.75337C6.96031 2.50031 5.50676 3.95387 5.50676 5.74691Z"
              fill="#F24E1E"
            />
            <path
              d="M5.50676 12.24C5.50676 14.0331 6.96031 15.4866 8.75337 15.4866H12V8.99343H8.75337C6.96031 8.99343 5.50676 10.447 5.50676 12.24Z"
              fill="#A259FF"
            />
          </g>
        </symbol>
        <symbol id="storybook-reactlogo" viewBox="0 0 24 24">
          <path
            d="M21.6862 11.689C21.6862 10.3788 20.0464 9.13701 17.5323 8.36699C18.1125 5.80289 17.8547 3.76291 16.7185 3.1098C16.4566 2.9566 16.1504 2.88403 15.816 2.88403V3.78307C16.0013 3.78307 16.1504 3.81936 16.2753 3.88789C16.8232 4.20236 17.0609 5.39974 16.8756 6.9398C16.8313 7.31877 16.7587 7.7179 16.6701 8.12508C15.8804 7.93157 15.0182 7.7824 14.1117 7.68565C13.5678 6.9398 13.0038 6.26249 12.4356 5.66986C13.7491 4.44828 14.982 3.77904 15.82 3.77904V2.88C14.712 2.88 13.2615 3.67019 11.795 5.04093C10.3284 3.67825 8.87805 2.89613 7.77008 2.89613V3.79517C8.60408 3.79517 9.84096 4.46038 11.1544 5.67389C10.5903 6.26652 10.0263 6.9398 9.49045 7.68565C8.5799 7.7824 7.71771 7.93157 6.92802 8.12912C6.83535 7.72596 6.76687 7.3349 6.71852 6.95996C6.52915 5.41989 6.76284 4.22251 7.30675 3.90402C7.42762 3.83146 7.58475 3.7992 7.77008 3.7992V2.90016C7.43165 2.90016 7.12545 2.97273 6.85954 3.12592C5.72739 3.77904 5.47357 5.81499 6.05776 8.37102C3.55174 9.14508 1.92 10.3828 1.92 11.689C1.92 12.9993 3.5598 14.241 6.07388 15.011C5.49371 17.5751 5.75156 19.6151 6.88773 20.2682C7.14962 20.4214 7.45582 20.494 7.79426 20.494C8.90222 20.494 10.3526 19.7038 11.8192 18.333C13.2857 19.6957 14.7362 20.4779 15.8441 20.4779C16.1826 20.4779 16.4888 20.4053 16.7547 20.2521C17.8868 19.599 18.1406 17.563 17.5565 15.007C20.0544 14.237 21.6862 12.9952 21.6862 11.689ZM16.4405 8.99994C16.2914 9.52001 16.106 10.0562 15.8965 10.5924C15.7313 10.2699 15.5581 9.94733 15.3687 9.62486C15.1834 9.3023 14.986 8.98785 14.7886 8.68144C15.3607 8.76611 15.9127 8.87093 16.4405 8.99994ZM14.5952 13.2936C14.281 13.8378 13.9586 14.3539 13.6242 14.8336C13.0238 14.886 12.4155 14.9143 11.8031 14.9143C11.1948 14.9143 10.5863 14.886 9.99005 14.8377C9.65568 14.358 9.3293 13.8459 9.01503 13.3057C8.70883 12.7775 8.43084 12.2413 8.17701 11.7011C8.4268 11.1609 8.70883 10.6207 9.01101 10.0925C9.32527 9.54824 9.64762 9.03219 9.98198 8.55244C10.5823 8.50002 11.1907 8.4718 11.8031 8.4718C12.4115 8.4718 13.0198 8.50002 13.6162 8.54841C13.9505 9.02816 14.2769 9.54017 14.5911 10.0804C14.8974 10.6086 15.1754 11.1447 15.4292 11.6849C15.1754 12.2252 14.8974 12.7654 14.5952 13.2936ZM15.8965 12.7694C16.1141 13.3097 16.2995 13.8499 16.4526 14.3741C15.9248 14.503 15.3687 14.6119 14.7926 14.6965C14.99 14.3862 15.1874 14.0676 15.3728 13.7411C15.5581 13.4186 15.7313 13.092 15.8965 12.7694ZM11.8112 17.0712C11.4365 16.6841 11.0618 16.2528 10.6911 15.7811C11.0537 15.7972 11.4244 15.8093 11.7991 15.8093C12.1778 15.8093 12.5525 15.8012 12.9191 15.7811C12.5565 16.2528 12.1818 16.6841 11.8112 17.0712ZM8.81359 14.6965C8.24148 14.6119 7.6895 14.507 7.16171 14.3781C7.31077 13.858 7.49611 13.3218 7.70562 12.7856C7.87081 13.1081 8.04405 13.4307 8.23341 13.7532C8.42278 14.0757 8.61616 14.3902 8.81359 14.6965ZM11.791 6.30685C12.1657 6.69388 12.5404 7.12525 12.911 7.59695C12.5484 7.58082 12.1778 7.56873 11.8031 7.56873C11.4244 7.56873 11.0497 7.57679 10.6831 7.59695C11.0457 7.12525 11.4204 6.69388 11.791 6.30685ZM8.80956 8.68144C8.61214 8.99188 8.41472 9.31037 8.22939 9.63696C8.04405 9.95942 7.87081 10.282 7.70562 10.6045C7.48806 10.0643 7.30272 9.52405 7.14962 8.99994C7.67742 8.87496 8.23341 8.76611 8.80956 8.68144ZM5.16333 13.729C3.73707 13.1202 2.81443 12.322 2.81443 11.689C2.81443 11.056 3.73707 10.2538 5.16333 9.64906C5.50982 9.49985 5.88854 9.36682 6.27936 9.24183C6.50901 10.032 6.81118 10.8544 7.18588 11.697C6.81521 12.5357 6.51707 13.3541 6.29145 14.1402C5.89258 14.0152 5.51386 13.8781 5.16333 13.729ZM7.33093 19.4901C6.78299 19.1756 6.54527 17.9783 6.73061 16.4382C6.77492 16.0593 6.84745 15.6601 6.93609 15.253C7.72576 15.4464 8.58797 15.5956 9.49449 15.6924C10.0384 16.4382 10.6024 17.1156 11.1706 17.7082C9.85709 18.9298 8.62423 19.599 7.7862 19.599C7.60489 19.5949 7.45179 19.5587 7.33093 19.4901ZM16.8876 16.418C17.0771 17.9581 16.8434 19.1555 16.2995 19.474C16.1786 19.5466 16.0214 19.5788 15.8361 19.5788C15.0021 19.5788 13.7652 18.9136 12.4518 17.7001C13.0158 17.1075 13.5799 16.4341 14.1157 15.6883C15.0263 15.5916 15.8885 15.4424 16.6782 15.2449C16.7708 15.652 16.8434 16.0431 16.8876 16.418ZM18.4388 13.729C18.0924 13.8781 17.7136 14.0112 17.3228 14.1362C17.0932 13.346 16.791 12.5236 16.4163 11.6809C16.7869 10.8423 17.0851 10.0239 17.3107 9.2378C17.7096 9.36278 18.0883 9.49985 18.4428 9.64906C19.8691 10.2578 20.7918 11.056 20.7918 11.689C20.7877 12.322 19.8651 13.1243 18.4388 13.729Z"
            fill="#61DAFB"
          />
          <path
            d="M11.7992 13.5314C12.816 13.5314 13.6404 12.7066 13.6404 11.689C13.6404 10.6715 12.816 9.84653 11.7992 9.84653C10.7822 9.84653 9.95789 10.6715 9.95789 11.689C9.95789 12.7066 10.7822 13.5314 11.7992 13.5314Z"
            fill="#61DAFB"
          />
        </symbol>
      </defs>
    </svg>
  );
};
export default StorybookIconSet;
