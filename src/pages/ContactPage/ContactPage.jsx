import React, { useEffect, useRef } from 'react'
import './contactpage.css'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import { images } from '../../constants'

import ScrollUp from '../../components/ScrollUp/ScrollUp'

import ClipboardJS from 'clipboard'


const ContactPage = () => {

    const emailRefs = {
        nenad: useRef(null),
        ninoslav: useRef(null),
        nemanja: useRef(null),
        nikola: useRef(null)
    };

    useEffect(()=>{
        const dugmePoruka = document.querySelector('.viaMessage');
        const dugmePoziv = document.querySelector('.viaCall');
        const porukaProzor = document.querySelector('#option-message');
        const pozivProzor = document.querySelector('#option-call')
        const contactSection = document.querySelector('.o__contactPage_section')

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');

        const clipboardInstances = Object.values(emailRefs).map((ref) => new ClipboardJS(ref.current, {
            text: () => ref.current.innerText,
          }));


        clipboardInstances.forEach((clipboard, index) => {
            clipboard.on('success', (e) => {
              console.log(`Email ${e.text} is copied`);
            });
        
            clipboard.on('error', (e) => {
              console.log('Failed to copy email:', e.text);
            });
          });
        
        
        let prozorPorukaPrikazan = false;
        let prozorPozivPrikazan = false;
        
        const pojavljivanjeProzora = (prozor) =>{
            prozor.classList.remove('d-none');
        }
        
        const sakrivanjeProzora = (prozor) =>{
            prozor.classList.add('d-none');
        }
        
        const ispitivanjeVidljivostiProzora = (prozorZaIspitivanje,prozorZaSakrivanje) =>{
            if(prozorZaIspitivanje){
                sakrivanjeProzora(prozorZaSakrivanje);
                prozorZaIspitivanje = false;
            }
        }
        
        
        dugmePoruka.addEventListener('click', () =>{
            ispitivanjeVidljivostiProzora(prozorPozivPrikazan,pozivProzor);
            pojavljivanjeProzora(porukaProzor);
            prozorPorukaPrikazan = true;
            contactSection.classList.add('height-auto');
        });
        
        dugmePoziv.addEventListener('click',()=>{
            ispitivanjeVidljivostiProzora(prozorPorukaPrikazan,porukaProzor);
            pojavljivanjeProzora(pozivProzor);
            prozorPozivPrikazan=true;
            contactSection.classList.add('height-auto');
        })

        return () => {
            clipboardInstances.forEach(clipboard => clipboard.destroy());
        };

    },[])




    
  return (
    <>
        <ScrollUp image={images.upArrow}/>
        <div className='o__contactPage slide-enterance1'>
        <NavbarSection activeLink='nav__contact'/>
        <div className='o__contactPage_section flex__center'>

                <div className="o__contactPage_options">
                    <div className="o__contactPage_options-button viaMessage">
                        <img src={images.emailIcon} alt="message-icon" className="o__contactPage_options-button_img"/>
                    </div>
                    <div className="o__contactPage_options-button viaCall">
                        <img src={images.phoneIcon} alt="phone-icon" className="o__contactPage_options-button_img"/>
                    </div>
            
                </div>

                <div className="o__contactPage_options-window d-none" id="option-message">
                    <form action="" className="kontakt-inputi">

                        <label htmlFor="ime">Ime</label>
                        <input type="text" name="ime" placeholder="Petar" required/>
                        <label htmlFor="prezime">Prezime</label>
                        <input type="text" name="ime" placeholder="Petrović" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="petar.petrovic@gmail.com" required/>
                        <label htmlFor="phone">Broj telefona</label>
                        <input type="number" name="phone" placeholder="123/345-678"/>


                        <label htmlFor="poruka">Poruka</label>
                        <div className='textarea_wrapper flex__center'>
                            <textarea name="poruka" id="poruka" cols="50" rows="10"></textarea>
                        </div>

                        <div className="o__contactPage_options_message-submit" id='submitButton'>
                            <input type="submit" value="Pošalji"/>
                        </div>
                        
                    </form>
                </div>

                <div className="o__contactPage_options-call d-none" id="option-call">

                    <div className="o__contactPage_options_call-person">
                        
                        <div className="o__contactPage_options_call-person_info">
                            <h3 className="podatak kontakt-ime">Nenad Buzadžija</h3>
                            <p className="podatak kontakt-profesija">Majstor bele tehnike/klimatizacije</p>
                            <p className="podatak kontakt-broj">Broj: <a href='tel:+38163507585'> +38163507585</a></p>
                            <p className="podatak kontakt-email">Email: <span className='profile-email' ref={emailRefs.nenad}>nenadbuzadzija@gmail.com</span></p>
                            
                        </div>
                        <div className="o__contactPage_options_call-person_img">
                            <img src={images.user} alt="slika osobe" />
                        </div>
                    </div>
                    <div className="o__contactPage_options_call-person">
                        
                        <div className="o__contactPage_options_call-person_info">
                            <h3 className="podatak kontakt-ime">Ninoslav Buzadžija</h3>
                            <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                            <p className="podatak kontakt-broj">Broj: <a href='tel:+381655075855'>+381655075855</a></p>
                            <div className='kontakt-email-wrapper'>
                                <div className='o__contactPage_options_call-person_info-copy'>
                                    <p>Kopirano</p>
                                </div>
                                <p className="podatak kontakt-email">Email: <span className='profile-email' ref={emailRefs.ninoslav}>klimatizacijagrejanje@gmail.com</span></p>                         
                            </div>
                        </div>
                        <div className="o__contactPage_options_call-person_img">
                            <img src={images.user} alt="slika osobe" />
                        </div>
                    </div>
                    <div className="o__contactPage_options_call-person">
                        
                        <div className="o__contactPage_options_call-person_info">
                            <h3 className="podatak kontakt-ime">Nemanja Buzadžija</h3>
                            <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                            <p className="podatak kontakt-broj">Broj: <a href='tel:+381631282041'>+381631282041</a></p>
                            <p className="podatak kontakt-email">Email: <span className='profile-email' ref={emailRefs.nemanja}>nemanjabuzadzija@gmail.com</span></p>
                            
                        </div>
                        <div className="o__contactPage_options_call-person_img">
                            <img src={images.user} alt="slika osobe" />
                        </div>
                    </div>
                    <div className="o__contactPage_options_call-person">
                        
                        <div className="o__contactPage_options_call-person_info">
                            <h3 className="podatak kontakt-ime">Nikola Buzadžija</h3>
                            <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                            <p className="podatak kontakt-broj">Broj: <a href='tel:+381695075855'>+381695075855</a></p>
                            <p className="podatak kontakt-email">Email: <span className='profile-email' ref={emailRefs.nikola}>buzadzija.nikola13@gmail.com</span></p>
                            
                        </div>
                        <div className="o__contactPage_options_call-person_img">
                            <img src={images.user} alt="slika osobe" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage


// import React, { useRef } from 'react';

// const MyComponent = () => {
//   const divRefs = useRef([]);

//   const copyText = (index) => {
//     const textToCopy = divRefs.current[index].innerText;

//     // Copy the text to the clipboard
//     // ...

//     console.log('Text copied:', textToCopy);
//   };

//   return (
//     <div>
//       <div onClick={() => copyText(0)} ref={(el) => (divRefs.current[0] = el)}>
//         Text 1
//       </div>
//       <div onClick={() => copyText(1)} ref={(el) => (divRefs.current[1] = el)}>
//         Text 2
//       </div>
//       <div onClick={() => copyText(2)} ref={(el) => (divRefs.current[2] = el)}>
//         Text 3
//       </div>
//     </div>
//   );
// };

// export default MyComponent;

