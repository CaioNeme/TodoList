import React, { useState } from "react"
import styled from "styled-components"

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
    <Form onSubmit={(event) => handleSubmit(event)}>
      <input type="text" placeholder="Search note ..." value={search.note} name="note" autoComplete="off" onChange={event => handleChange(event)}/>
      <button><ion-icon name="search-outline"/></button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content:center;
  position: relative;
  width: 100%;


  button{
    position: absolute;
    left:72.5%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #6c63ff;
    font-size:20px;
    margin-left: 10px;
    z-index:2;
  }

  input{
    border-color: #6c63ff;
    font-size: 16px;
    font-family: 'Arial';
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    color: #000000;
    z-index:1;
    width: 50%;
  }

  ::-webkit-input-placeholder {
    color: #b9b9b9;
    font-family: 'Arial';
    font-size: 16px;
  }

`
