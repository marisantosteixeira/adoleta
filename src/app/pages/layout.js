'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"


export default function Layout({children}){ // representa os elementos passados para o comoponente
    const {push} = useRouter();

    const sair = (e) =>{
        e.preventDefault(); //Isso evita que a página seja recarregada quando o botão de sair for clicado.
        Cookies.remove('token');
        push('/')
    }
    return(
        <body>
            <nav>
                <ul className="menu">
                <li><Link href="/pages/dashboard" id="rota">HOME</Link></li>
<li><Link href="/pages/registrar" id="rota">REGISTRAR</Link></li>
<li><Link href="/pages/alterar" id="rota">ALTERAR</Link></li>
<li><button className="sair" onClick={sair}>Sair</button></li>
</ul>
</nav>
            <div>{children}</div>
        </body>
    )
}



