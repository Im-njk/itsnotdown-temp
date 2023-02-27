import React from 'react'

const Third = ({ formData, setFormData, page, setPage, x, setX }) => {
    return (
        <div>
            <div className='form1' action="">
                <label className='form-label' htmlFor="number">OTP Sent on mobile</label>
                <input type="text" name='number' placeholder="Name" />
                <div class="d-flex justify-content-between my-5">
                    <div>
                        <button className='button1' type='submit'  onClick={() => {
                            setPage(page - 1);
                            setX(1000);
                        }}>
                            <p className="ubantu-font"></p>
                        </button>
                    </div>
                    <div>
                        <button className='button1' type='submit'>
                            <p className="ubantu-font"></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
