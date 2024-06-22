import React from 'react'

const Main = () => {
  let data = [
    {
      user: [
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p900_20dp.png",
          text: "Inbox"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/star_baseline_nv700_20dp.png",
          text: "Starred"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/schedule_baseline_nv700_20dp.png",
          text: "Snoozed"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/send_baseline_nv700_20dp.png",
          text: "Sent"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/draft_baseline_nv700_20dp.png",
          text: "Drafts"
        }
      ]
    },
    {
      usersecond: [
        {
          icon: "https://gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png",
          text: "Important"
        },
        {
          icon: "https://gstatic.com/images/icons/material/system_gm/1x/chat_black_20dp.png",
          text: "Chats"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_baseline_nv700_20dp.png",
          text: "Scheduled"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_baseline_nv700_20dp.png",
          text: "All Mail"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_baseline_nv700_20dp.png",
          text: "Spam"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png",
          text: "Trash"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_baseline_nv700_20dp.png",
          text: "Categories"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png",
          text: "Manage labels"
        },
        {
          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png",
          text: "Create new label"
        }
      ]
    }
  ]
  return (
    <main id='gbody__container'>
      <div className='gcontainer'>
        <aside className='nav__left'>
          <div>
            <div className='nav__left__compo'>
              <div>
                <div className='nav__left__compose'><img src="https://gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png" alt="" /><span>compose</span></div>
              </div>
            </div>
            <div className='nav__left__list'>
              <div>
                {data?.map((item, index) => {
                  return <div key={index} >
                    {item?.user?.map((info, index) => {
                      return <div key={index} className='nav__left__user'><span className='nav__left__user__icon'><img src={info.icon} alt="" /></span><span>{info.text}</span></div>
                    })}
                  </div>
                })}

              </div>
              <div>
                <div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="" /><span>Less</span></div>
              </div>
              <div>
                {
                  data.map((second, index) => {
                    return <div key={index}>
                      {second?.usersecond?.map((item, index) => {
                        return <div key={index} className='nav__left__user'><span className='nav__left__user__icon'><img src={item.icon} alt="" /></span><span>{item.text}</span></div>

                      })}
                    </div>
                  })
                }
              </div>
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
              <div className='main__body__header__right'>
                <span><div>

                </div></span>
                <span></span>
              </div>
            </div>
          </header>
          <div className='main__body__content'>
            <div>
              <table className='main__body__table'>
                <tbody>
                  <tr>
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p600_20dp.png" alt="" /><span>Primary</span></div></td>
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/sell_baseline_nv700_20dp.png" alt="" /><span>Promotions</span></div></td>
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/group_baseline_nv700_20dp.png" alt="" /><span>Social</span></div></td>
                    <td>
                      <div>
                        <div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_baseline_nv700_20dp.png" alt="" /><div><span>Updates</span> <span className='new__msg'> 1 new</span></div></div>
                        <div><span>Phonepay</span></div>
                      </div>
                    </td>
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_baseline_nv700_20dp.png" alt="" /><span>Forms</span></div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='main__body__mail'>
              <table>
                <tbody>
                  <tr>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png" alt="" /></td>
                    <td><span>Ho.boiomni</span></td>
                    <td>
                      <div>
                        <div>
                          <span>BOI - MPIN expiry</span>
                          <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>Jun 18</span>
                    </td>
                    <td>
                      <div>
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/archive_baseline_nv700_20dp.png" alt="" />
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png" alt="" />
                        <svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" className="T-I-J3 J-J5-Ji kQ9Vzb aoH"><path d="M168-192q-29.7,0-50.85-21.16T96-264.04V-696.28Q96-726 117.15-747T168-768H553q-2,17-1,35.5t6,36.5H168L480-517l140-81q14,13 37,24t41,16L480-432L168-611v347H792V-558.46q20-4.54 37.5-14.04T864-594v329.77Q864-234 842.5-213T792-192H168Zm0-504v432V-696Zm576,72q-50,0-85-35t-35-85t35-85t85-35t85,35t35,85t-35,85t-85,35Z"></path></svg>
                        <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_black_20dp.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                    <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                    <td><span>Ho.boiomni</span></td>
                    <td>
                      <div>
                        <div>
                          <span>BOI - MPIN expiry</span>
                          <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>Jun 18</span>
                    </td>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div>
                      <div>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="" /></td>
                        <td><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_important_fill_googyellow500_20dp.png" alt="" /></td>
                        <td><span>Ho.boiomni</span></td>
                        <td>
                          <div>
                            <div>
                              <span>BOI - MPIN expiry</span>
                              <span className='main__body__mail__msg'>Dear Customer, BOI - Your M-PIN is about to expire in 7 day(s). Kindly reset your M-PIN by accessing</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>Jun 18</span>
                        </td>
                      </div>
                      <div>
                        <div>
                          <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" alt="" />
                          <span>000401652585_2024_06.pdf</span>
                        </div>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <aside className='nav__right'>
          <div >
            <ul className='nav__left__list'>
              <li><img src="https://gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" /></li>
              <li><img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" /></li>
              <li><img src="https://gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" /></li>
              <li><img src="https://gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="" /></li>
              <li><img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="" /></li>
            </ul>
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
