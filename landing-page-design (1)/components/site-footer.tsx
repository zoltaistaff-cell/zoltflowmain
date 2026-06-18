export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              {/* Logo placeholder — swap with your own mark */}
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L15 14H1L8 1Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-heading text-base font-semibold tracking-tight">Northbound</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Revenue systems for operators who refuse to scale headcount.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li>
                  <a
                    href="mailto:hello@northbound.systems"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    hello@northbound.systems
                  </a>
                </li>
                <li>
                  <a href="#audit" className="text-foreground transition-colors hover:text-primary">
                    Book an audit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Compliance</h3>
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
            &copy; {new Date().getFullYear()} Northbound Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
