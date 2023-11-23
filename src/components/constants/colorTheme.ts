interface Text {
  text1: number;
  text2: number;
  text2i5: number;
  text3: number;
  text4: number;
  text5: number;
  text6: number;
}

interface Weight {
  weight1: string;
  weight2: string;
}

interface Fonts {
  textBold: string;
}

interface Card {
  borderRadiusCard: number;
}

interface Color {
  background: string;
  basicColor: string;
  textColor: string;
  additionalTextColor: string;
  elementBackground: string;
  statusBarContent: string;
  borderButtonColor: string;
  iconColor: string;
  cardGradient1: string;
  cardGradient2: string;
  tabActiveColor: string;
  lightGrayColor: string;
}

export const textSize: Text = {
  text1: 28,
  text2: 20,
  text2i5: 17,
  text3: 16,
  text4: 14,
  text5: 12,
  text6: 10,
};

export const textWeight: Weight = {
  weight1: '700',
  weight2: '400',
};

export const textFont: Fonts = {
  textBold: 'Poppins-SemiBold',
};

export const lightModeColors: Color = {
  background: '#FCFCFC',
  basicColor: '#D17842',
  textColor: '#0C0F14',
  additionalTextColor: '#52555A',
  elementBackground: '#F8F8F8',
  statusBarContent: 'dark-content',
  borderButtonColor: '#AEAEAE',
  iconColor: '#e5e5e5',
  cardGradient1: '#E8E8E8',
  cardGradient2: '#FFFFFF',
  tabActiveColor: '#000000',
  lightGrayColor: '#AEAEAE',
};

export const darkModeColors: Color = {
  background: '#0C0F14',
  basicColor: '#D17842',
  textColor: '#FFFFFF',
  additionalTextColor: '#52555A',
  elementBackground: '#141921',
  statusBarContent: 'light-content',
  borderButtonColor: '#52555A',
  iconColor: '#52555A',
  cardGradient1: '#252A32',
  cardGradient2: '#0C0F14',
  tabActiveColor: '#D17842',
  lightGrayColor: '#AEAEAE',
};

export const coffeeCardStyle = {
  borderRadiusCard: 25,
};
