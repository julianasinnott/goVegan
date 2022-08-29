import './index.css'
import './responsive.css'
import { CardList } from "../../../CardList";
import { SearchInput } from "../../../SearchInput";
import { Plus } from "phosphor-react"
import { Link } from 'react-router-dom';
import { ConfirmModal } from '../../../ConfirmModal';
import { useState } from 'react';

export function AdminSection({
  title,
  data,
  handleSearch,
  deleteItem,
  titleModal  
})
 {
  const [showModal, setShowModal] = useState(false)
  const [itemID, setItemID] = useState('')
 
  function handleClick(itemSelectedID) {
    setShowModal(!showModal)
    setItemID(itemSelectedID)
  }

  function confirmDeleteItem() {
    deleteItem(itemID)
    setShowModal(false)
  }

  return (
    <main className="main-adm">
      {
        showModal && <ConfirmModal titleModal={titleModal} closeModal={handleClick} confirmDeleteItem={confirmDeleteItem} />
      }      
      <h1 className="main-adm__list__title">{title}</h1>
      <Link
       to={window.location.pathname === "/admin/parceiros"?
       "/admin/parceiros/cadastro" 
       :
       "/admin/receitas/cadastro"
      }>
        <Plus
          className="plus-icon"
          size={50}
          color="var(--white)"
        />
      </Link>
    <SearchInput handleSearch={handleSearch}/>
    <section className="card-list__sectiom" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {data?.map((item, index) => (
        <CardList handleClick={handleClick} key={index} data={item} />
      ))}
    </section>
  </main>
  )
}