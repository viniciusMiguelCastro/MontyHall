import style from '../src/styles/Presente.module.css'

export default function Presente() {
    return (
        <div className={style.presente}>
            <div className={style.topo}></div>
            <div className={style.corpo} ></div>
            <div className={style.lacoVertical}></div>
            <div className={style.lacoHorizontal}></div>
        </div>
    )
}