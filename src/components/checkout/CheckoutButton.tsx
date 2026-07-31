import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { isPlaceholderLink } from "@/lib/checkout";

interface CheckoutButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/**
 * Drop-in replacement for `Button` wherever the destination may be an unfilled
 * Stripe/Tally placeholder. Real links render exactly like `Button`; a
 * `PLACEHOLDER_*` value renders disabled with a visible caption instead of
 * shipping a silently dead button.
 */
export function CheckoutButton({ href, children, ...buttonProps }: CheckoutButtonProps) {
  if (isPlaceholderLink(href)) {
    console.warn(`[checkout] Placeholder checkout link not yet configured: ${href}`);
    return (
      <div className="flex w-full flex-col items-start gap-1.5">
        <Button disabled {...buttonProps}>
          {children}
        </Button>
        <span className="text-xs text-text-muted">Checkout link not yet configured</span>
      </div>
    );
  }

  return (
    <Button href={href} {...buttonProps}>
      {children}
    </Button>
  );
}
