// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './about';
// import Home from './home';
// import Services from './services';
// import Contact from './contact';
// import Mainapp from './mainapp';
// // import { BrowserRouter as Router} from 'react-router-dom;


// export default function App() {
//   return (
//     <BrowserRouter>
//    <Mainapp/>
//       <Routes>
//       <Route path="/" element={<Mainapp/>} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
      
//     </BrowserRouter>

// //   <Switch>
// //     <OffcanvasExample/>
// // <Route path='/about' component={About}/> 
// //   </Switch>
    





//   );
// }


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Services from './services';
import Contact from './contact';
import Mainapp from './mainapp';
import OffcanvasExample from './navbar';
import Signup from './signup';
import SuccessPage from './successpage';

export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <OffcanvasExample />
      <Routes>
        <Route path="/" element={<Mainapp />} />
        <Route path="/home" element={<Mainapp />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/successpage" element={<SuccessPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
