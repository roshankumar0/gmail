import React from 'react'

const Compose = () => {
    return (
        <div className='gcompose'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <h2><span>New Message</span></h2>
                            </div>
                        </td>
                        <td>
                            <img class="Hl" id=":a3" src="images/cleardot.gif" alt="Minimize" data-tooltip="Minimize" aria-label="Minimize" data-tooltip-delay="800" />
                            <img class="Hq aUG" id=":a2" src="images/cleardot.gif" alt="Pop-out" aria-label="Full screen (Shift for pop-out)" data-tooltip-delay="800" data-tooltip="Full screen (Shift for pop-out)" />
                            <img class="Ha" id=":a1" src="images/cleardot.gif" alt="Close" aria-label="Save &amp; close" data-tooltip-delay="800" data-tooltip="Save &amp; close" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Compose
