

export default function Criando_card(informações_sobre_o_card) {

    const container_dos_cards = document.getElementById('contem_cards')

    Object.keys(informações_sobre_o_card.pas_02).forEach(e => {
        container_dos_cards.innerHTML += `
        <div class="card_p">
            <h1>${informações_sobre_o_card["pas_02"][e]["nome"]} </h1>
            <img class="imagem_card" src="${informações_sobre_o_card["pas_02"][e]["imagem"]}" alt="Imagem Exemplo">
            <p>Autor: ${informações_sobre_o_card["pas_02"][e]["autor"]} </p>
            <p>Descrição: ${informações_sobre_o_card["pas_02"][e]["descrição"]} </p>
            <p>Caracteristicas: ${informações_sobre_o_card["pas_02"][e]["caracteristicas"]} </p>
        </div>
    `
    })

    const cards = document.querySelectorAll(".card_p")

    cards.forEach(e => {
        e.addEventListener('click', () => TrocarClass(e) )
    })


    function TrocarClass(element){
        element.classList.toggle("card_p")
        element.classList.toggle("card_g")
    }
}