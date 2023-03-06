import React from 'react'
import './End.css'
const End = () => {
  return (
    <div className='End'>
     
      <form>
        <input type="text" placeholder='NAME'></input>
        
        <input type="text" placeholder='PHONE'></input>
        <input type="mail" placeholder='EMAIL'></input>
        <textarea name="query"placeholder='QUERY' rows={5} cols="100%"></textarea>
        <button className='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default End
