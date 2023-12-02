import BillingForm from '@/components/BillingForm'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import React from 'react'

const page = async () => {
  const subscriptionPlan = await getUserSubscriptionPlan()

  return <BillingForm subscriptionPlan={subscriptionPlan} />
}

export default page