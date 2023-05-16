import React, { useEffect } from 'react'
import './contactpage.css'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import { images } from '../../constants'

const ContactPage = () => {
    useEffect(()=>{
        const dugmePoruka = document.querySelector('.viaMessage');
        const dugmePoziv = document.querySelector('.viaCall');
        const porukaProzor = document.querySelector('#option-message');
        const pozivProzor = document.querySelector('#option-call')
        const contactSection = document.querySelector('.o__contactPage_section')
        
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
        
        // console.log(classListaPoruka);
        // console.log(dugmePoruka);
        
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

    })




    
  return (
    <div className='o__contactPage'>
      <NavbarSection image={images.maintenanceWhite} imageLogo={images.obodinacFooter2}/>
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

                    <label htmlFor="problem">Moguci problem</label>
                    <select name="problem" id="problem">
                        <option value="servis-klime">Servis klima uredjaja</option>
                        <option value="klima-ne-hladi">Klima uredjaj ne hladi</option>
                        <option value="klima-ne-greje">Klima uredjaj ne greje </option>
                        <option value="sudomasina-ne-radi">Mašina za sudje ne radi</option>
                    </select>

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
                        <p className="podatak kontakt-ime">Nenad Buzadžija</p>
                        <p className="podatak kontakt-profesija">Majstor bele tehnike/klimatizacije</p>
                        <p className="podatak kontakt-broj">Broj: +38163507585</p>
                        <p className="podatak kontakt-email">Email: nenadbuzadzija@gmail.com</p>
                        
                    </div>
                    <div className="o__contactPage_options_call-person_img">
                        <img src={images.user} alt="slika osobe" />
                    </div>
                </div>
                <div className="o__contactPage_options_call-person">
                    
                    <div className="o__contactPage_options_call-person_info">
                        <p className="podatak kontakt-ime">Ninoslav Buzadžija</p>
                        <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                        <p className="podatak kontakt-broj">Broj: +381655075855</p>
                        <p className="podatak kontakt-email">Email: klimatizacijagrejanje@gmail.com</p>
                        
                    </div>
                    <div className="o__contactPage_options_call-person_img">
                        <img src={images.user} alt="slika osobe" />
                    </div>
                </div>
                <div className="o__contactPage_options_call-person">
                    
                    <div className="o__contactPage_options_call-person_info">
                        <p className="podatak kontakt-ime">Nemanja Buzadžija</p>
                        <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                        <p className="podatak kontakt-broj">Broj: +38163507585</p>
                        <p className="podatak kontakt-email">Email: nemanjabuzadzija@gmail.com</p>
                        
                    </div>
                    <div className="o__contactPage_options_call-person_img">
                        <img src={images.user} alt="slika osobe" />
                    </div>
                </div>
                <div className="o__contactPage_options_call-person">
                    
                    <div className="o__contactPage_options_call-person_info">
                        <p className="podatak kontakt-ime">Nikola Buzadžija</p>
                        <p className="podatak kontakt-profesija">Majstor klimatizacije</p>
                        <p className="podatak kontakt-broj">Broj: +381695075855</p>
                        <p className="podatak kontakt-email">Email: buzadzija.nikola13@gmail.com</p>
                        
                    </div>
                    <div className="o__contactPage_options_call-person_img">
                        <img src={images.user} alt="slika osobe" />
                    </div>
                </div>

            </div>
        </div>




    </div>
  )
}

export default ContactPage
