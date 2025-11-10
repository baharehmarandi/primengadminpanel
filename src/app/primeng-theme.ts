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
        }
    },
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
