import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Digital from  '../Images/Digital.jpg'
import SEO from  '../Images/SEO.jpeg'
import Importance from  '../Images/Importance.jpg'

const blogPosts = [
    {
      title: "The Importance of a Well-Designed Website",
      date: "March 6, 2025",
      author: "Admin",
      img: Importance,
      excerpt: "A well-structured website enhances user experience and boosts business credibility. Learn how to optimize your website for success.",
    },
    {
      title: "SEO Strategies to Rank Higher on Google",
      date: "February 28, 2025",
      author: "SEO Expert",
      img: SEO,
      excerpt: "Discover top SEO strategies that can help your business website rank on the first page of Google search results.",
    },
    {
      title: "Why Digital Marketing is Essential for Business Growth",
      date: "February 20, 2025",
      author: "Marketing Guru",
      img: Digital,
      excerpt: "Explore the benefits of digital marketing and how it can help you reach a larger audience and increase sales.",
    },
  ];

function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  const query = new URLSearchParams(location.search).get("search") || "";
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (query) {
      const results = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [query]);

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl text-center font-bold text-black uppercase">
        Latest <span className="text-[#0fcdff]">Blog Posts</span>
      </h2>

      {query && (
        <p className="text-gray-500 text-center mb-4">
          Showing results for: <span className="font-semibold">"{query}"</span>
        </p>
      )}

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date} | By {post.author}</p>
              <p className="text-gray-700 mt-2">{post.excerpt}</p>
              <button
                className="mt-10 px-8 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#0fcdff] to-[#0093E9] hover:from-[#0093E9] hover:to-[#0fcdff] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => navigate(`/blog/${index + 1}`)} // Redirect to full blog post
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
