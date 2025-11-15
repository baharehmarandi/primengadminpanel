import { definePreset } from '@primeng/themes';   // ← CORRECT package
import Aura from '@primeng/themes/aura';

export const MyAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'oklch(96% 0.03 295)',
      100: 'oklch(93% 0.05 295)',
      200: 'oklch(88% 0.08 295)',
      300: 'oklch(82% 0.12 295)',
      400: 'oklch(74% 0.18 295)',
      500: '#8841cf',               // ← your primary colour
      600: 'oklch(55% 0.22 295)',
      700: 'oklch(48% 0.20 295)',
      800: 'oklch(40% 0.18 295)',
      900: 'oklch(32% 0.16 295)',
      950: 'oklch(25% 0.14 295)',
    },
  },
  tokens: {
    colors: {
        button: {
          link: {
            color: '#000000',       // 👈 رنگ متن اصلی
            hoverColor: '#1a1a1a',  // 👈 رنگ موقع هاور
            activeColor: '#000000', // 👈 رنگ موقع کلیک
          }
        },
      neutral: {
        50:  '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#0a0a0a',
      },
    },
  },
    components: {
      focusRing: {
        color: '#8841cf',          // <-- EXACT colour you want
        width: '2px',
        style: 'solid',
        offset: '2px',
      },
      input: {
        focusRing: {
          color: '#8841cf',
        },
        },
    },
  inlineCSS: `
    .p-button.p-button-link,
    .p-button.p-button-link:hover,
    .p-button.p-button-link:focus {
      text-decoration: none !important;
      color: #000000 !important;
    },
  `,
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '#000000',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
      },
    },
});
