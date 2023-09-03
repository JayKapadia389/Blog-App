function People(){

    let arr = [
        {
            name:"Jay Kapadia",
            bio:"Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters"
        },
        {
            name:"Jay Davidson",
            bio:"Retired teacher (San Francisco, 1969–2003); Returned Peace Corps Volunteer (Mauritania, 2003–2005); public speaker, artist, writer, traveler, world citizen"
        },
        {
            name:"Jay C Wells",
            bio:"I teach journalism at NYU, and direct the Membership Puzzle Project. Advisor to De Correspondent as they expand to English-language publishing."
        }
        ,{
            name:"Jay Acunzo",
            bio:"Podcast host (Unthinkable) and writer trying to demystify the creative process to help you create more resonant, memorable work"
        },
        {
            name:"Jay C Wells",
            bio:"I teach journalism at NYU, and direct the Membership Puzzle Project. Advisor to De Correspondent as they expand to English-language publishing."
        },
        {
            name:"Jay Cutler",
            bio:"Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters"
        },
        {
            name:"Jay Kapadia",
            bio:"Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters"
        },
        {
            name:"Jay Kapadia",
            bio:"Founder of Convince & Convert, a digital media and marketing company. NY Times best-selling author, global keynote speaker. New book: Hug Your Haters"
        }
    ]

    

    

    return(

        <div id="people-component"> 


        {arr.map((obj)=>{
            return(

                <div className="people-card">

                <div>

                    <div className="profile">

                        <div className="profile-pic-div pc-profile-pic-div">
                            <img className="profile-pic" src="/public/images/jay.jpg"></img>
                        </div>

                        <p className="pc-author">{obj.name}</p>

                        <div className="empty"></div>

                        <button className="pc-follow-btn-mobile">follow</button>

                    </div>

                    <div className="pc-bio">

                        {obj.bio}                        

                    </div>

                </div>

                <div className="pc-follow-wrap">

                    <button className="pc-follow-btn">Follow</button>

                </div>

           </div>
                
            )
        })}
           
            

        </div>

    )
}

export default People