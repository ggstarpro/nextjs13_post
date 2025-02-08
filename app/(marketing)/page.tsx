import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

// https://tx.shadcn.com/ の画面を作成していく。

/**
 * ◽️ サイズについて
 * @see {https://tailwindcss.com/docs/responsive-design}
 * @see {https://zenn.dev/risagoto/articles/7657c38de20bb1}
 * sm:640px スマートフォンサイズ
 * md:768px タブレット
 * lg:1024px ノートパソコンの画面幅
 * xl:1280px 大型モニター
 * 2xl:1536px 特大モニター
 *
 */

/**
 * ◽️ pt-xなどの指定について
 * pt-6で24px、pt-10で40pxとなっているので4の倍数になっている様子
 */

/**
 * ◽️ containerについて
 * None	width: 100%;
 * sm (640px)	max-width: 640px;
 * md (768px)	max-width: 768px;
 * lg (1024px)	max-width: 1024px;
 * xl (1280px)	max-width: 1280px;
 * 2xl (1536px)	max-width: 1536px;
 */
{/* <div className="bg-black">
  <div className="container"> mx-auto
    <div className="h-40 bg-blue-100"></div>
  </div>
</div> */}


/**
 * ◽️ gapについて
 * gap-4とすると2ブロックあったとしてその間に4*4の16px間隔が開く
 */


export default function IndexPage() {
  return (
    <>
      {/* ptについて
        画面サイズ　>= 1024px => lg:pt-32(128px)
        画面サイズ >= 768 => md:pt-10(40px)
        それ以外 24px
      */}
      <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-12">
        {/* max-w-[64rem] 横幅1024px */}
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">xをフォローする</Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNextJS AppRouterで作成されました。
            ユーザは自由に投稿をポストする事ができます。
          </p>
          <div className="space-x-4">
            <Link href={"/login"} className={cn(buttonVariants({ size: "lg" }))}>はじめる</Link>
            <Link
              href={siteConfig.links.github} className={cn(buttonVariants({ size: "lg", variant:"outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}