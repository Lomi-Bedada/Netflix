import { useMediaQuery } from "react-responsive";

const MyComponent = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <p>This is a desktop view</p>}
      {isTablet && <p>This is a tablet view</p>}
      {isMobile && <p>This is a mobile view</p>}
    </div>
  );
};
export default MyComponent;
