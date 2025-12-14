import Link from 'next/link'
import Image from 'next/image'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            <Link href="/" className="text-sm uppercase text-muted-foreground transition-colors hover:text-foreground tracking-wide">
              Home
            </Link>
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  )
}