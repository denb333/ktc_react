
// =======BT1=========

// import { useState } from "react";
// // import './App.css';
// // import './GetIconButton.module.css';

// import {
//   GetStartedButton,
//   AppleButton,
//   GoogleButton,
//   FacebookButton,
// } from "./components/GetIconButton/index";

// function App() {
//   return (
//     <>
//       <div className="getItem">
//         <GetStartedButton onClick={() => console.log("Start")} />
//         <AppleButton onClick={() => console.log("Apple")} />
//         <GoogleButton onClick={() => console.log("Google")} />
//         <FacebookButton onClick={() => console.log("Facebook")} />
//       </div>
//     </>
//   );
// }

// export default App;

// src/App.tsx

// import { ArrowRight, Smartphone, Chrome, Facebook } from 'lucide-react';
// import Button from './components/Button/index';    

// function App() {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: '#e5eaef',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         paddingTop: 40,
//       }}
//     >

//       <Button
//         label="Get started"
//         rightIcon={<ArrowRight size={18} />}
//         type="primary"

//       />


//       <Button
//         label="Continue with Apple"
//         leftIcon={<Smartphone size={18} />}      
//         type="primary"
//       />


//       <Button
//         label="Continue with Google"
//         leftIcon={<Chrome size={18} />}       
//         type="outline"
//       />


//       <Button
//         label="Continue with Facebook"
//         leftIcon={<Facebook size={18} />}
//         type="outline"
//       />
//     </div>
//   );
// }

// export default App;




// =======BT2=========

// import SearchInput from './components/Input/index';
// import { Trash2, SlidersHorizontal, Phone, Smile, Mail, } from 'lucide-react';
// import styles from './components/Input/SearchInput.module.css';
// function App() {
//   return (
//     <div
//       className={styles.container}>

//       <SearchInput placeholder="" />

//       <SearchInput placeholder="Search" />

//       <SearchInput value="Textfield" />

//       <SearchInput
//         placeholder="Search in the web"
//         rightIcon={<Trash2 size={16} />}
//       />

//       <SearchInput
//         placeholder="Search crypto"
//         rightIcon={<SlidersHorizontal size={16} />}
//       />

//       <SearchInput
//         placeholder="Phone number"
//         leftIcon={null}
//         rightIcon={<Phone size={16} />}
//         rightIconBg="#C7F6D4"
//       />

//       <SearchInput
//         placeholder="Funny search"
//         rightIcon={<Smile size={16} />}
//         rightIconBg="#F7E79A"
//       />
//     </div>
//   );
// }

// export default App;



// =======BT3=========
// import MatchCard from "./components/Notifi/MatchCard";
// import ClubCard from "./components/Notifi/Club";
// import UserCard from "./components/Notifi/Atist";
// import ServiceCard from "./components/Notifi/ServiceCard";

// import { MoreHorizontal} from 'lucide-react';


// function App() {
//   return (
//    <div className="notify">
//      <MatchCard
//       minute={7}
//       home="Spain"
//       away="France"
//       homeFlag={<img src="/images/spain.jpg" width={18} />}
//       awayFlag={<img src="/images/france.jpg" width={18} />}
//       homeScore={0}
//       awayScore={0}
//       menuIcon={<MoreHorizontal size={18} />} // ghi đè icon ba chấm (nếu muốn)
//     />
//      <ClubCard
//         clubName="Manchester United"
//         clubLogo={<img src="/images/mu.jpg" width={38} />}
//         menuIcon={<MoreHorizontal size={18} />}
//       />
//       <UserCard
//         name="Wade Warren"
//         avatar={<img src="/images/messi.jpg" alt="user" />}
//         cardType={<span style={{ fontWeight: 'bold', color: 'blue' }}>VISA</span>}
//         cardNumber="4293 3242 ••••"
//       />
//       <ServiceCard
//         tags={[
//           { label: 'Highlight', color: '#E6F9E9' },
//           { label: 'Feeds',     color: '#F5E9FF' },
//         ]}
//         title="Dashboard"
//         subtitle="Business management service"
//         progress={80}
//       />
//    </div>
//   );
// }
// export default App;


import CameraCard from "./components/AppCard/CameraCard";
import PhoneCard from "./components/AppCard/PhoneCard";
import { Camera, Phone } from 'lucide-react';

function App() {
  return (
   <div className="notify">
     
      <CameraCard
        name="Le Hoai Nam"
        avatar={<img src="/images/myseft.jpg" alt="user" />}
        profession="Web Developer"
        menuIcon={<Camera size={18} />}
      />
     <PhoneCard
        name="María"
        avatar={<img src="/images/myseft1.jpg" alt="user" />}
        menuIcon={<Phone size={18} />}
      />
   </div>
  );
}
export default App;
