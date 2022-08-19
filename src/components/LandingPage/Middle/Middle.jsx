import React from 'react'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineBookmarkAdd} from 'react-icons/md'
import {AiOutlineDash} from 'react-icons/ai'
import "./Middle.css"
import profilepic from '../../../resources/profilepic.PNG'
import homeimg from '../../../resources/homeimg.PNG'
const Middle = () => {
  return (
    <div className='middle'>
<img src={homeimg} alt="homeimg" />   
        <br /><br />
        <h5>Popular Poems</h5><br />
 <div className='community'>
  <h4>Community</h4><br />
  <p>Discuss everything about Poetry 
    with the community:
  </p><br />
  <img src={profilepic} alt="" />
  <h5>Lorem ipsum</h5>
  <h6>10 Members</h6>

<button>
  <a href="">Join</a>
</button>
<hr />
 </div>
 <div className='profcom'>
 <img src="./image/profilepic.PNG" alt="profilepic" />
      <h3>Username</h3>
      <span className='timer'> -4 days ago</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Ac curabitur in eu eget eget viverra ut faucibus. 
         Aliquam facilisis neque magna urna vulputate est. Sed
          tempus non at enim sit nisl. 
        Facilisis tempus cursus velit faucibus. </p>
      <div  className='pmicions'>
      <a href="#">
        <AiOutlineHeart className='micon3' />
        <FaRegComment className='micon4'/> 
            
          </a>
          <span>200</span>
          <p >80</p>
          
  </div>
 </div>
 <div className='profcom'>
 <img src="./image/profilepic.PNG" alt="profilepic" />
      <h3>Username</h3>
      <span className='timer'> -4 days ago</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Ac curabitur in eu eget eget viverra ut faucibus. 
         Aliquam facilisis neque magna urna vulputate est. Sed
          tempus non at enim sit nisl. 
        Facilisis tempus cursus velit faucibus. </p>
      <div  className='pmicions'>
      <a href="#">
        <AiOutlineHeart className='micon3' />
        <FaRegComment className='micon4'/> 
        </a>
        <span>200</span>
        <p >80</p>
          
 </div>
 <div className='comment'>
  <input type="text" placeholder='Add Comment' />

  
<button className='publish'>
  <a href="">Publish</a>
</button>

 </div>
 </div>
 <div className='poem_form'>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Haiku </a>
 <input type="checkbox" name=''/>
 <a href=''> Italian Sonnet </a>
 <input type="checkbox" name=''/>
 <a href=''> Limerick </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a><br />
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a>
 <input type="checkbox" name=''/>
 <a href=''> Ghazal </a><br /><br />
 <hr /><br /><br />
 </div>
  <div className='paragraphs'>
    <h3> Peace was never found but earned</h3> <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Ac curabitur in eu eget eget viverra ut faucibus. 
         Aliquam facilisis neque magna urna vulputate est. Sed
          tempus non at enim sit nisl. 
        Facilisis tempus cursus velit faucibus. </p>
        </div>
        <div className='profcom'>
 <img src="./image/profilepic.PNG" alt="profilepic" />
      <h3>Username</h3>
      <span className='timer'> -4 days ago</span>
      <div  className='fmicions'>
      <button><a href="#" >
        Family
       </a>
       </button>
       </div>
       </div>
        <div className='faicons'>
        <MdOutlineBookmarkAdd className='faicons1' />
        <AiOutlineDash  className='faicons2'/>
      </div>  
  
 
 </div>
  )
}

export default Middle