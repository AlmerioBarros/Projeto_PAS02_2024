
import Criando_card from "./Criando_cards.js";

async function Conectando_APIs(){

    const arquivo_pas_02 = await fetch('../Documentos/obras_pas_2024_02.json')
    const informações_pas_02 = await arquivo_pas_02.json();

    Criando_card(informações_pas_02)

}

Conectando_APIs()


