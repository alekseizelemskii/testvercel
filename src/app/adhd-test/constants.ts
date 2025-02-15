const BASE_ROUTE = '/adhd-test';
export const FUNNEL_ROUTES = Object.freeze({
  HOME: `${BASE_ROUTE}/`,
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

export const COOKIE_KEYS = Object.freeze({
  USER_GENDER: 'user-gender',
  USER_AGE_RANGE: 'user-age-range',
});
export const LOCAL_STORAGE_KEYS = Object.freeze({
  URL_PARAMS: 'url_params',
  USER_CONSENT: 'user_consent',
  DONAT_DATA: 'donatData',
  INITIAL_URL: 'initial_url',
  USER_EMAIL: 'userEmail',
  ADHD_RESULT: 'adhd_result',
  RECURRING_METHOD: 'recurring_method',
  TOKEN: 'token',
  SUBSCRIPTION_ID: 'subscription_id',
  PAYPAL_ORDER_ID: 'paypal_order_id',
  USER_GENDER: 'user_gender',
  USER_AGE_RANGE: 'user_age_range',
  QUIZ_SCORE: 'quizScore',
  SYMPTOMS: 'symptoms',
  GUIDE_PURCHASED: 'guide_purchased',
  PAYMENT_METHOD: 'payment_method',
  USER_HAS_SUBSCRIPTION: 'user_has_subscription',
});
