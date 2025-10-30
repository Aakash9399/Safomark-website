import Link from "next/link";

export default function Header(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Safomark logo" className="h-12 w-12 object-contain"/>
          <div>
            <div className="font-bold text-lg">Safomark Solutions urban</div>
            <div className="text-xs text-slate-500">Leaders in Road Marking & Surface Coating Solutions</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-slate-700">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#products" className="hover:text-primary">Products</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  // simple toggle
  const toggle = () => {
    const el = document.getElementById('mobile-menu');
    if(el) el.classList.toggle('hidden')
  }
  return (
    <>
      <button onClick={toggle} className="text-2xl">☰</button>
      <div id="mobile-menu" className="absolute right-4 top-20 bg-white shadow p-4 rounded hidden">
        <a className="block py-1" href="#services">Services</a>
        <a className="block py-1" href="#products">Products</a>
        <a className="block py-1" href="#about">About</a>
        <a className="block py-1" href="#projects">Projects</a>
        <a className="block py-1" href="#contact">Contact</a>
      </div>
    </>
  )
}
