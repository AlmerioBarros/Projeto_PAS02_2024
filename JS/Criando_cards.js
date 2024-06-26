

export default function Criando_card(informações_sobre_o_card) {

    const container_dos_cards = document.getElementById('contem_cards')

    container_dos_cards.innerHTML = `
        <div class="card_p">
        <h1>${informações_sobre_o_card["pas_01"]["01"]["nome"]} </h1>
        </div>
    `

}