import Link from "next/link"

export default function Home() {
  return (

    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/showcase">Showcase</Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}
