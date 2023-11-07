import { NotFound } from "./style"

export default function index() {

    return(
        <NotFound>
            <div>
                <h1>Error 404</h1>
                <p>Pagina não encontrada, paara voltar <a href="/">Clique aqui</a></p>  
            </div>
        </NotFound>
    )
}