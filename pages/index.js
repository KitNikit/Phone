import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import img from '../public/iphone.png';
import Timer from '../components/timer';

export default function Home() {
	return (
		<>
			<div className='bg'>
				<header className='header'>
					<img className='logo' src='/mac.png' />
					<ul className='menu'>
						<li>
							<Link href='/'>
								<a>info</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>info</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>info</a>
							</Link>
						</li>
					</ul>

					<a href='tel:+79100000000' className='tel'>
						8 910 000 00 00
					</a>
					<div className='burger'>
						<a href='tel:+79100000000' className='burger-tel'>
							<img src='/phone.png' />
						</a>
					</div>
				</header>
				<div className='iphone'>
					<Image src={img} />
				</div>
				<h1 className='content'>Успейте купить по выгодной цене!</h1>
				<div className='page6'>
					<Timer />
				</div>
				<footer className='footer'>
					<div className='social'>
						<a href='/'>
							<img className='social' src='/vk.png' />
						</a>
						<a href='/'>
							<img className='social' src='/instagram.png' />
						</a>
						<a href='/'>
							<img className='social' src='/fb.png' />
						</a>
						<a href='/'>
							<img className='social' src='/twitter.png' />
						</a>
						<a href='/'>
							<img className='social' src='/youtube.png' />
						</a>
						<a href='/'>
							<img className='social' src='/ok.png' />
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}
