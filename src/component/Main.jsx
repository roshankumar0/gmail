import React, { useState } from 'react'

const Main = ({ navhide,handleCompose }) => {
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
      text: "Forms",
      update: "1 new",
      company: "Phonepay",
      activeIcon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/forum_fill_baseline_p600_20dp.png"
    },
  ]
  let allMessages = [
    {
      companyName: "Ho.boiomni",
      shortMessage: "BOI - MPIN expiry",
      fullMessage: "Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing change M-PIN under profilesection. Thanks and Regards, Bank of India *****This is an Auto generated",
      date: "17 Jun"
    },
    {
      companyName: "noreply",
      shortMessage: "",
      fullMessage: "Your sign-in email was changed for project-117717475537",
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
      companyName: "noreply.serviceonli.",
      shortMessage: "RTPS-GAD Application Submission",
      fullMessage: "प्रिय रोशन कुमार (Roshan Kumar), आपका आवेदन क्रo संo BICCO/2024/5932342 एवं निर्गत करने की संभावित तिथि 21/06/2024 है। सर्विसप्लस -बिहार सरकार",
      date: "19 Jun"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Indira Gandhi Natio.",
      shortMessage: "Remove Discrepancy",
      fullMessage: "Dear ROSHAN KUMAR Registration Number :2470057143S While processing your application, the following discrepancies have been found: The uploaded self attested certificate(s) is/are not clear. Please re-",
      date: "20 Jun",
      pdf: "//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "noreply.serviceonli.",
      shortMessage: "Delivery Email",
      fullMessage: "प्रिय रोशन कुमार , आपके आवेदन क्रमांक संo BCCCO/2024/5554909 का प्रमाण-पत्र तैयार हो गया है और प्रमाण-पत्र यहाँ संलग्न है। इसे डाउनलोड कर उपयोग करें। धन्यवाद, सर्विसप्लस -बिहार सरकार",
      date: "23 Jun",
      pdf: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png",
      pdfNumber: "2470057143S.pdf"
    },
    {
      companyName: "Admission 2024",
      shortMessage: "Registration Advice",
      fullMessage: "Dear Roshan Kumar, Your UserName is roshankumar0 and Password is sanjuverma01@@ for Online admission JULY-2024. You are advised to login at https://ignouadmission.samarth.edu.in/ and fill the online",
      date: "31 May"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentBorder, setCurrentBorder] = useState(0)
  const [showAll, setShowAll] = useState(false);
  const [messages, setMessage] = useState(0)
  const [star, setStar] = useState(0)
  const handleCurretBorder = (index) => {
    setCurrentBorder(index)
  }

  const handleMoreClick = () => {
    setShowAll(!showAll);
  };
  const handleInbox = (item, index) => {
    setCurrentIndex(index);
    console.log(item)
  };
  const itemsToShow = showAll ? data : data.slice(0, 5);
  const handleHover = (index) => {
    setMessage(index)
    console.log(index)
  }
  const handleSelectStar = (index) => {
    setStar(index)
    setStar(!star)
  }
  return (
    <main id='gbody__container'>
      <div className='gcontainer'>
        <aside className={`${navhide ? "nav__left" : "navwidth"}`}>
          <div>
            <div className='nav__left__compo' onClick={handleCompose}>
              <div>
                <div className='nav__left__compose'><img src="https://gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png" alt="" />{navhide && <span>compose</span>}</div>
              </div>
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
        <main className='main__body'>
          <header>
            <div className='main__body__header'>
              <div className='main__body__header__left'>
                <div>
                  <a href="#">
                    <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/check_box_outline_blank_black_20dp.png" alt="" />
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/refresh_baseline_nv700_20dp.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png" alt="" />
                  </a>
                </div>
                <div>
                  <span>
                    <span>1</span> - <span>13</span>
                    of
                    <span>13</span>
                  </span>
                  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_left_baseline_nv700_20dp.png" alt="" />
                  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_right_baseline_nv700_20dp.png" alt="" />
                </div>
              </div>
            </div>
          </header>
          <div className='main__body__content'>
            <div>
              <table className='main__body__table'>
                <tbody>
                  <tr>
                    {headerMenu.map((header, index) => (
                      <td
                        key={index}
                        onClick={() => handleCurretBorder(index)}
                        className={currentBorder === index ? 'active' : 'inactive'}
                      >
                        <div>
                          {currentBorder === index ? <img src={header.activeIcon} alt="" /> : <img src={header.icon} alt="" />}

                          <span className={currentBorder === index ? "activeColor" : "inactive"}>{header.text}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='main__body__mail'>
              <table>
                <tbody>
                  {
                    allMessages.map((message, index) => {
                      return <tr onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                      >
                        {
                          messages === index ?
                            (<>
                              <td className='check'><img src="https://www.gstatic.com/images/icons/material/system_gm/1x/check_box_outline_blank_black_20dp.png" alt="" /></td>
                              <td>
                                <img onClick={() => handleSelectStar(index)} src="https://gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png" alt="" />
                                {star === index ? <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_fill_googyellow500_20dp.png" alt="" /> : <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_fill_googyellow500_20dp.png" alt="" />}
                              </td>
                              <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png" alt="" /></td></>)
                            :
                            (<>
                              <td className='check'><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                              <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                              <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png" alt="" /></td>
                            </>)
                        }

                        <td><span>{message.companyName}</span></td>
                        <td className='read'>
                          <div >
                            <span>{message.shortMessage}</span>
                            <span className='main__body__mail__msg'>{message.fullMessage.slice(0, 102)}...</span>
                            {
                              message.pdf && message.pdfNumber && <div className='download--pdf'>
                                <img src={message.pdf} alt="" />
                                <span>{message.pdfNumber.slice(0, 12)}...</span>
                              </div>
                            }
                          </div>
                        </td>
                        <td>
                          <span className='date'>{message.date}</span>
                        </td>
                        <td className={`${messages === index ? "main__body__block" : "main__body__hide"}`}>
                          <div className='date'>
                            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/archive_baseline_nv700_20dp.png" alt="" />
                            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png" alt="" />
                            <svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" className="T-I-J3 J-J5-Ji kQ9Vzb aoH"><path d="M168-192q-29.7,0-50.85-21.16T96-264.04V-696.28Q96-726 117.15-747T168-768H553q-2,17-1,35.5t6,36.5H168L480-517l140-81q14,13 37,24t41,16L480-432L168-611v347H792V-558.46q20-4.54 37.5-14.04T864-594v329.77Q864-234 842.5-213T792-192H168Zm0-504v432V-696Zm576,72q-50,0-85-35t-35-85t35-85t85-35t85,35t35,85t-35,85t-85,35Z"></path></svg>
                            <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_black_20dp.png" alt="" />
                          </div>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <aside >
          <div className='nav__right' >
            <div className='nav__right__list'>
              <img src="https://gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" />
              <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" />
              <img src="https://gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" />
              <img src="https://gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="" />
              <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="" />
            </div>
            <div>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_less_baseline_nv700_20dp.png" alt="" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Main
