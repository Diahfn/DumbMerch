import React, { useState } from 'react'
import Chat from '../Components/Complain/Chat'
import Contact from '../Components/Complain/Contact'
import NavBar from '../Components/NavBar'

export default function UserComplain() {

    const title = 'Complain'
    document.title = 'DumbMerch | ' + title

    const [contact, setContact] = useState(null)

    const dataContact = [
        {
            id: 1,
            name: 'Admin',
            chat: 'Yes, Is there anything I can help',
        }
    ]

    return (
        <div className='bg'>
            <NavBar title={title} />
            <div className='mx-3' style={{height: '84vh'}}>
                <div className='d-flex'>
                    <div style={{height: '84vh'}} className="px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
                    </div>
                    <div style={{maxHeight: '84vh', flex: 1}} >
                        <Chat contact={contact} />
                    </div>
                </div>
            </div>
        </div>
    )
}
