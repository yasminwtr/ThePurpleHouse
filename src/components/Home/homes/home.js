import React from "react";
import landing from '../../assets/landing.png'
const Home =() =>{
    return (
        <>
        <section className="home">
            <div className="container flex">
                <div className="left">
                    <div className="img">
                        <img  width={540}src={landing} alt = 'img-landing.page' className="img"/>
                    </div>
                </div>
                    <div className="rigth topMargin">
                        <h1>Contrate prestadores<br/>
                        para sua casa!
                        </h1>
                        {/* <div className="scoialIcons"></div> */}
                        <p>Você pode solicitar serviços e efetua <br/> agendamentos diretamente com os <br/>profissionais. <br/> <br/>Crie sua conta, utilize nossas <br/>ferramentas e divulgue seu negócio!</p>
                        <button className="primarybtn">Começar</button>

                    </div>
            </div>

        </section>
        </>
    )
}
export default Home