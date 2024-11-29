
const blogPosts = [
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt: 'In today\'s fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you\'re brainstorming the next big idea or solving complex problems...',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt: 'In today\'s fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you\'re brainstorming the next big idea or solving complex problems...',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  }
];

const Blog = () => {
  return (
    <div className="py-16 px-6" id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our blogs</h2>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex gap-8 items-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-48 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-600 hover:underline">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;