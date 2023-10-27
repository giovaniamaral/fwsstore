"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner.home01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}
