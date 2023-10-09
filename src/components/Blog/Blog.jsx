

const Blog = () => {
  const blogPosts = [
    {
      title: "Exciting Social Event Recap",
      content:
        "A night filled with laughter, joy, and unforgettable memories as friends and family gathered to celebrate our Amazing Social Event.",
      date: "October 9, 2023",
      image: "path/to/blog/image1.jpg",
    },
    {
      title: "Behind the Scenes: Event Preparation",
      content:
        "Explore the hustle and bustle behind creating the magic of our event. From meticulous planning to last-minute surprises, this blog takes you on a journey through the heart of the preparations.",
      date: "October 12, 2023",
      image: "path/to/blog/image2.jpg",
    },
    {
      title: "Capturing Moments: Photo Gallery",
      content:
        "A visual feast of the best moments captured during the event. From candid shots to group selfies, the photo gallery blog is your backstage pass to unforgettable memories.",
      date: "October 15, 2023",
      image: "path/to/blog/image3.jpg",
    },
    {
      title: "Foodie's Delight: Culinary Highlights",
      content:
        "Indulge your taste buds as we revisit the gastronomic wonders that adorned our event. From exquisite appetizers to delectable desserts, this blog is a treat for food enthusiasts.",
      date: "October 18, 2023",
      image: "path/to/blog/image4.jpg",
    },
    {
      title: "Dazzling Decor: Setting the Ambiance",
      content:
        "Step into the world of enchanting decor that transformed our venue into a magical space. This blog unveils the creative process behind the scenes and the inspiration that fueled our decorators.",
      date: "October 21, 2023",
      image: "path/to/blog/image5.jpg",
    },
    {
      title: "Musical Moments: Bands That Rocked the Night",
      content:
        "Relive the beats and rhythms that got everyone on their feet. From local talents to surprise performances, this blog pays tribute to the musical maestros who made our event unforgettable.",
      date: "October 24, 2023",
      image: "path/to/blog/image6.jpg",
    },
    {
      title: "Fashion Forward: Style Highlights",
      content:
        "Celebrate the fashion trends that graced our event. From elegant evening gowns to quirky accessories, this blog showcases the style statements that lit up the night.",
      date: "October 27, 2023",
      image: "path/to/blog/image7.jpg",
    },
    {
      title: "Heartfelt Thanks: Gratitude to Attendees",
      content:
        "Expressing sincere thanks to everyone who attended and contributed to the success of our social event. This blog is a tribute to the heartwarming support and positive vibes that filled the venue.",
      date: "October 30, 2023",
      image: "path/to/blog/image8.jpg",
    },
    {
      title: "Big Thanks: Appreciation for Your Presence!",
      content:
        "A warm thank you to all who joined and added to the awesomeness of our gathering. This blog is our way of celebrating the fantastic support and good energy that made our event shine.",
      date: "October 30, 2023",
      image: "path/to/blog/image8.jpg",
    },
  ];

  return (
    <div className="dark:bg-[#282a36]">
    <div className=" container mx-auto dark:bg-[#282a36] py-10 ">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 dark:text-[#ffffffc6]">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg ">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-[#ffffffc6]">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-[#c4bdbdc6] mb-2">{post.date}</p>
              <p className="text-gray-700 dark:text-[#bea2a2c6]">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;
