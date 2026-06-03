import { Plus_Jakarta_Sans } from "next/font/google";

/** Display font for hero headings */
export const calSansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cal-sans",
});

export const googleSansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
