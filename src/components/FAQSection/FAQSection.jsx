

const FAQSection = () => {
    const faqData = [
        {
            question: 'What time does the event start?',
            answer: 'The event will start at 6:00 PM.',
        },
        {
            question: 'Is there a dress code?',
            answer: 'There is no strict dress code, but we recommend smart casual.',
        },
        {
            question: 'Can I bring a plus one?',
            answer: 'Yes, each attendee is allowed to bring one guest.',
        },
        {
            question: 'How can I register for the event?',
            answer: 'You can register for the event on our website or contact our registration desk.',
        },
        {
            question: 'Is there parking available?',
            answer: 'Yes, there is ample parking space available near the venue.',
        },
        {
            question: 'What types of payment are accepted?',
            answer: 'We accept cash, credit/debit cards, and mobile payment options.',
        },
        {
            question: 'Are children allowed at the event?',
            answer: 'The event is open to all ages, but please check the event details for any age restrictions.',
        },
        {
            question: 'Is there a vegetarian option for meals?',
            answer: 'Yes, we offer vegetarian meal options. Please inform us in advance about any dietary restrictions.',
        },
        {
            question: 'How can I become a sponsor?',
            answer: 'To become a sponsor, please contact our sponsorship team through the provided email or phone number.',
        },
        {
            question: 'What happens if I lose my event ticket?',
            answer: 'If you lose your event ticket, please contact our support team for assistance.',
        },
        {
            question: "Can I get a refund if I can't attend the event?",
            answer: 'Refund policies vary. Check the event terms and conditions or contact our support for refund-related inquiries.',
        },
        {
            question: 'Are there accommodations for people with disabilities?',
            answer: 'Yes, we provide accommodations for people with disabilities. Please inform us in advance to make necessary arrangements.',
        },
        {
            question: 'Will there be Wi-Fi at the venue?',
            answer: 'Yes, complimentary Wi-Fi will be available for all attendees.',
        },
        {
            question: 'Can I bring outside food or drinks?',
            answer: 'Outside food and drinks are not allowed. Refreshments will be provided at the venue.',
        },
        {
            question: 'What happens in case of bad weather?',
            answer: 'The event will proceed as planned, but we have contingency plans in case of severe weather. Check our social media for updates.',
        },
        {
            question: 'Are pets allowed at the event?',
            answer: 'With the exception of service animals, pets are generally not allowed at the event.',
        },
        {
            question: 'How can I volunteer for the event?',
            answer: 'To volunteer, fill out the volunteer form on our website or contact our volunteer coordinator.',
        },
        {
            question: 'Is photography allowed at the event?',
            answer: 'Yes, photography is allowed. Please be mindful of others and follow any posted guidelines.',
        },
        {
            question: 'Can I upgrade my ticket to VIP?',
            answer: 'Ticket upgrades are subject to availability. Contact our ticketing team for assistance.',
        },
        {
            question: 'What COVID-19 safety measures are in place?',
            answer: 'We have implemented various safety measures. Check our website for the latest COVID-19 guidelines.',
        },
        {
            question: 'Are there discounts for group bookings?',
            answer: 'Yes, we offer discounts for group bookings. Contact our group sales team for more information.',
        },
        {
            question: 'How can I become a speaker at the event?',
            answer: 'Submit your speaker proposal through our website, and our selection committee will review it.',
        },
        {
            question: 'Can I transfer my ticket to someone else?',
            answer: 'Ticket transfers may be allowed. Check our ticket transfer policy or contact our support team for assistance.',
        },
        {
            question: 'Is there a lost and found at the venue?',
            answer: 'Yes, we have a lost and found area at the venue. Inquire at the information desk for assistance.',
        },
        {
            question: "What is the event's cancellation policy?",
            answer: 'Check our event cancellation policy on the website or contact our support team for details.',
        },
        {
            question: 'Are there student discounts available?',
            answer: 'Yes, we offer student discounts. Provide valid student ID during registration to avail the discount.',
        },
        {
            question: 'Can I purchase tickets at the door?',
            answer: 'Tickets may be available at the door, but we recommend purchasing in advance to secure your spot.',
        },
        {
            question: 'How can I access event updates?',
            answer: 'Follow our social media accounts and check our website for the latest event updates and announcements.',
        },
        {
            question: "What is the event's policy on smoking?",
            answer: "Smoking is only allowed in designated smoking areas. Please adhere to the event's smoking policy.",
        },
        {
            question: 'Is there a coat check service?',
            answer: 'Yes, we provide a coat check service at the venue.',
        },
        {
            question: 'Can I get a certificate of attendance?',
            answer: 'Certificates of attendance are available upon request. Contact our admin office for assistance.',
        },
        {
            question: 'What security measures are in place?',
            answer: 'We have implemented various security measures. Follow posted guidelines and cooperate with security personnel.',
        },
        {
            question: 'Is there a VIP entrance?',
            answer: 'Yes, VIP ticket holders have access to a dedicated VIP entrance. Check your ticket for details.',
        },
        {
            question: 'How can I download event materials?',
            answer: 'Event materials, if available for download, will be accessible through our event app or website.',
        },
        {
            question: 'What amenities are available at the venue?',
            answer: 'The venue offers various amenities, including restrooms, water stations, and seating areas. Check the venue map for details.',
        },
        {
            question: 'Can I request a refund for a virtual event?',
            answer: 'Refund policies for virtual events may differ. Check our virtual event terms and conditions or contact support for assistance.',
        },
        {
            question: 'How can I provide feedback on the event?',
            answer: 'We welcome your feedback! Fill out the feedback form on our website or contact our feedback team.',
        },
        {
            question: 'What types of sessions are included in the event?',
            answer: 'The event includes various sessions, such as keynote speeches, workshops, and panel discussions. Check the schedule for details.',
        },
        {
            question: "Can I access the event recordings after it's over?",
            answer: 'Depending on the event, recordings may be available for purchase or accessible through our website. Check with our media team for details.',
        },
        {
            question: 'How can I connect with other attendees?',
            answer: 'Use our event app or attend networking sessions to connect with fellow attendees. Follow our social media for networking opportunities.',
        },
        {
            question: 'Is there a mobile app for the event?',
            answer: 'Yes, we have a mobile app for the event. Download it for access to schedules, maps, and important updates.',
        },
        {
            question: 'Can I bring a backpack to the event?',
            answer: "Yes, you can bring a backpack, but please be mindful of the event's security policies. Backpacks may be subject to inspection.",
        }
    ];
  return (
    <div className='dark:bg-[#282a36]'>
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center  dark:text-[#ffffffc6] text-purple-700">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white mx-2 dark:bg-[#3f4255]  p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 dark:text-[#ffffffc6] text-purple-900">
              {item.question}
            </h3>
            <p className="text-gray-600 dark:text-[#ffffff]">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default FAQSection;
