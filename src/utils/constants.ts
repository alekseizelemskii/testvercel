export const FUNNELS = Object.freeze({
  EMOTIONAL_INTELLIGENCE: 'emotional_intelligence',
  ADHD: 'adhd',
  CHILDHOOD_TRAUMA: 'childhood_trauma',
  WELLBEING_TEST: 'wellbeing_test',
  PERSONALITY_TYPE: 'personality_type',
  CHILDHOOD_TRAUMA_SHORT: 'childhood_trauma_short',
} as const);

export type FunnelName = keyof typeof FUNNELS;
export type FunnelValue = (typeof FUNNELS)[FunnelName];

export const GENDERS = Object.freeze({
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
});

export const AGE_RANGE = Object.freeze([
  '18-21',
  '22-25',
  '26-30',
  '31-35',
  '36-40',
  '41-45',
  '46-50',
  '51-55',
  '56-60',
  '61-65',
  '66-70',
  '71+',
]);
