/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {},
        fontSize: {},
        boxShadow: {},
        colors: {
            'primaryGradient': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
            'red_light' : '#f9004d',
            'red_md' : '#ff014f',
            'red_dark' : '#d11414',
            'black_h1' : '#3c3e41',
            'black_h2' : '#1e2125',
            'black_p' : '#3c3e41',
        },
        backgroundSize: {
            'size-200': '200% 200%',
            'size-300': '300% 300%',
            'size-500': '500% 500%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
    },
  },
  plugins: [],
}

