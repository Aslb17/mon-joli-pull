import { useState, useEffect } from 'react';
import './../styles/Cart.css';

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, pullType) => acc + pullType.amount * pullType.price,
		0
	)
	useEffect(() => {
		document.title = `Mon Joli Pull : ${total}€ d'achats`
	}, [total])
	return isOpen ? (
		<div className='mjp-cart'>
			<button
				className='mjp-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='mjp-cart-closed'>
			<button
				className='mjp-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart