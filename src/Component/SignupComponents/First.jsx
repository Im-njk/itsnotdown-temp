import React from 'react'

const First = ({ formData, setFormData, page, setPage, x, setX }) => {
    return (
        <div>
            <form className='mx-auto' style={{ marginTop: "50px", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div class="group">
                    <input className='roboto' type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className='ubantu_font' style={{ fontSize: "20px" }}>Name</label>
                </div>

                <div class="group">
                    <input type="email" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className='ubantu_font' style={{ fontSize: "20px" }} >Email</label>
                </div>
                <div className="d-flex justify-content-between w-100  px-5">
                    <div className=''></div>
                    <button className='zz my-4 width_10rem' onClick={() => {
                        setPage(page + 1);
                        setX(1000);
                    }}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default First
