import { cn } from "../utils/cn";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="logo-mark relative inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-[#161616]">
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none" aria-hidden>
          <defs>
            <linearGradient id="wps-g" x1="6" y1="10" x2="34" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6ea1ff">
                <animate attributeName="stop-color" values="#6ea1ff;#b297ff;#6ea1ff" dur="7s" repeatCount="indefinite" />
              </stop>
              <stop offset="0.55" stopColor="#ff6fa5">
                <animate attributeName="stop-color" values="#ff6fa5;#ffb35c;#ff6fa5" dur="7s" repeatCount="indefinite" />
              </stop>
              <stop offset="1" stopColor="#ffb35c" />
            </linearGradient>
          </defs>
          <path
            className="logo-path"
            d="M7 11.5 13.2 28.5 20 15.5 26.8 28.5 33 11.5"
            stroke="url(#wps-g)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="32" r="1.9" fill="#f5f5f5" opacity="0.9" />
        </svg>
        <span aria-hidden className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-[#6ea1ff]" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[14.5px] font-extrabold tracking-[-0.01em] text-fg">Web Proxy</span>
          <span className="mt-[5px] text-[10px] font-bold uppercase tracking-[0.3em] text-mut2">Solutions</span>
        </span>
      )}
    </span>
  );
}
