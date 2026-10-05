import siqeLogo from "@/assets/siqe-logo.webp";

/** The SIQE crystal (docs/brand/siqe-logo.png, trimmed and scaled to 128 px for sharp small sizes). */
export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <img
      src={siqeLogo}
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      draggable={false}
    />
  );
}

/** Forge icon: a faceted cube, matching the blueprint mockups. */
export function ForgeIcon({ className = "size-[19px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z" strokeLinejoin="round" />
      <path d="M12 12l8-4.6M12 12v9.2M12 12L4 7.4" strokeLinejoin="round" />
    </svg>
  );
}
