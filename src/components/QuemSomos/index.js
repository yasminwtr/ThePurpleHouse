import React from "react";
import './style.css'
// import imgCode from '../assets/imgcode.png'
import Team from '../assets/img/Collab.png'

const QuemSomos =() =>{
    return(
        <>
        <section className="QuemS">
            <div className="Quem-text">
                <h1 className="text-h1">Quem somos</h1>
                <p>S|R é um projeto desenvolvido pelo grupo (tal de tal) do curso técnico de Análise e Desenvolvimento de Sistemas do SENAI-SC que acredita que a tecnologia está mudando profundamente o mundo, dando autonomia aos indivíduos, eliminando intermediários e viabilizando sonhos.</p>
                <p>A intenção do Site é promover a inclusão digital de profissionais independentes para que eles possam focar naquilo que fazem de melhor: seu trabalho.</p>
            
            </div>

            <div className="Quem-img">
                <img src={Team} alt='quemsomos' className="imgQuemS"/>
            </div>
        </section>

        <section className="ContainerText">
            <div className="texts-quemSomos">
            <h1 className="text-h1-quem">O que queremos?</h1>
                <p>Queremos que todos os profissionais independentes, possam ter acesso às ferramentas mais modernas para conquistar cada vez mais renda, independência e autonomia naquilo que fazem.</p>
            </div>
            <button>FAÇA PARTE</button>
        </section>

        </>
    )
}

export default QuemSomos