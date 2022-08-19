import React from 'react'
import "./left.css"

const Left = () => {
  return (
    <div className='left'>
      <div className='write'>
          <h3>Write</h3><br />
          <h6>Poem Title*</h6><br />
          <div className='input_title'>
              <input type="text"/>
      </div><br />
      <div className='about'>
          <h6>About This Poem*</h6><br />
          <input type="text" />

      </div><br />

      <div className='poem'>
          <h6>Poem*</h6><br />
          <textarea name="" id="" cols="30" rows="10"></textarea>

      </div><br />
      <div className='select'>
          <h6>Genre*</h6><br />
          <select id="select_option">
      <option value="volvo">Select genre</option>
      <option value="volvo">Military</option>
      <option value="saab">Spy Fiction</option>
      <option value="opel">Comedy</option>
      <option value="audi">Parodies</option>
    </select><br /><br />
    <a href="">suggest a new genre</a>

      </div>
      <div className='select'><br />
          <h6>Poems Form*</h6><br />
          <select id="select_option">
      <option value="volvo">Select Form</option>
      <option value="volvo">Military</option>
      <option value="saab">Spy Fiction</option>
      <option value="opel">Comedy</option>
      <option value="audi">Parodies</option>
    </select>
    </div><br />
    <div className='date'>
      <h6>Date Written*</h6>
    <input type="date" id="birthday" name="birthday"></input>
      </div><br />
      <div className='public'>
          <button><a href=""> Publish</a></button>
      </div>
      </div>
    </div>
  )
}

export default Left;