import { stripe } from "@/assets/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import { useRouter } from "next/router"
import Stripe from "stripe";

interface ProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MIwMNZY'}}
        ],
        fallback: true, //MAGICA DO SKELETON
    }
}

export default function Product({ product }: ProductProps){
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Loading...</p>
    }
    return(
        <ProductContainer>
            <ImageContainer>
                 <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticProps: GetStaticProps<any, { id:string }> = async ({ params }) => {
    const productId = params?.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: { 
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price.unit_amount ? price.unit_amount / 100 : 0),
                description: product.description,
              }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}