/* -- Byimaan -- */

import './App.css';
import LoadingPage from './Byimaan/Pages/LoadingPage/LoadingPage';
import ReferenceProvider from './Byimaan/Management/Contexts/ReferenceProvider';
import Hero from './Byimaan/Hero/Hero';
import MsgProvider from './Byimaan/Management/Contexts/MsgProvider';

export default function App() {
  return (

    <ReferenceProvider>

      <MsgProvider>
        <Main/>
      </MsgProvider>
       
    </ReferenceProvider>

  );
};

function Main(){
  return (
    <div id="main">

      {/* <LoadingPage/> */}

      <Hero/>

    </div>
  );
};
