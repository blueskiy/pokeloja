import { MdClose } from 'react-icons/md'

export function Cart({ isCartOpen, toggleCart, uniquePokemonAmount }) {
    return (
        <div className={isCartOpen ? 'cart active' : 'cart'}>
            <MdClose
                onClick={toggleCart}
                size="30"
                color="black"
            />
            <span className="cart-title">CARRINHO</span>
            <div className="cart-content">
                {
                    uniquePokemonAmount === null
                        ? ''
                        : uniquePokemonAmount.map((pokemon) => {
                            return (
                                <span key={pokemon.id}>{pokemon.name}</span>
                            )
                        })
                }
            </div>
        </div>
    )
}