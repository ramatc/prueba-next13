import ListOfPosts from './ListOfPosts';
import { Suspense } from 'react';

async function PostsPage() {
    return (
        <section>
            <Suspense fallback={<p>Cargando posts...</p>}>
                <ListOfPosts />
            </Suspense>
        </section>
    )
}

export default PostsPage;