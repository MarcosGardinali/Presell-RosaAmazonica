import React from 'react'
import style from './conteudo.module.css'
import logo from '../../Assets/Images/logo-rosa-amazonica-1024x305.png'
import SecaoIntroducao from '../SecaoIntroducao'
import SecaoComplementar from '../SecaoComplementar'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
        <img className={style.conteudo__imagem__logo} src={logo} alt="Imagem Logo" />
        <SecaoIntroducao />
        <SecaoComplementar />
    </main>
  )
}
