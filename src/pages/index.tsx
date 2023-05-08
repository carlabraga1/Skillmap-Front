import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Olá, bem-vindo(a) de volta!👋</h1>
      <a href="#">Entrar com sua conta Google</a>
      <br />
      <a href="#">Entrar com o Github</a>
      <p>Ou</p>
      <div className="container">
        <label>
          <input type="text" placeholder='E-mail' />
        </label>
        <br />
        <label>
          <input type="password" placeholder='Senha' />
        </label>
        <br />
        <button type="submit">LOGIN</button>
      </div>

      <p>É novo por aqui?  <Link href="/Conta">Crie sua conta</Link></p>

      <section>
        <img src="" alt="" />
        <h1>Acabe com as dúvidas sobre como começar
          no mundo Tech!</h1>
          <p>Uma maneira fácil e descontraída de guiar seus estudos</p>
      </section>

    </main>

  )
}
