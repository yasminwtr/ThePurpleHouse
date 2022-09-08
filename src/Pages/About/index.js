import React, { useContext } from "react";
import './style.css'
// import imgCode from '../assets/imgcode.png'
import Team from '../../components/assets/img/Collab.png'
import {Link} from 'react-router-dom'
import AuthContext from '../../components/contexts/auth'

const About = () => {
    const { signed } = useContext(AuthContext);

    return (
        <body className="body-about">
            <section className="about">
                <div className="about-text">
                    <h1 className="text-h1-about">Quem somos</h1>
                    <p>The Purple House é um projeto desenvolvido pelo grupo 4tec, que acredita que a tecnologia está mudando profundamente o mundo, dando autonomia aos indivíduos, eliminando intermediários e viabilizando sonhos.
                    </p>
                    <p>The Purple House foi criado para facilitar o dia a dia de profissionais que tem dificuldade em mostrar seus serviços e também para clientes que precisam de facilidade para pedir determinado serviço residencial. Assim mostrando que a tecnologia muda vidas.
                    </p>

                </div>

                <div className="about-img">
                    <img src={Team} alt='about' className="img-about" />
                </div>
            </section>

            <section className="container-about-text">
                <div className="texts-about">
                    <h1 className="text-h1-about">O que queremos?</h1>
                    <p>Queremos que todos os profissionais independentes, possam ter acesso às ferramentas mais modernas para conquistar cada vez mais renda, independência e autonomia naquilo que fazem.</p>
                    
                    {signed ? 
                    <>
                        <div className="div-btn-about"> <a  href="/Categories" className="button-about"><Link to='/Categories' >OBRIGADA POR FAZER PARTE! :)</Link></a></div>
                    </> :
                    <>
                        <div className="div-btn-about"> <a  href="/Registration" className="button-about"><Link to='/Registration' >FAÇA PARTE</Link></a></div>
                    </>}
                </div>
            </section>

        </body>
    )
}

export default About