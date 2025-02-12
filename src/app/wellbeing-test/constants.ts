const BASE_ROUTE = '/wellbeing-test';
export const FUNNEL_ROUTES = Object.freeze({
  GENDER_SELECT: `${BASE_ROUTE}/gender-select/`,
  AGE_SELECT: `${BASE_ROUTE}/age-select/`,
  TEST: `${BASE_ROUTE}/test/`,
  TRIAL: `${BASE_ROUTE}/trial/`,
  EMAIL: `${BASE_ROUTE}/email/`,
  SUCCESS: `${BASE_ROUTE}/success/`,
  PURCHASE_OFFER: `${BASE_ROUTE}/offer/`,
  GRAPH: `${BASE_ROUTE}/graph/`,
  CALCULATING_RESULT: `${BASE_ROUTE}/calculating-results/`,
  PLAN: `${BASE_ROUTE}/plan/`,
  GUIDE_OFFER: `${BASE_ROUTE}/guide-offer/`,
});
export const LOCAL_STORAGE_KEYS = Object.freeze({
  UserEmail: 'user_email',
  PayPalOrder: 'paypal_order',
  UrlParams: 'url_params',
  InitialUrl: 'initial_url',
  DonatData: 'donat_data',
  MentalWellbeingProfile: 'mental_wellbeing_profile',
  RecurringMethod: 'recurring_method',
  Token: 'token',
  SubscriptionId: 'subscription_id',
  AgeRange: 'age_range',
  UserGender: 'user_gender',
  MentalProfileScore: 'mental_profile_score',
  HappinessScore: 'happiness_score',
  FinalAnswer: 'final_answer',
  GuidePurchased: 'guide_purchased',
  PaymentMethod: 'payment_method',
  UserHasSubscription: 'user_has_subscription',
});
