import React from 'react'

const Storage = () => {
    return (
        <section className='cbundle__main__storage'>
            <div className='cbundle__storage'>
            <div className='cbundle__storage__error'>
                <figure>
                    <img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/all-densities/drawable-hdpi/ic_gm_report_problem_red600_24dp.png" alt="" />
                </figure>
            </div>
            <div className='cbundle__storage__percentage'>
                <div>
                    <header>
                        <h3 className='cbundle__storage__headtitle'>You'll stop getting emails on Aug 15</h3>
                    </header>
                    <p className='cbundle__storage__info'>
                    You don't have enough storage. Starting Aug 15, emails sent to you will be bounced back to the sender and can't be recovered. Get more storage — 73% off for 2 months or delete items from Google Photos, Drive, or Gmail.
                    </p>
                </div>
                <footer>
                    <div className='cbundle__storage__btncontainer'>
                        <button className='cbundle__storage__btn cbundle__storage__btn--offer'>Get offer</button>
                        <button className='cbundle__storage__btn cbundle__storage__btn--space'>Clean up space</button>
                    </div>
                </footer>
            </div>
            <div className='cbundle__storage__doticon'>
                <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/more_vert_black_20dp.png" alt="" />
            </div>
        </div>
        </section>
    )
}

export default Storage
