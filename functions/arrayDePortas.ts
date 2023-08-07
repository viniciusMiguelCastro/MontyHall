import PortaModel from "../model/porta";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {
    return Array.from({ length: qtde }, (element, index) => {
        const numero = index + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
    })
}

export function atulizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igual_a_modificada = portaAtual.numero === portaModificada.numero

        if (igual_a_modificada) {
            return portaModificada
        }
        else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}