import type { BlogPost, TeamMember } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Our Vision for the Community',
    date: 'August 10, 2024',
    author: 'Founding Members',
    imageUrl: 'https://picsum.photos/seed/blog-vision/800/500',
    snippet: 'Every great journey begins with a single step, and ours begins with a clear vision: to create a lasting, positive impact right here in our community. We believe in the power of young people...',
    content: '<p>Every great journey begins with a single step, and ours begins with a clear vision: to create a lasting, positive impact right here in our community. We believe in the power of young people to drive change, and our club was founded on the principle that together, we can address local challenges with energy and innovation.</p><p>Our focus will be on projects that support education, protect our environment, and assist those in need. We invite you to join us in turning this vision into reality.</p>',
  },
  {
    id: 2,
    title: 'The Journey Begins: Our First Meeting',
    date: 'August 5, 2024',
    author: 'Leo Club Secretary',
    imageUrl: 'https://picsum.photos/seed/blog-meeting/800/500',
    snippet: 'An idea has officially become a movement. Our first official meeting was filled with passion, excitement, and a shared commitment to service. We discussed our core values and brainstormed initial project ideas...',
    content: '<p>An idea has officially become a movement. Our first official meeting was filled with passion, excitement, and a shared commitment to service. We discussed our core values, established our mission, and brainstormed initial project ideas that we can bring to our community.</p><p>The energy in the room was electric, and it solidified our belief that the Leo Club of Roaring Stars is destined to do great things. We are thrilled to embark on this journey and build our legacy from the ground up.</p>',
  },
  {
    id: 3,
    title: 'Why We Chose to Serve',
    date: 'July 30, 2024',
    author: 'Leo Club President',
    imageUrl: 'https://picsum.photos/seed/blog-serve/800/500',
    snippet: 'The call to serve is a powerful one. For us, it was a collective desire to give back, to learn from our community, and to grow as leaders. The Leo Club program provides the perfect platform to do just that...',
    content: '<p>The call to serve is a powerful one. For us, it was a collective desire to give back, to learn from our community, and to grow as leaders. The Leo Club program, sponsored by Lions Clubs International, provides the perfect platform to channel our energy into meaningful action.</p><p>We chose to start this chapter to create a space for young people to develop skills, forge friendships, and make a real difference. Service is not just what we do; it\'s who we are.</p>',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: 'James Gill',
        role: 'Club President',
        imageUrl: 'https://picsum.photos/seed/member1/400/400',
    },
    {
        id: 2,
        name: 'Maria Garcia',
        role: 'Vice President',
        imageUrl: 'https://picsum.photos/seed/member2/400/400',
    },
    {
        id: 3,
        name: 'James Smith',
        role: 'Secretary',
        imageUrl: 'https://picsum.photos/seed/member3/400/400',
    },
    {
        id: 4,
        name: 'Priya Sharma',
        role: 'Treasurer',
        imageUrl: 'https://picsum.photos/seed/member4/400/400',
    }
];