import { useState } from 'react'
import { pullList } from '../datas/pullList'
import Item from './Item'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = pullList.reduce(
		(acc, pull) =>
			acc.includes(pull.category) ? acc : acc.concat(pull.category),
		[]
	)

	function addToCart(name, price) {
		const currentPullSaved = cart.find((pull) => pull.name === name)
		if (currentPullSaved) {
			const cartFilteredCurrentPull = cart.filter(
				(pull) => pull.name !== name
			)
			updateCart([
				...cartFilteredCurrentPull,
				{ name, price, amount: currentPullSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='mjp-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='mjp-pull-list'>
				{pullList.map(({ id, cover, name, heat, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<Item
								cover={cover}
								name={name}
								heat={heat}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList

