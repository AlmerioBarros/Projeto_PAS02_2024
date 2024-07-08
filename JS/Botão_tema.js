

export default function Botao_tema(){

    const body = document.querySelector("body")
    const btn_tema = document.querySelector(".container_tema")
    const btn_sol = document.querySelector(".sol")
    const btn_lua = document.querySelector(".lua")

    btn_lua.style.opacity = "0.27"

    btn_tema.addEventListener("click", ()=> Mudando_tema())


    function Mudando_tema(){
        if(body.classList.contains("modo_claro")){
            btn_lua.style.opacity = "1"
            btn_sol.style.opacity = "0.27"

            body.classList.toggle("modo_claro")
            body.classList.toggle("modo_escuro")

        }else if(body.classList.contains("modo_escuro")){
            btn_lua.style.opacity = "0.27"
            btn_sol.style.opacity = "1"

            body.classList.toggle("modo_claro")
            body.classList.toggle("modo_escuro")
        }




    }

}