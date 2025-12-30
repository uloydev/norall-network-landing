<script lang="ts">
  import type { Button as ButtonType } from '$lib/types/cms';
  import { clsx } from 'clsx';

  export let button: ButtonType;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = clsx(
    'btn',
    variantClasses[button.variant],
    sizeClasses[size]
  );
</script>

<a
  href={button.url}
  class={classes}
  target={button.openInNewTab ? '_blank' : undefined}
  rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
>
  {button.text}
</a>
