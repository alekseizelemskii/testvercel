import { ReactElement } from 'react';

const ageStatementSelector = (ageRange: string): string => {
  switch (ageRange) {
    case '18-21':
    case '22-25':
    case '26-30':
      return 'in their 20s';

    case '31-35':
    case '36-40':
      return 'in their 30s';

    case '41-45':
    case '46-50':
      return 'in their 40s';

    case '51-55':
    case '56-60':
      return 'in their 50s';

    case '61-65':
    case '66-70':
      return 'in their 60s';

    case '71+':
      return 'in their 70s';
    default:
      return 'in their 30s';
  }
};
const genderStatementSelector = (gender: string): string => {
  switch (gender) {
    case 'Female':
      return 'women';
    case 'Male':
      return 'men';
    default:
      return 'individuals';
  }
};

export const getPrimaryText = (ageRange: string, gender: string): ReactElement => {
  const gender_statement = genderStatementSelector(gender);
  const age_statement = ageStatementSelector(ageRange);

  return (
    <p>
      Breeze has guided <span>206,455</span>
      <br /> {gender_statement} {age_statement} on a<br /> transformative journey to a<br /> better
      mental well-being and
      <br /> emotional resilience.
    </p>
  );
};

// export const getDescription = (
//     ageRange: string,
//     gender: string,
// ): ReactElement => {
//     const gender_statement = genderStatementSelector(gender);
//     const age_statement = ageStatementSelector(ageRange);
//
//     switch (ageRange) {
//         case AgeRange["18-21"]:
//         case AgeRange["22-25"]:
//             return (
//                 <p>
//                     Breeze's tailored plans have helped <span>60k+</span>
//                     {gender_statement} in their teens and 20s learn how to navigate
//                     emotions and find their path
//                 </p>
//             );
//         case AgeRange["26-30"]:
//         case AgeRange["31-35"]:
//             return (
//                 <p>
//                     We've helped <span>60k+</span> {gender_statement} in their 20s and 30s
//                     identify their mental well-being type and cultivate a more fulfilling
//                     life
//                 </p>
//             );
//         case AgeRange["36-40"]:
//         case AgeRange["41-45"]:
//             return (
//                 <p>
//                     Our tailored plans have aided <span>60k+</span> {gender_statement} in
//                     their 30s and 40s to find their hidden strengths
//                 </p>
//             );
//         case AgeRange["46-50"]:
//         case AgeRange["51-55"]:
//             return (
//                 <p>
//                     Our tailored plans have aided <span>60k+</span> {gender_statement} in
//                     their 40s and 50s to regain calm and navigate complex emotions
//                 </p>
//             );
//         case AgeRange["56-60"]:
//         case AgeRange["61-65"]:
//         case AgeRange["66-70"]:
//         case AgeRange["71+"]:
//             return (
//                 <p>
//                     We've helped <span>60k+</span> {gender_statement} in their 50s
//                     identify their mental well-being type and cultivate a more fulfilling
//                     life
//                 </p>
//             );
//         default:
//             return (
//                 <p>
//                     Our tailored plans have aided <span>60k+</span> {gender_statement} to
//                     find their hidden strengths
//                 </p>
//             );
//     }
// };

// export const getTitle = (ageRange: string): string => {
//     switch (ageRange) {
//         case AgeRange["18-21"]:
//         case AgeRange["22-25"]:
//             return "Your life journey is just starting!";
//         case AgeRange["26-30"]:
//         case AgeRange["31-35"]:
//             return "At Breeze, we get that the path to mental well-being is unique for everyone.";
//         case AgeRange["36-40"]:
//         case AgeRange["41-45"]:
//             return "There is no such thing as knowing yourself too well!";
//         case AgeRange["46-50"]:
//         case AgeRange["51-55"]:
//             return "Some days are an emotional roller coaster?";
//         case AgeRange["56-60"]:
//         case AgeRange["61-65"]:
//         case AgeRange["66-70"]:
//         case AgeRange["71+"]:
//             return "There is no such thing as knowing yourself too well!";
//         default:
//             return "At Breeze, we get that the path to mental well-being is unique for everyone.";
//     }
// };
