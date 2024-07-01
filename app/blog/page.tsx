import PostPreview from "@/components/custom/post-preview";

export default function BlogPage() {
    const posts = [
        {
            slug: 'example-post-1',
            title: 'Example Post 1',
            publishedDate: '2022-07-01T12:00:00.000Z',
            readTimeMinutes: 5,
            tags: ['tag1', 'tag2'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis nec metus.'
        },
        {
            slug: 'example-post-2',
            title: 'Example Post 2',
            publishedDate: '2022-06-15T10:00:00.000Z',
            readTimeMinutes: 3,
            tags: ['tag3'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis nec metus.'
        },
        {
            slug: 'example-post-3',
            title: 'Example Post 3',
            publishedDate: '2022-08-01T14:00:00.000Z',
            readTimeMinutes: 10,
            tags: ['tag1', 'tag4'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis nec metus.'
        }
    ];
    return (
        <div>

            {posts.map((e, i) => <PostPreview key={i} post={e} />)}
        </div>
    );
}
