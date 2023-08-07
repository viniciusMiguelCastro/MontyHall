import style from '../src/styles/EntradaNumerica.module.css'

interface EntradaNumericaProps {
    value: number
    text: string
    onChange: (newValue: number) => void
}



export default function EntradaNumerica(props: EntradaNumericaProps) {
    const incrementar = () => props.onChange(props.value + 1)
    const decrementar = () => props.onChange(props.value - 1)
    return (
        <div className={style.entradaNumerica}>
            <span className={style.text}>{props.text}</span>
            <span className={style.value}>{props.value}</span>
            <div className={style.botoes}>
                <button className={style.btn} onClick={decrementar}>-</button>
                <button className={style.btn} onClick={incrementar}>+</button>
            </div>
        </div>
    )
} 