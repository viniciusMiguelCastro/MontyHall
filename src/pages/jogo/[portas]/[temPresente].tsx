import { useEffect, useState } from "react"
import { atulizarPortas, criarPortas } from "../../../../functions/arrayDePortas"
import Porta from "../../../../components/Porta"
import style from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo() {
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdValida = portas >= 3
        const presenteValido = temPresente >= 1

        setValido(qtdValida && presenteValido)
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map((element) => {
            return <Porta key={element.numero} value={element} onChange={novaPorta => setPortas(atulizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={style.jogo}>
            <div className={style.portas}>
                {valido ? renderizarPortas() : <h2>Valores inválidos</h2>}
            </div>
            <div className={style.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}