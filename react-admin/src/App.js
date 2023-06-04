import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./components/BarChart";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ApiDiscoveryHostnameList from "./scenes/apidiscoveryHostnameList";
import ApiDiscovery from "./scenes/apiDiscoveryDashboard";
import ApiDiscoveryDetails from "./scenes/apiDiscoveryDetails";
// import TopAPIEndpoints from "./scenes/topAPI";
// import Calendar from "./scenes/calendar/calendar";
import { initializeApp } from "firebase/app";
import MenuBar from "./components/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

const firebaseConfig = {
  apiKey: "AIzaSyAS26zmJxZQCseUPf3G1lxAUxbPNtOMe6U",
  authDomain: "chainwide-1e751.firebaseapp.com",
  projectId: "chainwide-1e751",
  storageBucket: "chainwide-1e751.appspot.com",
  messagingSenderId: "339564829860",
  appId: "1:339564829860:web:223a81900bba0dca115a31"
};

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // Your web app's Firebase configuration

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuBar />
        {/* <Banner /> */}
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              {/* <Route path="/topapi" element={<TopAPIEndpoints />} />  */}
              <Route path="/geography" element={<Geography />} />
              <Route path="/apidiscovery" element={<ApiDiscovery />} />
              <Route path="/apidetails" element={<ApiDiscoveryDetails />} />
            </Routes>
         
          </main>
        
        </div>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default App;