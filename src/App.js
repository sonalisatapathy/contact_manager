import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactPage from "./Components/ContactPage";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
function App() {
  const localStorageKey = "contact";
  const [contactDetails, setContactDetails] = useState([]);
  const contactFormHandler = (info) => {
    setContactDetails([...contactDetails, info]);
    // console.log([...contactDetails, info]);
  };
  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(retriveData);
    if (retriveData) {
      setContactDetails(retriveData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactDetails));
  }, [contactDetails]);
  return (
    <>
      <Header />
      <ContactForm onContactFormHandler={contactFormHandler} />
      <ContactPage contactDetails={contactDetails} />
    </>
  );
}

export default App;
