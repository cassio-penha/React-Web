import {useEffect, useState} from 'react'
import Logo_ORKUT from './assets/Logo_ORKUT.svg.png'
import style from './styles.module.css'

function App() {
  const[count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function addCount() {
    setCount(count => count + 1);
  }

  useEffect(() => {
    console.log(password);
    console.log(email);
    console.log(count);
  }, [password, email, count]);

  return (
    <>
      <div className={style.containerPrincipal} >
        <div className={style.form}>
          <a className={style.model} href="https://www.orkut.com/" target= "_blank">
            <img className={style.img01} src={Logo_ORKUT} alt="Logo Orkut" />
          </a>
          <div className={style.form2}>
            <p className={style.font}>
              Acesse o orkut.br com a sua conta
            </p>
            <input className={style.endereco} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail' />
            <input className={style.endereco} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Senha' />
            <button className={style.botao} onClick={addCount}>Entrar</button>
            <a className={style.link} href="#">Não consegue acessar a sua conta?</a>
          </div>
          <div className={style.font2}>
            <p className={style.paragraph}>
              Ainda não é membro?
            </p>
            <a className={style.link2} href="#">CRIAR NOVA CONTA</a>
          </div>
          <div className={style.borda}>
            <p className={style.footer}>
              © 2017 Orkut.br
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
