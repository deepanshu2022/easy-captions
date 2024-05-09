import Link from "next/link";
import SparklesIcon from "./SparklesIcon";

export default function NavBar() {
    return (
        <header className="flex justify-between my-2 sm:mb-8 sm:my-4">
            <Link href="/" className="flex gap-1">
              <SparklesIcon />
              <span>EasyCaptions</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-white/80 ">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <a href="mailto:@contact@easycaptions.com">Contact</a>
            </nav>
          </header>
    )
}