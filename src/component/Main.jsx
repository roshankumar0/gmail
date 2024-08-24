import React, { useState } from 'react'
import Storage from './Storage'
const Main = ({ navhide, handleCompose }) => {
  let data = [

    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png",
      text: "Inbox",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p900_20dp.png",
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/star_baseline_nv700_20dp.png",
      text: "Starred",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/schedule_baseline_nv700_20dp.png",
      text: "Snoozed",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/send_baseline_nv700_20dp.png",
      text: "Sent",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/send_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/draft_baseline_nv700_20dp.png",
      text: "Drafts",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/draft_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png",
      text: "More",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_less_baseline_nv700_20dp.png"
    },

    {
      icon: "https://gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png",
      text: "Important",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://gstatic.com/images/icons/material/system_gm/1x/chat_black_20dp.png",
      text: "Chats",
      activeIcon: "https://gstatic.com/images/icons/material/system_gm/1x/chat_black_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_baseline_nv700_20dp.png",
      text: "Scheduled",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_baseline_nv700_20dp.png",
      text: "All Mail",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_baseline_nv700_20dp.png",
      text: "Spam",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png",
      text: "Trash",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_fill_baseline_p900_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_baseline_nv700_20dp.png",
      text: "Categories",
      activeIcon: ""
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png",
      text: "Manage labels",
      activeIcon: ""
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png",
      text: "Create new label",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png"
    },
  ]
  let headerMenu = [
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_baseline_nv700_20dp.png",
      text: "Primary",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p600_20dp.png",
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/sell_baseline_nv700_20dp.png",
      text: "Promotions",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/sell_fill_baseline_p600_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/group_baseline_nv700_20dp.png",
      text: "Social",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/group_fill_baseline_p600_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_baseline_nv700_20dp.png",
      text: "Updates",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_fill_baseline_p600_20dp.png"
    },
    {
      icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/forum_baseline_nv700_20dp.png",
      text: "Forums",
      update: "1 new",
      company: "Phonepay",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/forum_fill_baseline_p600_20dp.png"
    },
  ]
  let allMessages = [
    {
      companyName: "Ho.boiomni",
      shortMessage: "BOI – MPIN expiry",
      fullMessage: " – Dear Customer, BOI – Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing change M-PIN under profilesection. Thanks and Regards, Bank of India *****This is an Auto generated",
      date: "17 Jun"
    },
    {
      companyName: "noreply.serviceonli.",
      shortMessage: "Rejection Email",
      fullMessage: "प्रिय पूजा कुमारी , आपका आवेदन क्रo संo BCCCO/2024/5634265 निम्नलिखित कारण से अस्वीकृत हो गया है: आवेदक के द्वारा आवेदन गलत किया गया है ..। सर्विसप्लस -बिहार सरकार",
      date: "17 Jun"

    },
    {
      companyName: "Ebill",
      shortMessage: "Your Bill Detail: 09.06.2024",
      fullMessage: "Dear Customer,. Your Energy Bill for JUN-2024 is attached with this mail. In case you wish to receive the E-bill on an alternate. mail id, you can do so by: 1.Updating the alternate email id in My",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "000401652585_2024_06.pdf",
      date: "17 Jun"
    },
    {
      companyName: "Ho.boiomni",
      shortMessage: "BOI – MPIN expiry",
      fullMessage: " – Dear Customer, BOI – Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing change M-PIN under profilesection. Thanks and Regards, Bank of India *****This is an Auto generated",
      date: "17 Jun"
    },
    {
      companyName: "noreply.serviceonli.",
      shortMessage: "Rejection Email",
      fullMessage: "प्रिय पूजा कुमारी , आपका आवेदन क्रo संo BCCCO/2024/5634265 निम्नलिखित कारण से अस्वीकृत हो गया है: आवेदक के द्वारा आवेदन गलत किया गया है ..। सर्विसप्लस -बिहार सरकार",
      date: "17 Jun"

    },
    {
      companyName: "Ebill",
      shortMessage: "Your Bill Detail: 09.06.2024",
      fullMessage: "Dear Customer,. Your Energy Bill for JUN-2024 is attached with this mail. In case you wish to receive the E-bill on an alternate. mail id, you can do so by: 1.Updating the alternate email id in My",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "000401652585_2024_06.pdf",
      date: "17 Jun"
    },
    {
      companyName: "Ho.boiomni",
      shortMessage: "BOI – MPIN expiry",
      fullMessage: " – Dear Customer, BOI – Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing change M-PIN under profilesection. Thanks and Regards, Bank of India *****This is an Auto generated",
      date: "17 Jun"
    },
    {
      companyName: "noreply.serviceonli.",
      shortMessage: "Rejection Email",
      fullMessage: "प्रिय पूजा कुमारी , आपका आवेदन क्रo संo BCCCO/2024/5634265 निम्नलिखित कारण से अस्वीकृत हो गया है: आवेदक के द्वारा आवेदन गलत किया गया है ..। सर्विसप्लस -बिहार सरकार",
      date: "17 Jun"

    },
    {
      companyName: "Ebill",
      shortMessage: "Your Bill Detail: 09.06.2024",
      fullMessage: "Dear Customer,. Your Energy Bill for JUN-2024 is attached with this mail. In case you wish to receive the E-bill on an alternate. mail id, you can do so by: 1.Updating the alternate email id in My",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "000401652585_2024_06.pdf",
      date: "17 Jun"
    },
    {
      companyName: "Ho.boiomni",
      shortMessage: "BOI – MPIN expiry",
      fullMessage: " – Dear Customer, BOI – Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing change M-PIN under profilesection. Thanks and Regards, Bank of India *****This is an Auto generated",
      date: "17 Jun"
    },
    {
      companyName: "noreply.serviceonli.",
      shortMessage: "Rejection Email",
      fullMessage: "प्रिय पूजा कुमारी , आपका आवेदन क्रo संo BCCCO/2024/5634265 निम्नलिखित कारण से अस्वीकृत हो गया है: आवेदक के द्वारा आवेदन गलत किया गया है ..। सर्विसप्लस -बिहार सरकार",
      date: "17 Jun"

    },
    {
      companyName: "Ebill",
      shortMessage: "Your Bill Detail: 09.06.2024",
      fullMessage: "Dear Customer,. Your Energy Bill for JUN-2024 is attached with this mail. In case you wish to receive the E-bill on an alternate. mail id, you can do so by: 1.Updating the alternate email id in My",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "000401652585_2024_06.pdf",
      date: "17 Jun"
    },

  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentBorder, setCurrentBorder] = useState(0)
  const [showAll, setShowAll] = useState(false);
  const [emailData, setEmailData] = useState(allMessages)

  // console.log(emailData)
  const handleCurretBorder = (index) => {
    setCurrentBorder(index)
  }

  const handleMoreClick = () => {
    setShowAll(!showAll);
    // console.log('object')
  };
  const handleInbox = (item, index) => {
    setCurrentIndex(index);

  };
  const itemsToShow = showAll ? data : data.slice(0, 5);
  const handleDelete = (indexToDelete) => {
    const itemToDelete = emailData.find((_, index) => index === indexToDelete);
    if (itemToDelete) {
      setEmailData((prevEmailData) =>
        prevEmailData.filter((_, index) => index !== indexToDelete)
      );
    }
    // console.log(emailData)
  };
  return (
    <main id='gbody__container'>
      <div className='gcontainer'>
        <aside className={`${navhide ? "nav__left" : "navwidth"}`}>
          <div>
            <div className='nav__left__compo' onClick={handleCompose}>
              <div className='nav__left__compose'>
                <img src="https://gstatic.com/images/icons/material/system_gm/2x/create_black_24dp.png" alt="" />
                {navhide && <span>Compose</span>}</div>
            </div>
            <div className='nav__left__list'>
              {itemsToShow.map((item, index) => (
                <div
                  key={index}
                  className={`${navhide ? "nav__left__user" : "active--left--icon"} ${currentIndex === index ? "activeBg" : ""}`}
                  onClick={() => handleInbox(item, index)}
                >
                  <span className={`${navhide ? "nav__left__user__icon" : "active--img--margin"}`}>
                    {currentIndex === index ? <img src={item.activeIcon} alt="" /> : <img src={item.icon} alt="" />}
                  </span>
                  <span>{navhide && item.text}</span>
                </div>
              ))}
              {!showAll && (<div onClick={handleMoreClick(!showAll)} className={`${navhide ? "nav__left__user" : "active--left--icon"}`}>
                <span className={`${navhide ? "nav__left__user__icon" : "active--img--margin"}`}>
                  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="" />
                </span>
                <span >{showAll ? "Less" : "More"}</span>
              </div>)
              }
            </div>
          </div>
        </aside>
        <div className='gbody--container--message'>
          <div className='main__body'>
            <header>
              <div className='main__body__header'>
                <div className='main__body__header__left'>
                  <div className='left--checkbox'>
                    <span className='left-checked--msg'>
                      <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/check_box_outline_blank_black_20dp.png" alt="" />
                      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png" alt="" />
                    </span>
                    <span>
                      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/refresh_baseline_nv700_20dp.png" alt="" />
                    </span>
                    <span>
                      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png" alt="" />
                    </span>
                  </div>
                  <div className='message--count'>
                    <div className='total'>
                      <span><span>1 – 12  of 12 </span></span>
                      <div className='lef-right-icon'>
                        <img className='left--icon' src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_left_baseline_nv700_20dp.png" alt="" />
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_right_baseline_nv700_20dp.png" alt="" />
                      </div>
                    </div>
                    <div className='keyboard'>
                      <img style={{ width: "18px", height: "13px", marginTop: "4px" }} src={`https://w7.pngwing.com/pngs/224/523/png-transparent-computer-keyboard-laptop-keyboard-protector-tablet-computers-keyboard-pc-computer-keyboard-computer-laptop-thumbnail.png`} alt="keyboard" />
                      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className='main__body__content'>
              <Storage />
              <header className='inbox--header'>
                <nav className='main__body__table'>
                  <ul>
                    {headerMenu.map((header, index) => (
                      <li
                        key={index}
                        onClick={() => handleCurretBorder(index)}
                        className={currentBorder === index ? 'active' : 'inactive'}
                      >
                        <div className='main__body__table__list'>
                          {currentBorder === index ? <img src={header.activeIcon} alt="" /> : <img src={header.icon} alt="" />}

                          <span className={currentBorder === index ? "activeColor" : "inactive"}>{header.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </header>
              <div className='main__body__mail'>
                <table>
                  <tbody>
                    {
                      emailData.map((message, index) => {
                        return (
                          <tr
                            className={`${index === 0 ? "main__tr-btop" : ""}`}
                            onClick={() => handleDelete(index)}
                            key={index}
                          >
                            <td className='check'>
                              <img
                                src="https://www.gstatic.com/images/icons/material/system_gm/1x/check_box_outline_blank_black_20dp.png"
                                alt=""
                              />
                            </td>
                            <td>
                              <img
                                src="https://gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png"
                                alt=""
                              />
                              {/* <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_fill_googyellow500_20dp.png" alt="" /> */}
                            </td>
                            <td>
                              <img
                                src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png"
                                alt=""
                              />
                            </td>
                            <td className='company--name'>
                              <span>{message.companyName}</span>
                            </td>
                            <td className='read'>
                              <div>
                                <div className='text'>
                                  <span>{message.shortMessage}</span>
                                  {/* <span className='minus--icon'>-</span> */}
                                  <span className='main__body__mail__msg'>
                                    {message.fullMessage.slice(0, 102)}...
                                  </span>
                                </div>
                                {message.pdf && message.pdfNumber && (
                                  <div className='download--pdf'>
                                    <img src={message.pdf} alt="" />
                                    <span>{message.pdfNumber.slice(0, 12)}...</span>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <span className='date'>{message.date}</span>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>

                <div className='footer--memory'>
                  <div className='storage'>
                    <div className='range'>
                      <div className='used'></div>
                    </div>
                    <div className='percentage'>
                      <div className="aiD "><span dir="ltr">14.94 GB</span> of <span dir="ltr">15 GB</span> <span dir="ltr"> (99%) </span> used</div>
                      <img src="https://gstatic.com/images/icons/material/system_gm/1x/launch_gm_grey_18dp.png" alt="" />
                    </div>
                  </div>
                  <div className="about">
                    <a href="https://www.google.com/intl/en/policies/terms/" rel="noreferrer" target="_blank" className="l9">Terms</a> ·
                    <a href="https://www.google.com/intl/en/policies/privacy/" rel="noreferrer" target="_blank" className="l9">Privacy</a> ·
                    <a href="https://www.google.com/gmail/about/policy/" rel="noreferrer" target="_blank" className="l9">Program Policies</a>
                  </div>

                  <div>
                    <div className="activity"><div>Last account activity: 4 hours ago</div><span id=":9c" className="l8 LJOhwe" tabIndex="0" role="link">Details</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className='nav__right' >
          <div >
            <div className='nav__right__list'>
              <div><img src="https://gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" /></div>
              <div><img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" /></div>
              <div><img src="https://gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" /></div>
              <div><img src="https://gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="" /></div>
            </div>
            <div className='plus'>
              <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Main
