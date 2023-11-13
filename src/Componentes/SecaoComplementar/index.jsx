import React from 'react'
import style from './secaocomplementar.module.css'
import antesDepois from '../../Assets/Images/antes-e-depois.png'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Botao from '../Botao';

export default function SecaoComplementar() {
  return (
    <main className={style.secao__complementar}>
        <h2 className={style.complementar__titulo}>Renove a beleza da sua pele e recupere sua auto estima!</h2>
        <h3 className={style.complementar__subtitulo}>Você também merece ter uma pele maravilhosa todos os dias!</h3>
        <section className={style.complementar__container__imagem__textos}>
            <img className={style.complementar__imagem} src={antesDepois} alt="Antes e Depois" />
            <section className={style.container__textos__botao}>
            <p className={style.complementar__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
            <p className={style.complementar__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
            <p className={style.complementar__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
            <p className={style.complementar__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
            <p className={style.complementar__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
            <Botao>
              Quero Restaurar Minha Pele!
            </Botao>
            </section>
        </section>
    </main>
  )
}
