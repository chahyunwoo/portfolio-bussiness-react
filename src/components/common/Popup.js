import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Popup({ children, setPopup }) {
	const onClick = () => {
		setPopup((prev) => !prev);
	};

	return (
		<aside className='pop'>
			<div className='con'>
				{children}
				<span className='btnClose' onClick={onClick}>
					<FontAwesomeIcon icon={faX} />
				</span>
			</div>
		</aside>
	);
}

export default Popup;
