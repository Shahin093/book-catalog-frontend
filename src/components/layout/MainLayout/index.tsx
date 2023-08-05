import Footer from "../../shared/footer";
import Nav from "../../shared/nav";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainLayout = (props: any) => {
  return (
    <>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
