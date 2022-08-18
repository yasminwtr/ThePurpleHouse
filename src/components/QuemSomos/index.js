import React from "react";
import './style.css'
// import imgCode from '../assets/imgcode.png'
import Team from '../assets/img/Collab.png'

const QuemSomos = () => {
    return (
        <body className="body-quemSomos">
            <section className="QuemS">
                <div className="Quem-text">
                    <h1 className="text-h1">Quem somos</h1>
                    <p>The Purple House é um projeto desenvolvido pelo grupo 4tec, que acredita que a tecnologia está mudando profundamente o mundo, dando autonomia aos indivíduos, eliminando intermediários e viabilizando sonhos.
                    </p>
                    <p>The Purple House foi criado para facilitar o dia a dia de profissionais que tem a dificuldade de mostrar seus serviços e tambem para clientes que precisam de facilidade para pedir determinado serviço residencial. Assim mostrando que a tecnologia muda vidas.
                    </p>

                </div>

                <div className="Quem-img">
                    <img src={Team} alt='quemsomos' className="imgQuemS" />
                </div>
            </section>

            <section className="ContainerText">
                <div className="texts-quemSomos">
                    <h1 className="text-h1-quem">O que queremos?</h1>
                    <p>Queremos que todos os profissionais independentes, possam ter acesso às ferramentas mais modernas para conquistar cada vez mais renda, independência e autonomia naquilo que fazem.</p>
                </div>
                <button>FAÇA PARTE</button>
            </section>

        </body>
    )
}

export default QuemSomos