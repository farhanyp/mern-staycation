import React from 'react';

const Footer = () => {
    return (
        <section className='mt-[100px]'>
            <div className='border-t-[1px] border-gray'>
                <div className='container text-gray text-base font-normal pt-[50px] '>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-[26px] font-medium leading-[39px] text-secondary pb-[27px]'>Stay<span className=' text-primary'>cation.</span></h1>
                            <p>We Kaboom your beauty holiday <br /> instanly and memorable</p>
                        </div>
                        <div>
                            <h2 className='text-primary font-medium pb-[24px]'>For Beginners</h2>
                            <ul>
                                <li>New Account</li>
                                <li>Start Booking a Room</li>
                                <li>Payments</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-primary font-medium pb-[24px]'>Explore Us</h2>
                            <ul>
                                <li>About</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-primary font-medium pb-[24px]'>Getting Touch</h2>
                            <ul>
                                <li>support@staycation.id</li>
                                <li>021-2208-1996</li>
                                <li>Staycation Oy,  Jakarta</li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-[50px] text-center'>
                        <p>Copyright 2019 * All rights reserved * Staycation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
