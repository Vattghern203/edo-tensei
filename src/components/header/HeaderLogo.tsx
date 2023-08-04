interface HeaderLogoProps {
  isImg?: boolean;
  logo: string;
}

export default function HeaderLogo({ isImg, logo }: HeaderLogoProps) {
  const headerLabelId = "header-label"; // Unique ID for the label, if needed

  return (
    <div>
      {isImg ? (
        <img src={logo} alt="site logo" aria-label="Site Logo" />
      ) : (
        <h1 id={headerLabelId} tabIndex={0}>
          {logo}
        </h1>
      )}
    </div>
  );
}
