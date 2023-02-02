import { HomeContainer, Product } from "@/styles/pages/pages";
import Image from "next/image";

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt={"t-shirt"} />
      </Product>
    </HomeContainer>
  )
  
}
