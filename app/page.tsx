import Link from 'next/link'
import AdSenseSlot from '@/components/AdSenseSlot'

export default function Page(){
  return (
    <section className="grid" style={{gap:16}}>
      <div className="card">
        <h1 style={{margin:0}}>Fast tools for everyday tasks</h1>
        <p className="small" style={{marginTop:8}}>A mix of calculators (for SEO) and fun tools (for shareable traffic). Ad-supported.</p>
        <div style={{marginTop:12}}><Link href="/tools" className="btn">Browse all tools</Link></div>
      </div>
      <div className="grid grid-2">
        <Link href="/tools/bmi" className="card">BMI Calculator</Link>
        <Link href="/tools/loan" className="card">Loan Calculator</Link>
        <Link href="/tools/name-generator" className="card">Random Name Generator</Link>
        <Link href="/tools/coin-flip" className="card">Coin Flip</Link>
      </div>
      <AdSenseSlot slot="0000001001" />
    </section>
  )
}
