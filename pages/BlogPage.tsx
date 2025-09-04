
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost; onReadMore: () => void }> = ({ post, onReadMore }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <img className="w-full h-56 object-cover" src={post.imageUrl} alt={post.title} />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-gray-500 mb-2">{post.date} by {post.author}</p>
      <h3 className="text-xl font-bold text-leo-maroon mb-3">{post.title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{post.snippet}</p>
      <button
        onClick={onReadMore}
        className="mt-4 self-start text-leo-maroon font-semibold hover:text-red-700 transition-colors duration-300"
      >
        Read More &rarr;
      </button>
    </div>
  </div>
);

const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <div className="relative">
        <img className="w-full h-64 object-cover rounded-t-lg" src={post.imageUrl} alt={post.title} />
        <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-700 hover:bg-gray-200">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
        </button>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-leo-maroon mb-4">{post.title}</h2>
        <p className="text-md text-gray-500 mb-6">{post.date} by {post.author}</p>
        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-leo-maroon tracking-tight">Club Chronicles</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Updates, stories, and insights from our latest activities and initiatives.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
          ))}
        </div>
      </main>

      {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};

export default BlogPage;
