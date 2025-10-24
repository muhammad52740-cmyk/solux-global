import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Billing Services - Solux Global',
  description: 'Professional medical billing services to optimize your revenue cycle.',
}

export default function MedicalBillingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}