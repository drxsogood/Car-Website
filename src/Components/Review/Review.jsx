import React, {useEffect} from 'react'
import './Review.css'

// Imported Icons
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

// Imported Images
import car1 from '../../Assets/image1.png'
import car2 from '../../Assets/image8.png'
import car3 from '../../Assets/image9.png'
import user1 from '../../Assets/user (14).png'
import user2 from '../../Assets/user (6).png'
import user3 from '../../Assets/user (23).png'


// Import Aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'
 
const Review = () => {
  
 //Lets initialise Aos and set the default animation duration
  useEffect(()=>{
  Aos.init(
    {
      duration: 2000
    }
  )
  }, [])


  return (
    <div className='review section'>
       <div className="secContainer container">

          <div data-aos='fade-up' className="secHeading flex">
            <h3 className="secTitle">
              Recent Reviews
            </h3>

            <div className="navBtns flex">
              <BsArrowLeftShort className='icon leftIcon'/>
              <BsArrowRightShort className='icon rightIcon'/>
            </div>
          </div>

          {/* review container */}
          <div className="reviewContainer grid">
            
            {/* single review */}
            <div className="singleReview grid" data-aos='fade-up'>
              <div className="imgDiv">
                <img src={car1} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className="desc">
               Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>

              <div className="reviewerDiv flex">
                   <div className="leftDiv flex">
                    <div className="reviewerImage">
                      <img src={user1} alt="Reviewer Image" />
                    </div>
                    <div className="aboutReviewer">
                      <span className="name">
                        Jakline Nelson
                      </span>
                      <p>Chief Editor</p>
                    </div>
                   </div>
                   <div className="rightDiv flex">
                    <AiFillStar className='icon'/>
                    <blockquote>4.84</blockquote>
                   </div>
              </div>
            </div>

            {/* single review */}
            <div className="singleReview grid" data-aos='fade-up'>
              <div className="imgDiv">
                <img src={car2} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className="desc">
               Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>

              <div className="reviewerDiv flex">
                   <div className="leftDiv flex">
                    <div className="reviewerImage">
                      <img src={user2} alt="Reviewer Image" />
                    </div>
                    <div className="aboutReviewer">
                      <span className="name">
                        Nicole Webb
                      </span>
                      <p>Manager Atlantis</p>
                    </div>
                   </div>
                   <div className="rightDiv flex">
                    <AiFillStar className='icon'/>
                    <blockquote>4.84</blockquote>
                   </div>
              </div>
            </div>

            {/* single review */}
            <div className="singleReview grid" data-aos='fade-up'>
              <div className="imgDiv">
                <img src={car3} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className="desc">
               Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
              </span>

              <div className="reviewerDiv flex">
                   <div className="leftDiv flex">
                    <div className="reviewerImage">
                      <img src={user3} alt="Reviewer Image" />
                    </div>
                    <div className="aboutReviewer">
                      <span className="name">
                        Isratech
                      </span>
                      <p>YT Admin</p>
                    </div>
                   </div>
                   <div className="rightDiv flex">
                    <AiFillStar className='icon'/>
                    <blockquote>4.84</blockquote>
                   </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Review