import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"
export default function Product(){
    const { query } = useRouter();
    return(
        <ProductContainer>
            <ImageContainer>
                 
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae error excepturi eveniet aperiam veritatis quos voluptatum repellendus quasi dolores magnam laboriosam rem, est repellat, dolore officia quia perspiciatis maiores.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}