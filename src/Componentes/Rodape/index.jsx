import React from 'react'
import style from './rodape.module.css'
import logoRodape from '../../Assets/Images/Logo-rodape.png'
import animais from '../../Assets/Images/animais.png'
import cartoes from '../../Assets/Images/cartoes.png'
import siteseguro from '../../Assets/Images/siteseguro.png'

export default function Rodape() {
    return (
        <footer className={style.rodape}>
            <section className={style.container__selos}>
                <section className={style.selos__rodape}>
                    <img src={logoRodape} alt='Imagem Logo' className={style.imagem__logo__rodape} />
                    <img src={animais} alt='Imagem Não Testamos em Animais' className={style.imagem__logo__rodape} />
                </section>
                <section className={style.selos__rodape}>
                    <h3>Formas de Pagamento</h3>
                    <img src={cartoes} alt='Imagem Cartões' className={style.imagem__selos} />
                </section>
                <section className={style.selos__rodape}>
                    <h3>Compra 100% Segura</h3>
                    <img src={siteseguro} alt='Imagem Site Seguro' className={style.imagem__selos} />
                </section>
            </section>
        </footer>
    )
}