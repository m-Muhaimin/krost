export const PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!

export const PRO_MONTHLY_PRICE_ID = 'pri_01ksn9s3z1yq89x6286zfc134p'
export const PRO_ANNUAL_PRICE_ID = 'pri_01kt712gv28wpgarem3cxyd3dq'
export const ONE_TIME_PRICE_ID = 'pri_01ksmrjm62jm2dtdqn3g264a3b'

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    description: 'Get started with basic income tracking',
    price: 0,
    interval: null,
    priceId: null,
    mode: 'payment' as const,
    audience: 'gig_worker' as const,
    popular: false,
    features: [
      '1 platform connection',
      '1 PDF report',
      '12 months income history',
      'Shareable link (7 days)',
    ],
  },
  {
    id: 'one_time',
    name: 'Single Report',
    description: 'One PDF, one-time, no strings attached',
    price: 6.99,
    interval: null,
    priceId: ONE_TIME_PRICE_ID,
    mode: 'payment' as const,
    audience: 'gig_worker' as const,
    popular: false,
    features: [
      '1 platform connection',
      '1 PDF report',
      '12 months income history',
      'Shareable link (7 days)',
      'No subscription needed',
    ],
  },
  {
    id: 'pro_monthly',
    name: 'Pro Monthly',
    description: 'Unlimited reports and shareable links for serious earners',
    price: 14.99,
    interval: 'month' as const,
    priceId: PRO_MONTHLY_PRICE_ID,
    mode: 'subscription' as const,
    audience: 'gig_worker' as const,
    popular: true,
    features: [
      'Connect up to 5 platforms',
      'Unlimited PDF reports',
      'Expiring shareable links (7/30 day)',
      '24 months income history',
      'Downloadable as PDF',
      'Priority support',
    ],
  },
  {
    id: 'pro_annual',
    name: 'Pro Annual',
    description: 'All Pro features, billed annually — save 17%',
    price: 149.00,
    interval: 'year' as const,
    priceId: PRO_ANNUAL_PRICE_ID,
    mode: 'subscription' as const,
    audience: 'gig_worker' as const,
    popular: false,
    features: [
      'Connect up to 5 platforms',
      'Unlimited PDF reports',
      'Expiring shareable links (7/30 day)',
      '24 months income history',
      'Downloadable as PDF',
      'Priority support',
    ],
  },
]

export function getPaddleEnvironment(): 'sandbox' | 'production' {
  return process.env.PADDLE_ENVIRONMENT === 'production' ? 'production' : 'sandbox'
}

export function getPaddleApiBase(): string {
  return getPaddleEnvironment() === 'production'
    ? 'https://api.paddle.com'
    : 'https://sandbox-api.paddle.com'
}
