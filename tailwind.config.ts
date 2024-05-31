import { fontFamily } from "tailwindcss/defaultTheme";
import withMT from "@material-tailwind/react/utils/withMT";
const config = withMT({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(328deg, rgba(255, 255, 255, 1) 0%, rgba(0, 13, 38, 1) 0%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 70%)',
          'radial-gradient':'radial-gradient(ellipse at 47% 51%, rgba(255, 255, 255, 1) 0%, rgba(0, 32, 210, 1) 0%, rgba(39, 104, 217, 1) 0%, rgba(0, 13, 38, 1) 50%)',
          'access-gradient': 'linear-gradient(171deg, rgba(95, 63, 140, 1) 24%, rgba(0, 13, 38, 1) 65%)',
          "dimondBg": "url('/public/dimond.png')",
          'user-bg': "url('https://i.pinimg.com/originals/4f/09/19/4f0919c6884ff016b6713c4881c93e70.jpg')",
      },
      colors: {
        primary: "#2769D9",
      },
    },
  },
  plugins: [],
})
 export default config
