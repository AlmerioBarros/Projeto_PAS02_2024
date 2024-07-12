
import Criando_card from "./Criando_cards.js";
import Botao_tema from "./Botão_tema.js";

async function Conectando_APIs(){

    const arquivo_pas_01 = await fetch('../Documentos/obras_pas_2024_01.json')
    const informações_pas_01 = await arquivo_pas_01.json();

    Criando_card(informações_pas_01, "pas_01")

}

Conectando_APIs()

Botao_tema()


