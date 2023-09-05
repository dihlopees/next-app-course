import Image from 'next/image';
import Link from 'next/link';
import Logo from './next-png.png';

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo next"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Helpdesk</h1>
      <Link href={'/'}> Dashboard</Link>
      <Link href={'/tickets'}> Ticktes</Link>
    </nav>
  );
};

export default Navbar;
