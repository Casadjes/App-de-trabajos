import "./Header.css";

export function Header({ title, icon }) {
	return (
		<div className='header'>
			<div className='header__left'>
				<span>{icon}</span>
				<h1>{title}</h1>
				<div className='links animated'>
					<a href='#'>link</a>
					<a href='#'>link</a>
					<a href='#'>link</a>
				</div>
			</div>
			<div className='header__right'>
				<div className='links account'>
					<a href='#'>Log In</a>
					<a href='#'>Sing Up</a>
				</div>
			</div>
		</div>
	);
}
