import { LinksFunction } from "@remix-run/node";
// import styles from "./styles.css?url";

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
  const goTo = (link: string): void => {
    window.open(link);
  };
  return (
    <div
      className="card"
      onClick={() => goTo(link)}
      onKeyDown = {() => goTo(link)}
      role="button"
      tabIndex={index}
    >
      <div className="m-4">
        <div className="img-container">
          <img
            className="cardImg"
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
    </div>
  );
};