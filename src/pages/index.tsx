import Link from "next/link";
import styles from '../styles/Formulario.module.css'
import { useState } from "react";
import Cartao from "../../components/Cartao";
import EntradaNumerica from "../../components/EntradaNumerica";

export default function Formulario() {
  const [portas, setPortas] = useState(3)
  const [portaPremiada, setPortaPremiada] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Porta Premiada</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de portas?"
            value={portas}
            onChange={novaQtdePortas => setPortas(novaQtdePortas)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica text="Porta Premiada"
            value={portaPremiada}
            onChange={novaPortaPremiada => setPortaPremiada(novaPortaPremiada)} />
        </Cartao>

        <Cartao bgcolor='#28a085'>
          <Link href={`jogo/${portas}/${portaPremiada}`}>
            <h2 className={styles.link}>Jogar</h2>
          </Link>
        </Cartao>
      </div>
    </div >
  )
}
