import Image from "next/image";
import { globalVariables } from "../global-config";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">{"Jamie's Website"}</h1>
        <Image
          src={`${globalVariables.basePath}/jamie-tammo.jpeg`}
          alt="Jamie and Tammo"
          width={320}
          height={68}
          // priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 text-xl">Pardon our dust: </li>
          <li className="text-xl">🚧 Active Construction 🚧</li>
          <li className="text-xl">More is coming soon ...</li>
        </ol>
      </main>
    </div>
  );
}
