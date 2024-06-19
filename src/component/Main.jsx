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
            <div>
              <div>
                <div>pencil</div>
                <div>compose</div>
              </div>
            </div>
            <div className='nav__left__list'>
              <div>
                {data?.map((item, index) => {
                  return <div key={index} >
                    {item?.user?.map((info) => {
                      return <div className='nav__left__user'><span className='nav__left__user__icon'><img src={info.icon} alt="" /></span><span>{info.text}</span></div>
                    })}
                  </div>
                })}

              </div>
              <div>
                <div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="" /><span>Less</span></div>
              </div>
              <div>
                {
                  data.map((second) => {
                    return <div>
                      {second?.usersecond?.map((item) => {
                        return <div className='nav__left__user'><span className='nav__left__user__icon'><img src={item.icon} alt="" /></span><span>{item.text}</span></div>

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
                <ul>
                  <li><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/check_box_outline_blank_baseline_nv700_20dp.png" alt="" /></li>
                  <li>refresh</li>
                  <li>dot</li>
                </ul>
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
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_baseline_nv700_20dp.png" alt="" /><span>Updates</span></div></td>
                    <td><div><img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/info_baseline_nv700_20dp.png" alt="" /><span>Forms</span></div></td>
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
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Main
