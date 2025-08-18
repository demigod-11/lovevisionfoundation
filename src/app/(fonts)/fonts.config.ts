import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
export const calSansFont = localFont({
  src: './CalSans-Regular.ttf'
});

export const googleSansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});
