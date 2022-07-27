import Heat from '../assets/heat.svg'

const quantityLabel = {
	1: 'chaud',
	2: 'très chaud',
	3: 'extrêmement chaud'
}

function HeatScale({ scaleValue}) {
	const range = [1, 2, 3]
	return (
		<div onClick={() => alert(`Ce pull est douillet et ${quantityLabel[scaleValue]}.`)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}><img src={Heat} alt='heat-icon' /></span>
				) : null
			)}
		</div>
	)
}

export default HeatScale