import { AgeRange } from '@/utils/types';

export const ageStatementSelector = (ageRange: AgeRange | string): string => {
  switch (ageRange) {
    case '18-21':
    case '22-25':
    case '26-30':
      return ' in their 20s';

    case '31-35':
    case '36-40':
      return ' in their 30s';

    case '41-45':
    case '46-50':
      return ' in their 40s';

    case '51-55':
    case '56-60':
      return ' in their 50s';

    case '61-65':
    case '66-70':
      return ' in their 60s';

    case '71+':
      return ' in their 70s';
  }
};
