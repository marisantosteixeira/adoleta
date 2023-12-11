'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./global.css"

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
 
  const { push, refresh} = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Ocorreu um erro no email ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      refresh(); //tualiza a página se ocorrer algum erro no try ou no catch
    }
  }
  return (
    <body>
    <div class="body">
      <form onSubmit={handlerLogin}>
      <div>
      </div>
      <fieldset>
      <h1>Login</h1>

      <div className="abcd">
        <input className="inputs"
          placeholder='Insira seu E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        </div>
        <div className="abcd">
        <input className="inputs"
          placeholder='Insira sua senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>
        <br></br>
        <button className="botao">Entrar</button>
        </fieldset>
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}