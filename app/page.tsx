import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/e!.png"
              alt="eureka, etcetera"
              width={200}
              height={60}
              className="h-auto dark:hidden"
              priority
            />
            <Image
              src="/ee.png"
              alt="eureka, etcetera"
              width={200}
              height={60}
              className="h-auto hidden dark:block"
              priority
            />
          </Link>
          <nav className="flex items-center gap-8" style={{ fontFamily: "var(--font-ibm)" }}>
            <Link href="/docs" className="text-sm uppercase text-muted-foreground transition-colors hover:text-foreground tracking-wide">
              Docs
            </Link>
            <Link href="https://github.com/eurekaetcetera" className="text-sm uppercase text-muted-foreground transition-colors hover:text-foreground tracking-wide">
              Github
            </Link>
            <Link href="https://paragraph.com/@eurekaetcetera" className="text-sm uppercase text-muted-foreground transition-colors hover:text-foreground tracking-wide">
              Blog
            </Link>
            <Link href="mailto:inbox@eketc.co" className="text-sm uppercase text-muted-foreground transition-colors hover:text-foreground tracking-wide">
              Message
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content - Split Layout */}
      <main className="mx-auto max-w-screen-2xl">
        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1">
          <div className="flex flex-col justify-center px-12 py-16 lg:px-20">
            {/* Hero Text */}
            <div className="mb-16">
              <h1
                className="mb-[18px] text-5xl font-light leading-tight tracking-tight text-foreground lg:text-6xl"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-ibm)" }}>
                We build trustless resolution architectures and reference implementations for cross-namespace identity systems.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
