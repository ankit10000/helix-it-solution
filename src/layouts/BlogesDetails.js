import React,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "The Importance of a Well-Designed Website",
        date: "March 6, 2025",
        author: "Admin",
        img: "https://i.pravatar.cc/50?img=4",
        content: "A well-structured website enhances user experience and boosts business credibility. Learn how to optimize your website for success. In today's digital age, having a well-designed website is crucial for attracting and retaining customers. A user-friendly interface, fast loading speed, and mobile responsiveness play significant roles in website success. Investing in web design ensures a professional online presence, builds credibility, and enhances customer trust.",
    },
    {
        id: 2,
        title: "SEO Strategies to Rank Higher on Google",
        date: "February 28, 2025",
        author: "SEO Expert",
        img: "https://i.pravatar.cc/50?img=4",
        content: "Discover top SEO strategies that can help your business website rank on the first page of Google search results. Implementing effective SEO techniques like keyword research, backlink building, and optimizing content can significantly improve your website's visibility. By understanding how search engines work and keeping up with algorithm updates, businesses can achieve higher rankings and drive organic traffic.",
    },
    {
        id: 3,
        title: "Why Digital Marketing is Essential for Business Growth",
        date: "February 20, 2025",
        author: "Marketing Guru",
        img: "https://i.pravatar.cc/50?img=4",
        content: "Explore the benefits of digital marketing and how it can help you reach a larger audience and increase sales. Digital marketing strategies, such as social media marketing, email campaigns, and pay-per-click advertising, enable businesses to target specific audiences effectively. With the right approach, companies can enhance brand awareness, engage customers, and drive conversions.",
    },
];

function BlogsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    // Convert `id` to a number and find the corresponding blog post
    const blog = blogPosts.find((post) => post.id === parseInt(id));

    if (!blog) {
        return <h2 className="text-center text-red-500 mt-10">Blog not found!</h2>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <button
                onClick={() => {
                    navigate(-1);
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100); // Delay to ensure page transition happens first
                }}
                className="mt-10 px-8 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#0fcdff] to-[#0093E9] hover:from-[#0093E9] hover:to-[#0fcdff] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
                ← Back
            </button>


            <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
                <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
                <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
                <p className="text-gray-500 text-sm mt-2">
                    {blog.date} | By {blog.author}
                </p>
                <p className="text-gray-700 mt-4">{blog.content}</p>
            </div>
        </div>
    );
}

export default BlogsDetails;
