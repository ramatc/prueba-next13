'use client'

const handleClick = () => {
    alert('Me gusta este post');
}

export function LikeButton() {
    return (
        <button onClick={handleClick}>Me gusta</button>
    )
}