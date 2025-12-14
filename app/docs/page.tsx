import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function DocsPage() {
  // This would typically read the docs.json and generate navigation
  // For now, let's create a simple docs index

  return (
    <div className="mx-auto max-w-screen-2xl px-8 py-16">
      <div className="mb-16">
        <h1 className="mb-8 text-4xl font-light text-foreground" style={{ fontFamily: "var(--font-ibm)" }}>
          Documentation
        </h1>
        <p className="text-lg text-muted-foreground" style={{ fontFamily: "var(--font-ibm)" }}>
          Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/docs/index" className="group">
          <div className="rounded-lg border border-border p-6 transition-colors hover:bg-muted/50">
            <h3 className="mb-2 text-lg font-medium">Introduction</h3>
            <p className="text-sm text-muted-foreground">Get started with Eureka's resolution patterns and specifications.</p>
          </div>
        </Link>

        <Link href="/docs/patterns/dnssec-pattern" className="group">
          <div className="rounded-lg border border-border p-6 transition-colors hover:bg-muted/50">
            <h3 className="mb-2 text-lg font-medium">DNSSEC Pattern</h3>
            <p className="text-sm text-muted-foreground">Learn about DNSSEC-based identity resolution.</p>
          </div>
        </Link>

        <Link href="/docs/specifications/dnssec-specification" className="group">
          <div className="rounded-lg border border-border p-6 transition-colors hover:bg-muted/50">
            <h3 className="mb-2 text-lg font-medium">DNSSEC Specification</h3>
            <p className="text-sm text-muted-foreground">Technical specification for DNSSEC implementation.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}