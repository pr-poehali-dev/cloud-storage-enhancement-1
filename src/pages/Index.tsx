import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import News from "@/components/News";
import Routes from "@/components/Routes";
import Team from "@/components/Team";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Featured />
      <News />
      <Routes />
      <Team />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;