import BeautifulRoom from "@/components/beautifulRoom/BeautifulRoom";
import Browserange from "@/components/browserange/Browserange";
import PhotoGallery from "@/components/Furniture-gallery/FurnitureGallery";
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/ourproducts/OurProducts";


export default function Home() {
  return (
    <>
    <Hero/>
    <Browserange/>
     <OurProducts/>
    <BeautifulRoom/>
    <PhotoGallery/>
    </>
  );
}
