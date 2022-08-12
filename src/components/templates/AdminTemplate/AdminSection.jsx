import { CardList } from "../../CardList";
import { SearchInput } from "../../SearchInput";
import { Plus } from "phosphor-react"
import './section.css'

export function AdminSection({
  title,
  data
}) {
  return (
    <main className="main-adm">
    <div className="main-adm__list__title">
      <h1>{title}</h1>
      <Plus
        className="plus-icon"
        size={50}
        color="var(--white)"
      />
    </div>
    <SearchInput />
    <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {data?.map((item, index) => (
        <CardList key={index} data={item} />
      ))}
    </section>
  </main>
  )
}