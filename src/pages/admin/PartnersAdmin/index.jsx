import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';
import { useState } from "react";
import { useEffect } from "react";
import api from '../../../services/api'

export function PartnersAdmin() {
  const [partners, setPartners] = useState([])
  const [key, setKey] = useState('')  

  async function getPartners() {
    try {
      const response = await api.get(`/partners?q=${key}`)
      setPartners(response.data)      
    }
    catch (err) {
      console.error(err);
    }
  }
  
  useEffect(()=> {
    getPartners()
  },[key]) 

 
  async function deletePartners(ID) {
    try {
      await api.delete(`/partners/${ID}`)
      getPartners()
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
        handleSearch={setKey}
        handleClick={deletePartners}
      />
    </AdminTemplate>
  )
}