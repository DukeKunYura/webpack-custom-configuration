import React, { FormEvent } from 'react'

export default function TestForm() {

    async function sendData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        console.log(formData.get("file"))
      }
  return (
    <>
    <h1>TestForm</h1>
    <form onSubmit={(event)=>{sendData(event)}}>
      <input type="file" name="file" />
      <button type="submit">Request</button>
    </form>
    </>
    
  )
}
