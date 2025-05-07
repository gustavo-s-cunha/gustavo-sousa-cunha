// import { keyframes } from '@emotion/react';
import { keyframes } from '@mui/system';
import { calcRgbaColor } from '../utils/Functions';

// Defina a animação de expansão e dissipação
export const expandAndFade = (hexColor, time) => {
  return keyframes`
    0% {
      box-shadow: 0 0 0px 0px ${calcRgbaColor(hexColor, '20')};
      opacity: 1;
    }
    50% {
      box-shadow: 0 0 0px 5px ${calcRgbaColor(hexColor, '50')};
      opacity: 0.7;
    }
    100% {
      box-shadow: 0 0 0px 10px ${calcRgbaColor(hexColor, '0')};
      opacity: 1;
    }
  ` + ` ${time}s linear infinite`
};

