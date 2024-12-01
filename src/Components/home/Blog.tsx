const blogPosts = [
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt:
      "In today's fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you're brainstorming the next big idea or solving complex problems...",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt:
      "In today's fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you're brainstorming the next big idea or solving complex problems...",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
];

const Blog = () => {
  return (
    <div className="flex items-start bg-white-primary flex-col justify-start py-5  border-y-[4px] border-black-primary">
      <div className="px-[40px] pt-[40px] pb-[20px]">
        <h2 className="text-title-secondary font-bold  text-black-primary">Our blogs</h2>
      </div>
      <div className="divide-y-[3px]  divide-black-primary w-full">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex gap-8 items-start   px-[40px] py-[20px] ">
            <img src={post.image} alt={post.title} className="w-[285px] h-[213px] object-cover " />
            <div>
              <h3 className="text-paragraph-primary  font-semibold mb-2">{post.title}</h3>
              <p className="text-black-primary text-paragraph-secondary max-w-6xl mb-4">
                {post.excerpt}{' '}
                <a href="#" className="font-bold">
                  read more
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
