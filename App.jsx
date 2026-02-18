import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './src/components/Layout/Layout'
import './App.css'
import Inicio from './src/pages/Inicio/Inicio'
import Servicios from './src/pages/Servicios/Servicios'
import Productos from './src/pages/Productos/Productos'
import Nosotros from './src/pages/Nosotros/Nosotros'
import Contacts from './src/components/Contacts/Contacts'
import Footer from './src/components/Footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <div className='app.container'>
          < Layout />
          <Contacts className="!hidden md:!flex flex-col fixed top-[15%] right-[4%] z-50 gap-4" />
        </div>
        <div className="pb-32">
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/Nosotros' element={<Nosotros />} />
          </Routes>
        </div>
        <Footer className="fixed bottom-0 left-0 w-full z-40" />

      </div >
    </Router >
  )
}

export default App



// export default function App() {
//   return <h1>Hello, World!</h1>;
// }

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Layout from './src/components/Layout/Layout'; // FIX: Consistent ./src
// import './App.css';
// import Inicio from './src/pages/Inicio/Inicio'; // FIX: Added . and removed leading /
// import Servicios from './src/pages/Servicios/Servicios'; // FIX: Same as above
// import Productos from './src/pages/Productos/Productos'; // FIX: Same as above
// import Nosotros from './src/pages/Nosotros/Nosotros'; // FIX: Same as above
// import Contacts from './src/components/Contacts/Contacts'; // FIX: Consistent pathing
// import Footer from './src/components/Footer/Footer';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       <div className="app">
//         <div className="app-container"> {/* FIX: Changed . to - for standard CSS */}
//           <Layout />
//           <Contacts className="!hidden md:!flex flex-col fixed top-[15%] right-[4%] z-50 gap-4" />
//         </div>
//         <div className="pb-32">
//           <Routes>
//             <Route path="/" element={<Inicio />} />
//             <Route path="/servicios" element={<Servicios />} />
//             <Route path="/productos" element={<Productos />} />
//             {/* Note: Ensure link case matches '/Nosotros' or change to '/nosotros' */}
//             <Route path="/nosotros" element={<Nosotros />} />
//           </Routes>
//         </div>
//         <Footer className="fixed bottom-0 left-0 w-full z-40" />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Layout from './src/components/Layout/Layout';
// import './App.css';
// import Inicio from './src/pages/Inicio/Inicio';
// import Servicios from './src/pages/Servicios/Servicios';
// import Productos from './src/pages/Productos/Productos';
// import Nosotros from './src/pages/Nosotros/Nosotros';
// import Contacts from './src/components/Contacts/Contacts';
// import Footer from './src/components/Footer/Footer';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       <div className="app">
//         <div className='app-container'>
//           <Layout />
//           <Contacts className="!hidden md:!flex flex-col fixed top-[15%] right-[4%] z-50 gap-4" />
//         </div>
//         <div className="pb-32">
//           <Routes>
//             <Route path='/' element={<Inicio />} />
//             <Route path='/servicios' element={<Servicios />} />
//             <Route path='/productos' element={<Productos />} />
//             {/* Changed to lowercase 'nosotros' to be safe, or ensure your links match uppercase */}
//             <Route path='/nosotros' element={<Nosotros />} />
//           </Routes>
//         </div>
//         <Footer className="fixed bottom-0 left-0 w-full z-40" />
//       </div>
//     </Router>
//   );
// }

// export default App;