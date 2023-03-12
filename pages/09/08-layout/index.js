import Banner from "@/src/components/commons/layout/banner";
import BodyWrapper from "@/src/components/commons/layout/bodyWrapper";
import Footer from "@/src/components/commons/layout/footer";
import Header from "@/src/components/commons/layout/header";
import Navigation from "@/src/components/commons/layout/navigation";
import Sidebar from "@/src/components/commons/layout/sidebar";

export default function LayoutPage(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar />
        <div>{props.children || "바디영역"}</div>
      </BodyWrapper>

      <Footer />
    </div>
  );
}