import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";


export default {
    darkMode: ["class"],
    class: ["dark"],

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],



  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			'secondary-background': 'var(--secondary-background)',
  			foreground: 'hsl(var(--foreground))',
  			heading: 'var(--heading)',
  			paragraph: 'var(--paragraph)',
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
  				foreground: 'hsl(var(--primary-foreground))',
  				hover: 'var(--primary-hover)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				hover: 'var(--secondary-hover)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))',
  				hover: 'var(--muted-hover)'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			eduHand: [
  				'var(--font-edu-hand)',
  				'cursive'
  			]
  		},
  		screens: {
  			xs: '400px',
  			sm: '480px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1440px',
  			'2xl': '1536px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'pulse-blob': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '0.15'
  				},
  				'50%': {
  					transform: 'scale(1.1)',
  					opacity: '0.25'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '0.15'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'bounce-slow': 'bounce 2s infinite ease-in-out',
  			'pulse-blob': 'pulse-blob 8s ease-in-out infinite'
  		}
  	}
  },

  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".layout-standard": {
          maxWidth: "1536px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".page-layout-standard": {
          maxWidth: "1536px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        },

        ".animation-standard": {
          transition: "all 0.5s ease-in-out",
        },

        ".section-padding-standard": {
          paddingTop: "2rem",
          paddingBottom: "2rem",

          "@screen lg": {
            paddingTop: "3rem",
            paddingBottom: "3rem",
          },
        },

        ".section-margin-standard": {
          marginTop: "3rem",
          marginBottom: "3rem",

          "@screen lg": {
            marginTop: "4rem",
            marginBottom: "4rem",
          },
        },

        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    },

    tailwindcssAnimate,
      require("tailwindcss-animate")
],
} satisfies Config;
