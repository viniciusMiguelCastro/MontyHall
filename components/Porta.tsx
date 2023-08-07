import style from '../src/styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? style.selecionada : ''

    function alternarSelecaoPorta(e) {
        return props.onChange(porta.alternarSelecao())
    }

    function abrirPorta(e) {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={style.porta}>
                <div className={style.numero}>{porta.numero}</div>
                <div className={style.macaneta}
                    onClick={abrirPorta}></div>
            </div>
        )
    }

    return (
        <div className={style.area} onClick={alternarSelecaoPorta}>
            <div className={`${style.estrutura} ${selecionada}`}>
                {!porta.aberta ? renderizarPorta() : porta.temPresente ? <Presente /> : false}
            </div>
            <div className={style.chao}></div>
        </div>
    )
}