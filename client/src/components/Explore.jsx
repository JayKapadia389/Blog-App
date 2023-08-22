import Header from "./Header.jsx";

function Explore(){

    return(

        <>
            <Header></Header>

            <main id="cards">
                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-1.jpg"></img>
                    </div>
                    <div className="description">
                        <div className="profile">
                            <div className="profile-pic-div">
                                <img className="profile-pic" src="/src/assets/jay.jpg"></img>
                            </div>
                            <p className="author">Jay Kapadia</p>
                        </div>
                        
                        <p className="title">correct way to learn react</p>
                        <p className="preview">the correct way to learn react is not to watch tutorials...</p>
                    </div>
                </div>

                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-2.jpg"></img>
                    </div>
                    <div className="description">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-3.jpg"></img>
                    </div>
                    <div className="description">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-4.jpg"></img>

                    </div>
                    <div className="description">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-5.jpg"></img>

                    </div>
                    <div className="description">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div className="card">
                    <div className="thumbnail">
                        <img className="tbnl" src="/src/assets/tn-6.jpg"></img>

                    </div>
                    <div className="description">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Explore; 