import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import img from '../public/iphone.png';
import mac from '../public/mac.png';
import phone from '../public/phone.png';
import vk from '../public/vk.png';
import instagram from '../public/instagram.png';
import fb from '../public/fb.png';
import twitter from '../public/twitter.png';
import youtube from '../public/youtube.png';
import ok from '../public/ok.png';
import Timer from '../components/timer';

export default function Home() {
	return (
		<>
			<div className='bg'>
				<header className='header'>
					<div className='logo'>
						<Image src={mac} />
					</div>
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
							<Image src={phone} />
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
						{/* <a href='#'> */}
						<Image src={vk} />
						{/* </a>
						<a href='#'> */}
						<Image src={instagram} />
						{/* </a>
						<a href='#'> */}
						<Image src={fb} />
						{/* </a>
						<a href='#'> */}
						<Image src={twitter} />
						{/* </a>
						<a href='#'> */}
						<Image src={youtube} />
						{/* </a>
						<a href='#'> */}
						<Image src={ok} />
						{/* </a> */}
					</div>
				</footer>
			</div>
		</>
	);
}
