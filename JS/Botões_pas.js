
import Criando_card from "./Criando_cards.js";

const botão_pas_01 = document.getElementById("pas_01")
const botão_pas_02 = document.getElementById("pas_02")
const botão_pas_03 = document.getElementById("pas_03")

const caminho_pas_01 = "../Documentos/obras_pas_2024_01.json";
const caminho_pas_02 = "../Documentos/obras_pas_2024_02.json";
const caminho_pas_03 = "../Documentos/obras_pas_2024_03.json";


botão_pas_01.addEventListener("click", () => CriandoElementosDoTemaReferente(caminho_pas_01, "pas_01") ) /* CriandoElementosDoTemaReferente(caminho_pas_01, "pas_01")*/ 

botão_pas_02.addEventListener("click", () => CriandoElementosDoTemaReferente(caminho_pas_02, "pas_02"))

botão_pas_03.addEventListener("click", () => CriandoElementosDoTemaReferente(caminho_pas_03, "pas_03"))


async function CriandoElementosDoTemaReferente(informações_API,qual_pas){

const arquivo = await fetch(informações_API)
const informações =  await arquivo.json()

Criando_card(informações, qual_pas)

}