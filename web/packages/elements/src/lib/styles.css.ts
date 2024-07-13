import { createVar, style } from "@vanilla-extract/css";

/* dark mode */
export const backgroundRgbaDark = createVar();
export const foregroundRgbaDark = createVar();

/* light mode */
export const backgroundRgbaLight = createVar();
export const foregroundRgbaLight = createVar();

export const baseStyles = style({
  '@media': {
    '(prefers-color-scheme: light)': {
      background: backgroundRgbaLight,
      color: foregroundRgbaLight,
    },
    '(prefers-color-scheme: dark)': {
      background: backgroundRgbaDark,
      color: foregroundRgbaDark,
    },
  }
});