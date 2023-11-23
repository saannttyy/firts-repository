import React from 'react'

const Process = () => {
  return (
    <div className='py-20 border-b-2 border-gray-700 font-poppins flex flex-col justify-center items-center text-center lg:items-start lg:text-left'>
      <h3 className='text-3xl font-semibold text-zinc-300 pt-10'>Proceso practico y creativo</h3>
      <ul className="steps steps-vertical lg:steps-horizontal mt-7 lg:mt-12">
        <li className="step step-primary">Maquetacion de la web</li>
        <li className="step step-primary">Diseño de la web</li>
        <li className="step step-primary">Desarrollo en codigo</li>
        <li className="step step-primary">Entrega Demo</li>
        <li className="step step-primary">Retoques finales</li>
        <li className="step step-primary">Entrega final</li>
       </ul>
       <div className='mt-10 mb-10 text-center w-[80%] lg:w-full lg:text-left'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo modi temporibus accusantium, ab facilis? Quod exercitationem suscipit aspernatur repellendus dolorem incidunt voluptate esse cupiditate sed, debitis culpa blanditiis fugit!</p>
       </div>
    </div>
  )
}

export default Process
