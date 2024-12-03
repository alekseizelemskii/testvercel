import { endSectionImages } from '@/app/adhd-test/static/data/end_section_images';
import { ScreenType } from '@/app/adhd-test/static/data/quiz_data';

export const data = {
  [ScreenType.EndOfSection1]: {
    title: 'Did you know?',
    subtitleForMale:
      'Although many of the symptoms of ADHD are common across all genders, men may experience some symptoms more frequently or more intensely than women.',
    subtitleForFemale:
      'Female symptoms are often misdiagnosed and mistreated since most ADHD research is male-focused.',
    iconForMale: endSectionImages.end_section_icon1,
    iconForFemale: endSectionImages.end_section_icon1,
  },
  [ScreenType.EndOfSection2]: {
    title: "We're here to help",
    subtitle:
      "It's important to remember that everyone's experiences are unique, and just because you identify with some of the symptoms or behaviors associated with ADHD, it doesn't necessarily mean you have the condition.",
    icon: endSectionImages.end_section_icon1,
  },
};
// interface Params {
//   screenType: ScreenType.EndOfSection1 | ScreenType.EndOfSection2;
//   isFemale: boolean;
// }
export const getCurrentImage = (screen: ScreenType, isFemale: boolean) => {
  switch (screen) {
    case ScreenType.EndOfSection1:
      return isFemale ? data[screen].iconForFemale : data[screen].iconForMale;

    default:
      return data[screen].icon;
  }
};

export const getCurrentSubtitle = (screen: ScreenType, isFemale: boolean) => {
  switch (screen) {
    case ScreenType.EndOfSection1:
      return isFemale
        ? data[screen].subtitleForFemale
        : data[screen].subtitleForMale;

    default:
      return data[screen].subtitle;
  }
};
