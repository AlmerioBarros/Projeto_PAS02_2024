

export default function Criando_card(informações_sobre_o_card,qual_pas) {

    const container_dos_cards = document.getElementById('contem_cards')

    container_dos_cards.innerHTML = ``

    Object.keys(informações_sobre_o_card[qual_pas]).forEach(e => {
        container_dos_cards.innerHTML += `
        <div class=" card  card_p " style="background-image: url(${informações_sobre_o_card[qual_pas][e]["imagem"]});">
            <h1>${informações_sobre_o_card[qual_pas][e]["nome"]} </h1>
            <img class="imagem_card" src="${informações_sobre_o_card[qual_pas][e]["imagem"]}" alt="Imagem Exemplo">
            <hr>
            <p> <span>Criador(s): </span> ${informações_sobre_o_card[qual_pas][e]["autor"]} </p>
            <hr>
            <p> <span>Descrição: </span> ${informações_sobre_o_card[qual_pas][e]["descrição"]} </p>
            <hr>
            <p> <span>Caracteristicas: </span> ${informações_sobre_o_card[qual_pas][e]["caracteristicas"]} </p>
        </div>
    `

    })

    /*Ação de click no card*/

    const cards = document.querySelectorAll(".card")

    cards.forEach(e => {

        e.addEventListener('click', () => TrocarClass(e))
        e.addEventListener('click', () => TrocarFundo(e))
        
    })



    function TrocarClass(element){
        element.classList.toggle("card_p")
        element.classList.toggle("card_g")
 
    }

    function TrocarFundo(element){
        if (element.classList.contains("card_p")) {
            let url_fundo = `${element.children[1].src}`
            element.style.backgroundImage = ` url(${url_fundo})`
            
        } else if(element.classList.contains("card_g")) {
            let url_fundo = ``
            element.style.backgroundImage = ` url(${url_fundo})`
            
        }
    }

}



/*            currentSrc: https://live.staticflickr.com/7145/6730647385_7a7975fd4e_b.jpg" */
  /*   url ( "${e.children[1].src}")  */

  /*        let url_fundo = `${element.children[1].src}`
        element.style.background = ` url(${url_fundo})`                     */

/*                const estilo_do_elemento = element.getAttribute("style")
        console.log(teste)       */