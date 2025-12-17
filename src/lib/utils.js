// Utility function for conditional classNames (like clsx or cn)
export function cn(...args) {
  return args.filter(Boolean).join(' ');
}
