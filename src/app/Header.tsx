"use Client"
//import { useRouter } from "next/navigation"
export default function Header(){
  //const router = useRouter();
  
    return(
    <main>
    <header>
      <a href="" className="logo">The Young Lifestyle</a>
      </header>
      <header>
      <nav>
        <a href="http://localhost:3001/">Home</a>
        <a href="Pages">Life Balance</a>
        <a href="Pages3">Weight Loss</a>
        <a href="Pages4">Muscle Growth</a>
      </nav>
    </header>
  </main>
  )
}