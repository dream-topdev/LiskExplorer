import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard screen mobile device
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size;
const scaleHorizontal = (size: number) => (width / guidelineBaseWidth) * size;
const scaleModerate = (size: number, factor: number = 0.5) =>
  size + (scaleHorizontal(size) - size) * factor;
const scale = scaleModerate;
export { width, height, scaleHorizontal, scaleVertical, scaleModerate, scale };
