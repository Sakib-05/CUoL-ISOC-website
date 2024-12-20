import ISOCLogo from  '../assets/ISOC logo HighRes.jpg'
import CityBanner from '../assets/CityBanner3.jpg'
import '../components/MainPageImages.css'

function MainPageImages(){
    return(
        <div>

        <div class = "">
        <img src ={CityBanner} className="citybanner" alt ="citybanner" />
        </div>




        <div class="flex-container">

        <p className='whoarewe'>Who are we</p>

        <p className='whoarewedescription'> We are muslims from the<br></br> City University of London<br></br> who are part of a society (this is all test)</p>   


        <img src ={ISOCLogo} className="isocmainlogo" alt ="isoclogo" />
        </div>


        </div>


    )
}

export default MainPageImages