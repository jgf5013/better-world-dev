// import { LinksFunction } from "@remix-run/node";
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useContext } from "react";
import * as styles from "./PortfolioCard.css";
import { ThemeContext } from "../ThemeProvider";



// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: styles },
// ];

type ImageProps = {
  src: string;
  alt: string;
  title: string;
};

type Props = {
  link: string;
  img: ImageProps;
  title: string;
  subtext: string;
  isAdd?: boolean;
  index: number;
};

export const PortfolioCard = ({ link, img, title, subtext, index }: Props) => {
  
  const [theme] = useContext(ThemeContext);


  
  return (
    <div
      className={styles.cardStyle}
      role="button"
      tabIndex={index}
    >
      <a href={link}>
        <div className={styles.cardContainerStyle}>
          <div>
            <img
              className={styles.cardImageStyle}
              alt={img.alt}
              src={img.src}
              title={img.title}
            />
          </div>
          <div>
            <h5>{title}</h5>
            <p className="typography">{subtext}</p>
          </div>
        </div>
      </a>
        
    </div>
  );
};