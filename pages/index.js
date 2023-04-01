import Head from 'next/head'
import Link from 'next/link'
import{DiGithubAlt, DiDjango, DiMysql, DiCss3, DiHtml5 } from 'react-icons/di'
import{CiLinkedin} from 'react-icons/ci'
import{TbBrandPython, TbBrandTypescript, TbBrandNextjs, TbBrandMysql, TbBrandFigma} from 'react-icons/tb'
import{FaJava} from 'react-icons/fa'
import{SiFlask, SiSpring, SiNodedotjs, SiExpress, SiTailwindcss, SiOracle, SiDjango, SiPython, SiTypescript, SiJavascript, SiNextbilliondotai} from 'react-icons/si'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevDré</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-gray-950 px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <Image src="/logo.png" alt="logo" width="200" height="30"/>
            <ul className='flex items-center'>
              <li>
                <a className='bg-red-500 text-white px-4 py-2 rounded-md ml-8 ' href='#'>Download CV</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
          <Image src="/logo2(1).png" alt="logo2(1)" width="200" height="30" className='relative mx-auto'/> 
          <h3 className='text-5xl py-2 text-white font-extralight'>Desenvolvedor beckend</h3>
            <div className='py-10 mb-12 text-7xl flex justify-center gap-0.5 text-white '>
              <TbBrandPython />
              <FaJava />
              <TbBrandTypescript/>
              <TbBrandMysql />
              <SiOracle />
            </div>
          </div>
          <div>
            <Image src="/avatar.png" alt="avatar" width="400" height="400" className='relative mx-auto bg-gradient-to-b from-red-500 rounded-full'/>
          </div>
          <div className='text-5xl flex justify-center gap-0.5 text-red-500 '>
            <DiGithubAlt />
            <CiLinkedin />
          </div>
        </section>

        <br/>

        <section>
          <h3 className='text-5xl py-2 text-white font-extralight'>Quem sou eu?</h3>
            <Image src="/eu1.jpg" alt="eu1" width="250" height="250" className='relative bg-gradient-to-b from-red-500 rounded-full'/>
            <p className='text-1xl py-1 text-white font-extralight leading-8'>Caindo de paraquedas nessa area, dei inicio aos meus estudo em 2022 quando entrei na faculdade
              de tecnologia de São José dos Campos "Fatec.Prof Jessen Vidal"
            </p>
            <p className='text-1xl py-1 text-white font-extralight leading-8'>La conheci as principais tecnologias ultilizadas no mercado 
            como html5, css3 e javascript, aprendi loica de programação com python, e depois de muito estudo me tornei monitor da materia de algoritimos e logica de programação.
            Auxiliano alunos recem chegados com a linguagem python
            </p>
            <p className='text-1xl py-1 text-white font-extralight '>Apos um semestre inteiro desenvolvend aplicações web com python,flask,e outras tecnologias,
             fui apresentado as tecnologias react,node e typescript que aprendi a gostar, apesar de ter dificuldades no começo
            </p>
        </section>
        <br/>
        <section>
        <h3 className='text-5xl py-2 text-red-500 font-extralight'>Serviços que eu ofereço</h3>
        <p className='text-1xl py-1 text-white font-extralight leading-8'>
          Aplicações beckend e frontend e modelagem de bancos de dados SQL
        </p>

        <div>
          <div className=' text-center p-10 rounded-xl'>
            <h4 className='text-lg font-extralight text-white'>Aplicações Beck-end</h4>
            <p className='py-2 text-white'>
              Softwares para analise dados, leituras de tabelas em pdf,web scrapping e automações
            </p>
            <h4 className='py-4 text-red-500 font-extralight text-4xl'>Tecnologias usadas</h4>
            <p className='py-1 text-white'>Python</p>
            <p className='py-1 text-white'>Flask</p>
            <p className='py-1 text-white'>Django</p>
            <div className='py-10 mb-12 text-7xl flex justify-center gap-0.5 text-white '>
              <SiPython />
              <SiFlask />
              <SiDjango />
            </div>
            <h4 className='text-lg font-extralight text-white'>Aplicações web</h4>
            <p className='text-1xl py-1 text-white font-extralight leading-8'>
              Aplicações web e Api's, envovlendo cadastros de usuarios, servicos, agencias etc.Aplicações com a implementação de microservices e single page aplication
            </p>
            <h4 className='py-4 text-red-500 font-extralight text-4xl'>Tecnologias usadas</h4>
            <p className='py-1 text-white'>Java</p>
            <p className='py-1 text-white'>typescript</p>
            <p className='py-1 text-white'>javascript</p>
            <p className='py-1 text-white'>node.js</p>
            <p className='py-1 text-white'>express</p>
            <p className='py-1 text-white'>Spring boot</p>
            <p className='py-1 text-white'>mysql</p>
            <div className='py-10 mb-12 text-7xl flex justify-center gap-0.5 text-white '>
              <FaJava />
              <SiTypescript />
              <SiJavascript />
              <SiNodedotjs />
              <SiExpress />
              <SiSpring />
              <DiMysql/>
            </div>

            <h4 className='text-lg font-extralight text-white'>Aplicações frontend</h4>
            <p className='text-1xl py-1 text-white font-extralight leading-8'>
              Aplicações front-end com desine elegante, moderno e atrativo para melhor experiencia do usuario
            </p>
            <h4 className='py-4 text-red-500 font-extralight text-4xl'>Tecnologias usadas</h4>
            <p className='py-1 text-white'>HTML5</p>
            <p className='py-1 text-white'>CSS3</p>
            <p className='py-1 text-white'>javascript</p>
            <p className='py-1 text-white'>next.js</p>
            <p className='py-1 text-white'>Tailwindcss</p>
            <p className='py-1 text-white'>Figma</p>
            <div className='py-10 mb-12 text-7xl flex justify-center gap-0.5 text-white '>
              <DiHtml5 />
              <DiCss3 />
              <SiJavascript/>
              <TbBrandNextjs />
              <SiTailwindcss/>
              <TbBrandFigma/>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}
