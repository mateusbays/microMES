import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Word !</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
