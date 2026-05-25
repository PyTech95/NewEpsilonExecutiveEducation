/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                sans: ['"Manrope"', 'system-ui', 'sans-serif'],
                mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
                display: ['"Manrope"', 'system-ui', 'sans-serif'],
                editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                gold: {
                    DEFAULT: '#D4AF37',
                    hover: '#BF9C2F',
                    light: '#E7C97A',
                    dark: '#AA8627',
                },
                navy: {
                    DEFAULT: '#0A1128',
                    deep: '#040914',
                    light: '#162038',
                },
                cream: {
                    DEFAULT: '#F9F6F0',
                    dark: '#EFE9DC',
                },
                bone: '#F4EFE3',
                ink: {
                    DEFAULT: '#040914',
                    light: '#0A1128',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'pulse-gold': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(197,160,89,0.5)' },
                    '50%': { boxShadow: '0 0 0 14px rgba(197,160,89,0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.7s ease-out both',
                'fade-in': 'fade-in 0.8s ease-out both',
                'pulse-gold': 'pulse-gold 2.5s ease-out infinite'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
