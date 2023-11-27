import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about" className={buttonVariants()}>
        Hi
      </Link>
    </div>
  );
}
