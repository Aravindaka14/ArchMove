

function App() {
  return (
    <div className='min-w-full min-h-full'>
      <header className="w-full h-20 px-32 flex items-center justify-between">
        <div className="flex space-x-10">
          <div className='logo leading-3'>
            <img className="w-12 h-4" src="assets\Arch.svg" alt='logoArch' />
            <img className="w-12 h-4" src="assets/move.svg" alt='logoMove' />
          </div>
          <div className="flex space-x-6 font-inter items-center tracking-1p">
            <p className="tracking-1p font-inter text-NavText text-sm">How it Works</p>
            <p className="tracking-1p font-inter text-NavText text-sm">Design Gallery</p>
            <p className="tracking-1p font-inter text-NavText text-sm">Architects</p>
            <p className="tracking-1p font-inter text-NavText text-sm">Articles</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <img className="w-6 h-6 m-1 p-1 bg-gray-100 rounded-xl" src="assets\Vector.svg" alt="searchIcon" />
          <p className="font-inter text-NavText text-sm">Sign In</p>
          <button className="bg-buttonBg font-inter text-white text-sm px-5 py-0 leading-10 rounded">Sign Up</button>
        </div>
      </header>
      <main className="space-y-16 px-32 py-16">
        <p className="font-playfair font-extrabold text-7xl text-left"> Build Your <br /> Dream <span className="text-heroOrange">House</span></p>
        <div className="flex w-full space-x-auto">
          <div className="space-y-10 text-wrap">
            <p className="font-inter text-black text-md text-left">100% guaranteed build safe, comfortable and transparent with a project management for the result.</p>
            <button className="bg-buttonBg font-inter text-white text-sm leading-10 rounded px-8 py-2">Free Consultation</button>
          </div>
          <img className="w-full h-auto " src="assets\Image.svg" alt="" />
        </div>
      </main>
      <main className=" space-y-16 px-32 py-20 overflow-hidden">
        <div className="flex justify-between">
          <p className="h-auto font-playfair font-extrabold text-5xl">Build Professional <br /> valuable rooms</p>
          <div className="flex space-x-2 items-center">
            <img className="bg-vectorArrowBg  bg-opacity-5 w-8 h-8 p-2 text-heroOrange" src="assets\Vector (1).svg" alt="navigation arrow" />
            <img className="bg-vectorArrowBg  bg-opacity-5 w-8 h-8 p-2 text-heroOrange" src="assets\Vector (2).svg" alt="navigation arrow" />
          </div>
        </div>
        <div className="flex space-x-20  " >
          <img className="w-auto" src="assets\img-01.svg" alt="SampleRoomImages" />
          <img className="w-auto" src="assets\img-02.svg" alt="SampleRoomImages" />
          <img className="w-auto" src="assets\img-03.svg" alt="SampleRoomImages" />
          <img className="w-auto" src="assets\img-04.svg" alt="SampleRoomImages" />
        </div>
      </main>
      <main className="flex flex-col items-center px-32 py-20 space-y-16">
        <div className="flex">
          <img src="assets\img-5.svg" alt="teamworkPic" />
          <div className="px-32 space-y-10">
            <p className="font-playfair font-extrabold text-5xl leading-tight">Build your needs with Archmove</p>
            <div className="flex space-x-10">
              <div className=" relative w-16 h-16">
                <img className="absolute top-5 left-2 w-4 h-3" src="assets\Vector 1.svg" alt="guaranteePic" />
                <img className="w-12 h-14" src="assets\Rectangle 5.svg" alt="guaranteePic" />
              </div>
              <div className="space-y-2">
                <p className="font-inter font-bold text-base">100% guaranteed project completion</p>
                <p className="font-inter font-normal text-base leading-relaxed text-wrap">Build safe, comfortable and transparent with a project management application with a joint account.</p>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className=" relative w-16 h-16">
                <img className="absolute top-5 left-3 w-5 h-4" src="assets\$.svg" alt="guaranteePic" />
                <img className="w-9 h-11" src="assets\Rectangle 6.svg" alt="guaranteePic" />
              </div>
              <div className="space-y-2">
                <p className="font-inter font-bold text-base">No additional fees</p>
                <p className="font-inter font-normal text-base leading-relaxed text-wrap">There are no hidden costs. The value of the offer you get is the value you paid.</p>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className=" relative w-16 h-16">
                <img className="absolute top-5 left-3 w-4 h-3" src="assets\Ellipse 1.svg" alt="guaranteePic" />
                <img className="w-9 h-14" src="assets\Rectangle 7.svg" alt="guaranteePic" />
              </div>
              <div className="space-y-2">
                <p className="font-inter font-bold text-base">Get escort from the team</p>
                <p className="font-inter font-normal text-base leading-relaxed text-wrap">Monitor reports from the Arsitag team who checks directly in the field.</p>
              </div>
            </div>
          </div>
        </div>
        <button className=" bg-buttonBg font-inter text-white text-sm leading-10 rounded px-8 py-2">Free Consultation</button>
      </main>
      <main className="px-40 py-20 space-y-16 ">
        <p className="w-1/3 font-playfair font-extrabold text-5xl leading-tight">Sound Too Good To Be True?</p>
        <div className=" flex flex-col justify-end items-end space-y-12">
          <div className="w-2/3 flex justify-start items-start space-x-12">
            <img src="assets\“.svg" alt="comma" />
            <p className="font-inter font-normal text-4xl leading-relaxed">“We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.”</p>
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <p className="font-inter font-normal text-base">Aravind kumar - CEO Alfatech</p>
            <div className="flex space-x-2 items-center">
              <img className="bg-vectorArrowBg  bg-opacity-5 w-8 h-8 p-2 text-heroOrange" src="assets\Vector (1).svg" alt="navigation arrow" />
              <img className="bg-vectorArrowBg  bg-opacity-5 w-8 h-8 p-2 text-heroOrange" src="assets\Vector (2).svg" alt="navigation arrow" />
            </div>
          </div>
        </div>
      </main>
      <main className="flex items-center justify-evenly ">
        <img src="assets\Mask Group.svg" alt="building with cloud" />
        <div className="flex flex-col items-center w-4/12 space-y-12">
          <p className="font-playfair font-extrabold text-6xl text-center"> Realize your dream project with <span className="text-heroOrange">Archmove</span></p>
          <button className=" bg-buttonBg font-inter text-white text-sm leading-10 rounded px-8 py-2">Free Consultation</button>
        </div>
      </main>
      <footer>
        <div className="border-0 border-b-2 border-b-borderColor space-y-10 px-32 py-16 pb-12">
          <p className="font-playfair font-bold text-5xl leading-tight">Our Partners</p>
          <div className="flex space-y-6 justify-between items-center opacity-40">
            <img className="text-gray-200 " src="assets\UTurn.svg" alt="partnerLogos" />
            <img className="text-gray-200 " src="assets\NextMove.svg" alt="partnerLogos" />
            <img className="text-gray-200 " src="assets\pinpoint.svg" alt="partnerLogos" />
            <img className="text-gray-200 " src="assets\Leafe.svg" alt="partnerLogos" />
            <img className="text-gray-200 " src="assets\Terra.svg" alt="partnerLogos" />
            <img className="text-gray-200 " src="assets\Dune.svg" alt="partnerLogos" />
          </div>
        </div>
        <div className="flex justify-between space-y-2 px-32 py-20">

          <div className="flex space-x-10 font-inter items-center tracking-1p">
            <p className="tracking-1p font-inter text-NavText text-sm">About Us</p>
            <p className="tracking-1p font-inter text-NavText text-sm">How it Works</p>
            <p className="tracking-1p font-inter text-NavText text-sm">FAQ</p>
            <p className="tracking-1p font-inter text-NavText text-sm">Contact Us</p>
            <p className="tracking-1p font-inter text-NavText text-sm">Privacy Policy</p>
          </div>
          <div className='logo leading-3'>
            <img className="w-16 h-6" src="assets\Arch.svg" alt='logoArch' />
            <img className="w-16 h-5" src="assets/move.svg" alt='logoMove' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;