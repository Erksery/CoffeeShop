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
