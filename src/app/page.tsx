import Accord from "@/Components/Homepage/Accord/page";
import Banner from "@/Components/Homepage/Banner/page";
import Belowbanner from "@/Components/Homepage/Belowbanner/page";
import Belowcard from "@/Components/Homepage/Belowcard/page";
import Blogart from "@/Components/Homepage/Blogart/page";
import Cards from "@/Components/Homepage/Cards/page";
import Chemical from "@/Components/Homepage/Chemical/page";
import Datasecure from "@/Components/Homepage/Datasecure/page";

import Footer from "@/Components/Homepage/Footer/page";
import Header from "@/Components/Homepage/Header/page";
import Insdustry from "@/Components/Homepage/Industryleader/page";
import Prowork from "@/Components/Homepage/Prowork/page";
import Trustedpartners from "@/Components/Homepage/Trustedpartner/page";
import TrustSecurity from "@/Components/Homepage/Trustsecurity/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Belowbanner/>
    <Cards/>
    <Belowcard/>
    <Prowork/>
    <Chemical/>
    <TrustSecurity/>
    <Datasecure/>
    <Blogart/>
    <Insdustry/>
    <Trustedpartners/>
    <Accord/>
    <Footer/>
  
    
    
    
    
    </>
  );
}
