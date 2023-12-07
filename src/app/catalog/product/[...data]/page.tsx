import AddToCartButton from "./add-to-cart-button"
import Test from "./test"

interface ProductProps {
    params: {
        data: string[]
    }
}

// Server Components => A gente não usa Javascript no lado do cliente
// Client Components => o Javascript é enviado ao navegador (cliente)

// Streaming SSR => Ler/escrever dados de forma parcial + Server-Side Rendering

// Renderizar um componente pelo lado do servidor de forma parcial

export default async function Product({ params }: ProductProps) {
    const response = await fetch('https://api.github.com/users/lacymelo')

    const user = await response.json()

    const [productId, size, color] = params.data

    return (
        <>
            <h1>productId: {productId}</h1>
            <h1>Size: {size}</h1>
            <h1>Color: {color}</h1>

            <AddToCartButton children={<Test />} />
        </>
    )
}