const blogPosts = [
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt:
      "In today's fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you're brainstorming the next big idea or solving complex problems...",
    image: 'assets/blog.png',
  },
  {
    title: 'The Role of Natural Light and Greenery in Boosting Creativity',
    excerpt:
      "In today's fast-paced work environments, creativity has become an invaluable asset for professionals across all industries. Whether you're brainstorming the next big idea or solving complex problems...",
    image: 'assets/blog.png',
  },
];

const Blog = () => {
  return (
    <div className="flex items-start bg-white-primary flex-col justify-start py-5  " id="blog">
      <div className="md:pl-[40px] pl-0">
        <h2 className="desktop:text-title-primary text-title-secondary  font-medium">Our Blogs</h2>
      </div>
      <div className="divide-y-[2px]  divide-black-primary w-full">
        {blogPosts.map((post, index) => (
          <div key={index} className=" block xl:flex gap-8  items-start md:px-[40px] p-2 md:py-[20px] ">
            <img
              src={post.image}
              alt={post.title}
              className="xl:w-[285px] xl:h-[213px] w-[200px] h-[128px] md:mx-[20px]  object-cover md:float-left mobile:float-right  float-none m-0"
            />
            <div>
              <h3 className="xl:text-title-secondary mobile:text-scroll-text text-title-mobile  font-medium mb-2">
                {post.title}
              </h3>
              <p className="text-black-primary xl:text-paragraph-secondary md:text-scroll-text text-paragraph-mobile font-medium mobile:font-normal max-w-4xl mb-4">
                {post.excerpt}{' '}
                <a href="#" className="font-semibold">
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
