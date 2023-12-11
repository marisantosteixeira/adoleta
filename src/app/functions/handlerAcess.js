import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {  //recebe um parâmetro chamado user

    const userAuth = await getUserAuthenticated(user);
    console.log(user)
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        if (typeof window !== 'undefined'){  // o nome do usuário extraído de userAuth é armazenado no localStorage
            localStorage.setItem("nome", userAuth.nome); //aparecer no localStorage
        }
    }
 return userAuth;  
}
export default handlerAcessUser;

