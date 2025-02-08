import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { marketing } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

// export const metadata: Metadata = {
//   title: 'Marketing'
// };

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <div>
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketing.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm'}),
                "px-4"
              )}
            >
              ログイン
              </Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}