import { FUNNELS, FunnelValue } from '@/utils/constants';
import { ABTest } from '@/utils/firebase/interfaces';

export const funnelAbTestLists: Record<FunnelValue, ABTest[]> = {
  [FUNNELS.EMOTIONAL_INTELLIGENCE]: [],
  [FUNNELS.ADHD]: [
    { name: 'show_after_purchase_offer', type: 'boolean', default: false },
    {
      name: 'should_autoscroll_to_payment_form',
      type: 'boolean',
      default: false,
    },
    {
      name: 'additional_question_on_calculate_page',
      type: 'boolean',
      default: true,
    },
    { name: 'additional_term_info_text', type: 'boolean', default: true },
    { name: 'start_screen_with_loader', type: 'boolean', default: false },
    { name: 'monthly_20_usd', type: 'boolean', default: false },
    { name: 'entity', type: 'string', default: 'us' },
    { name: 'cookies_europe', type: 'boolean', default: true },
    { name: 'new_payment_as_accordion', type: 'boolean', default: true },
    {
      name: 'autoscroll_to_payment',
      type: 'string',
      default: 'new_autoscroll',
    },
    { name: 'show_guide_offer', type: 'boolean', default: false },
    {
      name: 'show_guide_payment_confirmation',
      type: 'boolean',
      default: false,
    },
    { name: 'new_payment_as_accordion', type: 'boolean', default: true },
    { name: 'pdf_guide_price_amount', type: 'number', default: 999 },
    { name: 'pdf_guide_notification', type: 'string', default: 'toast' },
    { name: 'has_invoice_email', type: 'boolean', default: false },
    { name: 'meta_pixel_notice', type: 'boolean', default: false },

    // location AB
    { name: 'is_user_from_europe', type: 'boolean', default: false },
    { name: 'is_user_from_uk', type: 'boolean', default: false },
    { name: 'is_user_from_australia', type: 'boolean', default: false },

    // BA-SSO AB
    {
      name: 'welcome_email_trigger_event',
      type: 'string',
      default: 'purchase',
    },
    { name: 'sso_sign_up_go_to_breeze_btn', type: 'boolean', default: true },
  ],
  [FUNNELS.CHILDHOOD_TRAUMA]: [
    {
      name: 'autoscroll_to_payment',
      type: 'string',
      default: 'without_autoscroll',
    },
    { name: 'entity', type: 'string', default: 'eu' },
    { name: 'cookies_europe', type: 'boolean', default: true },
    { name: 'trial_payment_info_visibility', type: 'boolean', default: true },
    { name: 'show_discount_popup', type: 'boolean', default: false },
    { name: 'high_result_instead_moderate', type: 'boolean', default: false },
    { name: 'show_guide_offer', type: 'boolean', default: true },
    {
      name: 'show_guide_payment_confirmation',
      type: 'boolean',
      default: false,
    },
    { name: 'without_success_page', type: 'boolean', default: true },
    {
      name: 'show_email_after_first_question',
      type: 'boolean',
      default: false,
    },
    { name: 'email_screen_display', type: 'string', default: 'image' },
    { name: 'email_screen_title_options', type: 'string', default: 'default' },
    {
      name: 'email_warning_text',
      type: 'string',
      default:
        'We promise not to use your email for any activities, and we guarantee its 100% safety and privacy.',
    },
    { name: 'pdf_guide_discounted_price_amount', type: 'number', default: 499 },
    { name: 'pdf_guide_image', type: 'string', default: 'default' },
    { name: 'show_guide_discount', type: 'boolean', default: false },
    { name: 'show_email_checkbox', type: 'boolean', default: false },
    { name: 'has_invoice_email', type: 'boolean', default: false },
    { name: 'meta_pixel_notice', type: 'boolean', default: false },
    { name: 'trial_screen_new_text', type: 'boolean', default: false },
    { name: 'skip_trial_selection', type: 'boolean', default: false },
    { name: 'monthly_20_usd', type: 'boolean', default: false },

    // BA_SSO AB
    { name: 'sso_sign_up_go_to_breeze_btn', type: 'boolean', default: true },
    {
      name: 'welcome_email_trigger_event',
      type: 'string',
      default: 'purchase',
    },

    // Location AB
    { name: 'is_user_from_uk', type: 'boolean', default: false },
    { name: 'is_user_from_europe', type: 'boolean', default: false },
    { name: 'is_user_from_australia', type: 'boolean', default: false },

    // BetterHelp AB

    // Breeze WEB AB
    { name: 'direct_user_flow', type: 'string', default: 'mobile_app' },

    // OLD BUT NECESSARY AB AS HARDCODE
    { name: 'light_theme', type: 'boolean', default: false },
  ],
  [FUNNELS.WELLBEING_TEST]: [
    {
      name: 'autoscroll_to_payment',
      type: 'string',
      default: 'autoscroll_for_all',
    },
    {
      name: 'disabled_events',
      type: 'string',
      default:
        'step_completed, claim_button_clicked, validation_mistake_shown, graph_screen_shown, config_received',
    },
    {
      name: 'email_warning_text',
      type: 'string',
      default:
        'We promise not to use your email for any activities, and we guarantee its 100% safety and privacy.',
    },
    { name: 'entity', type: 'string', default: 'eu' },
    { name: 'has_invoice_email', type: 'boolean', default: false },

    // location AB
    { name: 'is_user_from_europe', type: 'boolean', default: false },
    { name: 'is_user_from_uk', type: 'boolean', default: false },
    { name: 'is_user_from_australia', type: 'boolean', default: false },

    { name: 'meta_pixel_notice', type: 'boolean', default: false },
    { name: 'monthly_20_usd', type: 'boolean', default: false },
    { name: 'new_payment_as_accordion', type: 'boolean', default: false },
    { name: 'pdf_guide_notification', type: 'string', default: 'toast' },
    { name: 'pdf_guide_price_amount', type: 'number', default: 999 },
    { name: 'purchase_block_plug', type: 'boolean', default: false },
    { name: 'show_additional_result_block', type: 'boolean', default: true },
    { name: 'show_first_additional_screen', type: 'boolean', default: true },
    { name: 'show_guide_offer', type: 'boolean', default: false },
    {
      name: 'show_guide_payment_confirmation',
      type: 'boolean',
      default: false,
    },
    // BA-SSO
    {
      name: 'sso_after_sign_up_instruction',
      type: 'string',
      default: 'new_static_design',
    },
    {
      name: 'sso_new_sign_up_enabled',
      type: 'boolean',
      default: true,
    },
    {
      name: 'sso_sign_up_go_to_breeze_btn',
      type: 'boolean',
      default: true,
    },
    {
      name: 'welcome_email_trigger_event',
      type: 'string',
      default: 'account_creation',
    },
  ],
  [FUNNELS.PERSONALITY_TYPE]: [],
  [FUNNELS.CHILDHOOD_TRAUMA_SHORT]: [],
};

export type FunnelName = keyof typeof funnelAbTestLists;
