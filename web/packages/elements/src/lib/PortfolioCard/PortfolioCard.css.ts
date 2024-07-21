import { style } from "@vanilla-extract/css";
// import { COLORS } from '../styles.css';



export const cardImageStyle = style({
  maxWidth: "40%",
  display: "inline-block"
});

export const cardStyle = style({
  outline: "none",
  // backgroundColor: `rgba(${COLORS.light.backgroundRgba})`,
  minWidth: "9.375rem",
  margin: "0.75rem",
  cursor: "pointer",
  borderRadius: "0.3125rem",
  flex: "1",
  // color: `rgba(${COLORS.textColorRgba})`,
  aspectRatio: "1.1",
  // boxShadow: `0 4px 8px 0 rgba(${COLORS.borderRgba})`,
});

export const cardContainerStyle = style ({
  selectors: {
    [`${cardStyle} > a &`]: {
      margin: "0.5rem",
    },
  },
})