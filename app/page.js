import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center m-10">
          <div>
            <h1 className="font-bold text-[40px]">Welcome to NextJs single page application</h1>
            <ul className="list-disc m-3">
            <li className="ml-2 text-[30px]"><Link href="/ui/TodoList" className="bg-blue-300">Todo-List</Link></li>
            <li className="ml-2 text-[30px]"><Link href="/ui/Counter" className="bg-blue-300">Counter App</Link></li>
            <li className="ml-2 text-[30px]"><Link href="/ui/ImagesF1" className="bg-blue-300">Gallery </Link></li>
            <li className="ml-2 text-[30px]"><Link href="/ui/LoginPage" className="bg-blue-300">The Login Page</Link></li>
            </ul>
          </div>
      </div>
    </>
  );
}
