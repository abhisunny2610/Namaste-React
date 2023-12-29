import React from 'react'

const TopHeader = () => {
    return (
        <section className="header position-relative">
            <div className="header-content d-flex align-items-center justify-content-between fixed-top top-0 start-0">
                <div className="name d-flex align-items-center gap-2">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <p className='fw-bold'>Welcome To Abhishek <span className='fw-normal'>School Management System</span></p>
                </div>

                <div className="search">
                    <input type="text" placeholder='Search Here...'/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className="user">
                    <img src="" alt="" className="profile" />
                    <div className="user-info">
                        <p className='name'>Abhishek</p>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader