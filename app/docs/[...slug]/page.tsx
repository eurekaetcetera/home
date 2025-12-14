import { compileMDX } from '@next/mdx'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function DocsPage({ params }: PageProps) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'docs', ...slug) + '.mdx'

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { content } = await compileMDX({
      source: fileContent,
      options: {
        parseFrontmatter: true,
      },
    })

    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-screen-2xl px-8 py-16">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

// Generate static params for all MDX files
export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), 'docs')

  function getAllMdxFiles(dir: string, basePath: string = ''): string[] {
    const files: string[] = []

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        const relativePath = path.join(basePath, entry.name)

        if (entry.isDirectory()) {
          files.push(...getAllMdxFiles(fullPath, relativePath))
        } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
          const slug = relativePath.replace('.mdx', '').split(path.sep)
          files.push(slug.join('/'))
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }

    return files
  }

  const slugs = getAllMdxFiles(docsDir)
  return slugs.map(slug => ({
    slug: slug.split('/')
  }))
}