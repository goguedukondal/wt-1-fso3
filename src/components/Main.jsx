import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <div className="icone">
            <section className='changes  icones'> 
            <i class="fa-solid fa-desktop fa-2xl"></i>
            </section>
            <h1 className='res name' >Full Responsive</h1>
            <section>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus facilis ipsum sed, sint eligendi exercitationem libero. 
            </section>
            <section className='read'>
                Read more
            </section>
        </div>
        <div className="icone">
            <section className='icones'>
            <i class="fa-solid fa-user"></i>
            </section>
            <h1 className='name'>Trusted Author</h1>
            <section>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus facilis ipsum sed, sint eligendi exercitationem libero. 
            </section>
            <section className='read'>
                Read more
            </section>
        </div>

        <div className="icone">
            <section className='icones'><i class="fa-solid fa-recycle"></i></section>
            <h1 className='name'>Resuable element</h1>
            <section>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus facilis ipsum sed, sint eligendi exercitationem libero. 
            </section>
            <section className='read'>
                Read more
            </section>
        </div>

       

 
 

    </div>
  )
}

export default Main