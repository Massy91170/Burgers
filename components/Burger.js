import styles from '../styles/Burger.module.css';

function Burger(props) {
	const handleClick = () => {
		props.selectBurgers(props.name);
	  };

	  const removeAll = () => {
		props.removeBurger(props.name);
	  }
	
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{props.name}</h2>
			<img className={styles.images} src={props.image} />
			<div className={styles.selectBtn}><button className={styles.selectBtn} onClick={() => handleClick()}>selecte</button>
			<button className={styles.removeBtn} onClick={() => removeAll()}>Remove</button>

			</div>
		</div>
	);
}

export default Burger;
