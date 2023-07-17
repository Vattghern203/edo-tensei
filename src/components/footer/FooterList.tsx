import { HTMLAttributes, FC } from "react";

interface FooterItem {
  labelText: string;
  external: boolean;
  url: string;
}

interface FooterListProps extends HTMLAttributes<HTMLUListElement> {
  footerItems: FooterItem[];
}

const FooterList: FC<FooterListProps> = ({ footerItems, ...rest }:FooterListProps) => {
  return (
    <ul {...rest}>
      {footerItems.map((item, index) => (
        <li key={index}>
          <a href={item.url} target={item.external ? "_blank" : "_self"}>
            {item.labelText}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
