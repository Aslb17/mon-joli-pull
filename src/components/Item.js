import HeatScale from './HeatScale'
import '../styles/Item.css'

function handleClick(pullName) {
	alert(`Vous voulez acheter un pull ${pullName}? Très bon choix ✨`)
}
function Item({ cover, name, heat, price}) {
	return (
		<li className='mjp-item' onClick={() => handleClick}>
			<span className='mjp-item-price'>{price}€</span>
			<img className='mjp-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<HeatScale scaleValue={heat} />
			</div>
		</li>
	)
}

export default Item


	