import Image from 'next/image';

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        },
    }).then((res) => res.json());
};

export default async function Post({ params }) {
    const { id } = params;
    const comments = await fetchComments(id);

    return (
        <ul style={{background: '#444',fontSize: '16px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image width={50} height={50} src={`https://api.dicebear.com/5.x/pixel-art-neutral/svg?seed=${comment.email}`}/>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}