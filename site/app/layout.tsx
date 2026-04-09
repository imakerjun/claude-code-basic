import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Claude Code Basic',
  description: 'Claude Code 입문 워크숍'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <span className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span className="brand-text">
            <strong>Claude Code Basic</strong>
          </span>
        </span>
      }
      projectLink="https://github.com/imakerjun/claude-code-basic"
    >
      <ThemeSwitch lite className="navbar-theme-switch" />
    </Navbar>
  )
  const footer = (
    <Footer className="site-footer">
      <div className="footer-copy">
        <strong>Claude Code Basic</strong>
      </div>
    </Footer>
  )
  const pageMap = await getPageMap()

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/imakerjun/claude-code-basic/tree/main"
          feedback={{ content: null }}
          editLink=""
          search={<Search placeholder="문서 검색" />}
          toc={{ title: '목차', backToTop: null }}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
