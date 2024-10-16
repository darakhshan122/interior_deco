
// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home';
// import Contact from './components/contact';
// import Gallery from './components/gallery';
// import Navbar from './components/navbar';
// import Footer from './components/footer';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar is rendered on all pages */}
//         <Navbar />
//         <div className="flex-grow">
//           {/* Routes for different pages */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/gallery" element={<Gallery />} />
//           </Routes>
//         </div>
//         {/* Footer is rendered on all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change here
import Home from './components/home';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar is rendered on all pages */}
        <Navbar />
        <div className="flex-grow">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        {/* Footer is rendered on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//
