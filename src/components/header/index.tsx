import Link from "next/link";


export function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-12 bg-gray-800 text-white">
      <h1>Rest Book</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/livros">Cadastrar Livros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
