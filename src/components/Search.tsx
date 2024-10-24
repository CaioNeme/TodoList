import React, { useState } from "react"

export default function Search() {
  const [search, setSearch] = useState({note: ''})	

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (search.note == '') {
      return
    }
    setSearch(search)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newNote = {...search}
    newNote[event.target.name as keyof typeof newNote] = event.target.value
    setSearch(newNote)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input type="text" placeholder="Search note ..." value={search.note} name="note" autoComplete="off" onChange={event => handleChange(event)}/>
      <button>Search</button>
    </form>
  )
}
