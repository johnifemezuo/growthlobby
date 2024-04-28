import { Footer } from "../Footer/Footer";
import { Header } from "../Navigation/Header";
import { Navigation } from "../Navigation/Navigator";

export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-4 max-w-[1450px] mx-auto relative ${className}`}>
      <Header />

      {children}

      <Navigation />
      <Footer />
    </div>
  );
};
