export default function PostLayout ({ children }) {
    return (
        <div>
            <marquee style={{background:'#fff', color: '#09f'}}>Este es el layout de los posts</marquee>
            {children}
        </div>
    )
}