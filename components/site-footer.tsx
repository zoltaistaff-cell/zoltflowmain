import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ZoltFlow logo"
                width={28}
                height={28}
                className="rounded-md object-contain"
              />
              <span className="font-heading text-base font-semibold tracking-tight">ZoltFlow</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI patient handoff for dental practices. Stop losing patients to voicemail.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li>
                  <a
                    href="mailto:zolt.ai.staff@gmail.com"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    zolt.ai.staff@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground transition-colors hover:text-primary">
                    Book a call
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Legal</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ZoltFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
