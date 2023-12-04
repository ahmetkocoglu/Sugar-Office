import Footer from "@/components/footer";
import Menu from "@/components/menu";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({children}) => {
  useEffect(() => {
    console.log('BaseLayout');
  }, [])

  return (
    <div>
    <Menu/>
    <hr/>
    {children}
    <hr/>
    <Footer/>
    </div>
  );
}

export default BaseLayout;