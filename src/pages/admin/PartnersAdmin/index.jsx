import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function PartnersAdmin() {
  const [partners, setPartners] = useState([])
  const [key, setKey] = useState('')
  

  useEffect(()=> {
    async function getPartners() {
      try {
        const response = await axios.get(`https://go-vegan-api.herokuapp.com/partners?q=${key}`)
        setPartners(response.data)      
      }
      catch (err) {
        console.error(err);
      }
    }
    getPartners()
  },[key]) 

  function handleSearch(value) {
    setKey(value)
  }

    async function deletePartners(ID) {
      try {
        const response = await axios.delete(`https://go-vegan-api.herokuapp.com/partners/${ID}`)
        setPartners(partners.filter(partner => partner.id !== ID))
      }
      catch (err) {
        console.error(err);
      }
    }

  return (
    <AdminTemplate colorPartners='--tertiary'>
      <AdminSection
        title={'Parceiros GoVegan'}
        data={partners}
        handleSearch={handleSearch}
        handleClick={deletePartners}
      />
    </AdminTemplate>
  )
}