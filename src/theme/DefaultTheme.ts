const defaultTheme: any = {
  colors: {
    //not use
    gray: {
      100: '#eaecf0',
      200: '#d8dde5',
    },
    primary: {
      light: '',
      pale: '#FF7773',
      neutral: '#262626',
      dark: '#1f1f1f',
      darker: '#000000',
    },
    secondary: {
      light: '#3C6699',
      pale: '#4D596B',
      neutral: '#2D394B',
      dark: '#12171F',
      darker: '#080A0E',
    },
    default: {
      light: '#00000040',
      pale: '#f5f5f5',
      neutral: '#767676',
      dark: '',
      darker: '#323232',
    },
    danger: {
      light: '#1890ff',
      pale: '#ff7a51',
      neutral: '#EB1C0D',
      dark: '#EB1C0D',
      darker: '#9b59b6',
    },
    success: {
      light: '',
      pale: '#2ecc71',
      neutral: '#21ba45',
      dark: '#008319',
      darker: '',
    },
    warning: {
      light: '',
      pale: '#fecb02',
      neutral: '#FAA209',
      dark: '#FA8500',
      darker: '#CC6407',
    },
    info: {
      light: '#effefe',
      pale: '#C3D9FF',
      neutral: '',
      dark: '#4096EE',
      darker: '#356AA0',
    },
    background: {
      light: '#ffffff',
      pale: '#eaeaea',
      neutral: '#f7f7f7',
      dark: '#e6e6e6',
      darker: '#000000',
    },
    socialMediaIcons: {
      facebook: '#4267b2',
      twitter: '#1DA1F2',
      linkedIn: '#0e76a8',
      google: '#db4a39',
      apple: '#a3aaae',
    },
    shades: {
      green: '#2ECC71',
      blue: '#1890FF',
      orange: '#FF7A51',
      purple: '#9B59B6',
      red: '#FF5851',
    },
    colorsWithOpacity: {
      black: {
        50: '#00000080',
      },
    },
  },
  typography: {
    display2xl: {
      fontSize: '72px',
      lineHeight: '90px',
    },
    displayxl: {
      fontSize: '60px',
      lineHeight: '72px',
    },
  },
  fonts: {
    primary: `'sans-serif', Nunito Sans`,
    size: {
      medium: '16px',
      small: '14px',
      extraLarge: '30px',
      large: '18px',
      gigantic: '40px',
      larger: '24px',
      smaller: '12px',
    },
    weight: {
      normal: 500,
      strong: 600,
      weak: 400,
      strongest: 700,
      weaker: 300,
    },
    lineHeight: {
      small: '15px',
      medium: '20px',
      large: '24px',
      larger: '26px',
      extraLarge: '30px',
      largest: '40px',
      gigantic: '50px',
    },
    color: {
      light: '#FFFFFF',
      pale: '#F5F5F5',
      neutral: '#767676',
      softDark: '#4D4D4D',
      dark: '#323232',
      darker: '#000000',
    },
    shades: {
      green: '#237804',
      blue: '#061178',
      orange: '#873800',
      purple: '#22075e',
      red: '#a8071a',
    },
  },
  padding: {
    jumbo: '40px',
    gigantic: '32px',
    larger: '24px',
    large: '20px',
    medium: '16px',
    small: '12px',
    smaller: '8px',
    smallest: '4px',
  },
  radius: {
    medium: '5px',
    large: '10px',
    larger: '9px',
    gigantic: '20px',
    small: '4px',
    smaller: '2px',
  },
  border: {
    smaller: '1px',
    small: '2px',
    medium: '3px',
    large: '4px',
  },
  margin: {
    jumbo: '40px',
    gigantic: '32px',
    larger: '24px',
    large: '20px',
    medium: '16px',
    small: '12px',
    smaller: '8px',
    smallest: '4px',
  },
  zIndex: {
    max: 2000,
    min: 1,
  },
  screenSize: {
    xs: '320px',
    sm: '768px',
    lg: '1200px',
  },
  device: {
    xs: '(max-width: 320px)',
    sm: '(max-width: 768px)',
    lg: '(max-width: 1200px)',
  },
  breakPoints: {
    xs: 'max-width: 320px',
    sm: 'max-width: 480px',
    md: 'max-width: 768px',
    lg: 'max-width: 1024px',
    xl: 'max-width: 1280px',
    dxl: 'max-width: 1440px',
  },
  gaps: {
    jumbo: '40px',
    gigantic: '32px',
    larger: '24px',
    large: '20px',
    medium: '16px',
    small: '12px',
    smaller: '8px',
    smallest: '4px',
  },
  primary: {
    primary25: '#f8ffff',
    primary50: '#edffff',
    primary100: '#c9feff',
    primary200: '#94feff',
    primary300: '#37f3f5',
    primary400: '#00e4e8',
    primary500: '#01b8bf',
    primary600: '#4E535B',
    primary700: '#028392',
    primary800: '#03697b',
    primary900: '#07486b',
  },
  gray: {
    gray25: '#F5F6F7',
    gray50: '#ECEEF0',
    gray100: '#E5E7EB',
    gray200: '#D3D5DB',
    gray300: '#B6B8BD',
    gray400: '#999EA6',
    gray500: '#6B7078',
    gray600: '#4E535B',
    gray700: '#3A3F47',
    gray800: '#232830',
    gray900: '#131820',
  },
  error: {
    error25: '#FEF6FB',
    error50: '#FDF2FA',
    error100: '#FCE7F6',
    error200: '#FCCEEE',
    error300: '#FAA7E0',
    error400: '#F670C7',
    error500: '#EE46BC',
    error600: '#DD2590',
    error700: '#C11574',
    error800: '#9E165F',
    error900: '#9E165F',
  },
  employer: {
    employer25: '#F0FFFF',
    employer50: '#E3FFFF',
    employer100: '#C5F9FA',
    employer200: '#86F6FA',
    employer300: '#61E9ED',
    employer400: '#36D8DE',
    employer500: '#01B8BF',
    employer600: '#039CAA',
    employer700: '#048095',
    employer800: '#066480',
    employer900: '#07486B',
  },
  freelancer: {
    freelancer25: '#F0F2FA',
    freelancer50: '#E6EBFA',
    freelancer100: '#D2DCFA',
    freelancer200: '#AEBDF3',
    freelancer300: '#8A9DED',
    freelancer400: '#667EE7',
    freelancer500: '#425EE0',
    freelancer600: '#374EBB',
    freelancer700: '#2C3F95',
    freelancer800: '#212F70',
    freelancer900: '#161F4B',
  },
  warning: {
    warning25: '#FFFCF5',
    warning50: '#FEFBE8',
    warning100: '#FEF0C7',
    warning200: '#FEDF89',
    warning300: '#FEC84B',
    warning400: '#FDB022',
    warning500: '#F79009',
    warning600: '#DC6803',
    warning700: '#B54708',
    warning800: '#93370D',
    warning900: '#7A2E0E',
  },
  success: {
    success25: '#FAFEF5',
    success50: '#F3FEE7',
    success100: '#E4FBCC',
    success200: '#D0F8AB',
    success300: '#A6EF67',
    success400: '#85E13A',
    success500: '#66C61C',
    success600: '#4CA30D',
    success700: '#3B7C0F',
    success800: '#326212',
    success900: '#2B5314',
  },
};
export default defaultTheme;
