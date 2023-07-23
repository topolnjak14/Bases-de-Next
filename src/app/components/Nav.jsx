import Link from 'next/link'

const Nav = () => {
    return (
        <div>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/personas">Personas</Link>
            <Link href="/about">About</Link>
            <Link href="/quienesSomos">Quienes somos</Link>
        </nav>
        </div>
    );
}

export default Nav;
