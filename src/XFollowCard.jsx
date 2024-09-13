import { useState } from 'react'

export function XFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[XFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'x-follow-card-button is-following' 
    : 'x-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='x-follow-card'>
            <header className='x-follow-card-header'>
                <img
                className='x-follow-card-avatar' 
                src= {`https://unavatar.io/twitter/${userName}`} 
                alt="Avatar X" />
                <div className='x-follow-card-info' >
                    <strong>{children}</strong>
                    <span className='x-follow-card-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='x-follow-card-text'>{text}</span>
                    <span className='x-follow-card-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}