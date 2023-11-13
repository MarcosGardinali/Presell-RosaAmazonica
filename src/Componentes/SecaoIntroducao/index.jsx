import React from 'react'
import style from './secaointroducao.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import rosaAmazonica from '../../Assets/Images/rosaamazonica.png'
import Botao from '../Botao'

export default function SecaoIntroducao() {
  return (
    <main className={style.secao__introducao}>
      <section className={style.introducao__container__textos__imagem}>
        <article className={style.container__textos}>
          <h1 className={style.introducao__titulo}>Descubra o poder da Rosa Mosqueta Amazônica!</h1>
          <h2 className={style.introducao__subtitulo}>A tecnologia americana que devolve a beleza da sua pele!</h2>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Hidratação 24 horas</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Clareia e Uniformiza a Pele</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Clareador de Manchas</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Elimina o “Pé de Galinha” e “Bigode Chinês”</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Devolve a Firmeza e Elasticidade a sua Pele</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Combate Estrias e Foliculite</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Alívio das irritações</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> 11 efeitos em 1 sérum</p>
          <p className={style.intrducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Rosa Mosqueta + Ácido Hialurônico + Verisol</p>
        </article>
        <img className={style.introducao__imagem} src={rosaAmazonica} alt="Imagem do produto Rosa Amazonica" />
      </section>
      <Botao>
          Continuar!
      </Botao>
    </main>
  )
}
