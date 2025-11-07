export interface ProjectGalleryItem {
  type: "image" | "video"
  src: string
  alt?: string
  title?: string
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  keyFeatures: string[]
  whatIBuilt?: string[]
  whatILearned?: string[]
  goals?: string[],
  techStack: string[]
  image: string
  gallery: ProjectGalleryItem[]
  link?: string
  github?: string
  year: number
  role: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ArenaKu",
    description:
      "A sports venue booking platform built with Next.js and Prisma, featuring real-time schedule management and secure payments with Midtrans.",
    longDescription: `ArenaKu allows users to browse available sports venues, view real-time schedules, and book fields online.
      It's designed with scalability in mind - initially for one owner (me), but the database structure already supports multi-owner functionality in the future.

      This project was developed as a personal learning project to explore full-stack web development concepts, focusing on real-world booking systems, database modeling, and payment integration. The main goal of this project is to learn and apply modern web development practices using Next.js and TypeScript while simulating a realistic SaaS-like platform architecture.
      `,
    keyFeatures: [
      "🏐 Browse and book available sports fields",
      "📅 Dynamic time slot management with real-time updates",
      "💳 Secure payments via Midtrans",
      "🧾 Admin dashboard for managing venues and schedules",
      "🧍 Role-based authentication for owners and customers",
      "🧱 PostgreSQL + Prisma schema design ready for multi-owner expansion",
      "🎨 Clean and responsive UI built with Tailwind CSS",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    whatIBuilt: [
      "Designed a scalable multi-owner architecture",
      "Created a relational schema using <strong>PostgreSQL + Prisma</strong>",
      "Developed a dynamic, conflict-free time slot system",
      "Integrated <strong>Midtrans</strong> payments with security measures",
      "Added <strong>Nodemailer</strong> for email verification",
      "Implemented local storage persistence for in-progress bookings",
      "Enabled <strong>Google Sign-In</strong> for faster user acces"
    ],
    goals: [
      "Understanding Next.js structure and server-side rendering (SSR)",
      "Writing clean and type-safe code using <strong>TypeScript</strong>",
      "Practicing clean and modular code architecture"
    ],
    image: "/arenaku-home.png",
    gallery: [
      { type: "image", src: "/arenaku-home.png", alt: "Home Page", title: "Home Page" },
      { type: "image", src: "/arenaku-login.png", alt: "Login Page", title: "Login Page" },
      { type: "image", src: "/arenaku-alurbooking.gif", alt: "Alur Booking", title: "Alur Booking" },
      { type: "image", src: "/arenaku-carivenue.png", alt: "Cari Venue", title: "Cari Venue" },
      { type: "image", src: "/arenaku-viewvenue1.png", alt: "Lihat Venue", title: "Lihat Venue" },
      { type: "image", src: "/arenaku-pilihbooking.png", alt: "Pilih Jadwal", title: "Pilih Jadwal" },
      { type: "image", src: "/arenaku-bookingpage.png", alt: "Booking Page", title: "Booking Page" },
      { type: "image", src: "/arenaku-verifikasiemail.png", alt: "Verifikasi Kode", title: "Verifikasi Kode" },
      { type: "image", src: "/arenaku-kodeverif.png", alt: "Kode Verifikasi", title: "Kode Verifikasi" },
      { type: "image", src: "/arenaku-buktiemail.png", alt: "Email Bukti Pembayaran", title: "Email Bukti Pembayaran" },
      { type: "image", src: "/arenaku-kelolavenue.png", alt: "Kelola Venue", title: "Owner - Kelola Venue" },
      { type: "image", src: "/arenaku-editlapangan.png", alt: "Edit Lapangan", title: "Owner - Edit Lapangan" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "#",
    github: "https://github.com/siencan/ArenaKu",
  },
  {
    id: 2,
    title: "T-Cash",
    description:
      "A modern e-wallet mobile app built with Flutter and Firebase, featuring secure authentication, balance tracking, and real-time transactions.",
    longDescription: `T-Cash is a mobile <strong>e-wallet application</strong> built with <strong>Flutter</strong> for <strong>Android</strong> devices.  
    Developed as my <strong>first large-scale mobile programming project</strong> for the <strong>Mobile Programming course</strong>, this app was designed to simulate a real-world digital wallet experience.  

    The project emphasizes <strong>secure financial transactions</strong>, <strong>clean interface design</strong>, and <strong>smooth user interaction</strong> — bringing together key mobile app concepts such as authentication, state management, and data persistence.  
    Beyond its core functionality, T-Cash also serves as a milestone in my journey to mastering <strong>Flutter development</strong> and building scalable, user-centered mobile applications.`,
    keyFeatures: [
      "💰 Display user wallet balance in real-time",
      "💸 Top-up and transfer functionality",
      "💳 Transfer funds to other users via QR code scanning",
      "🔐 Secure payments with a payment passcode required for transfers or purchases",
      "🛒 Purchase digital items such as mobile pulsa, internet quota, electricity tokens, and other e-wallet top-ups",
      "📊 Track spending with income/expense statistics and graphical insights",
      "🧾 View complete transaction history",
      "👤 Manage personal profile and account details",
    ],
    techStack: ["Flutter", "Dart", "Firebase"],
    whatILearned: [
      "State management in Flutter",
      "Firebase integration (authentication & database)",
      "QR code generation and scanning",
      "Navigation and modular code structure for maintainable apps"
    ],
    image: "/tcash-welcome.png",
    gallery: [
      { type: "image", src: "/tcash-welcome.png", alt: "Welcome Screen", title: "Welcome Screen" },
      { type: "image", src: "/tcash-transferqr.gif", alt: "QR Transfer", title: "QR Transfer" },
      { type: "image", src: "/tcash-transactiondetails.png", alt: "Transaction Details", title: "Transaction Details Modal" },
      { type: "image", src: "/tcash-login.png", alt: "Login Screen", title: "Login Screen" },
      { type: "image", src: "/tcash-resetpassword.png", alt: "Reset Password", title: "Reset Password" },
      { type: "image", src: "/tcash-home.png", alt: "Home Screen", title: "Home Screen" },
      { type: "image", src: "/tcash-home2.png", alt: "Home Screen 2", title: "Home Screen 2" },
      { type: "image", src: "/tcash-gopay.png", alt: "Top-up E-Wallet", title: "Top-up E-Wallet Screen" },
      { type: "image", src: "/tcash-pulsa.png", alt: "Pulsa Screen", title: "Isi Pulsa" },
      { type: "image", src: "/tcash-passcodeverif.png", alt: "Input Payment Pin", title: "Input Payment Pin" },
      { type: "image", src: "/tcash-setpaypin.png", alt: "Set Payment Pin", title: "Set Payment Pin" },
      { type: "image", src: "/tcash-transaction.png", alt: "Transaction Screen", title: "Transaction Screen" },
      { type: "image", src: "/tcash-scanqr.png", alt: "Scan QR", title: "Scan QR" },
      { type: "image", src: "/tcash-qr.png", alt: "QR", title: "T-Cash QR" },
      { type: "image", src: "/tcash-sendmoney.png", alt: "Transfer Screen", title: "Transfer Screen" },
      { type: "image", src: "/tcash-transfernumber.png", alt: "Transfer via Number", title: "Transfer via Number" },
      { type: "image", src: "/tcash-activity.png", alt: "Activity Screen", title: "Activity Screen" },
      { type: "image", src: "/tcash-starbucks.png", alt: "Purchase History - Starbucks Voucher", title: "Purchase History - Starbucks Voucher" },
      { type: "image", src: "/tcash-applemusic.png", alt: "Purchase History - Apple Music", title: "Purchase History - Apple Music" },
      { type: "image", src: "/tcash-profile.png", alt: "Profile Screen", title: "Profile Screen" },
      { type: "image", src: "/tcash-incomeexpense.png", alt: "Income-Expense Screen", title: "Income-Expense Screen" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "https://drive.google.com/file/d/11BTPvdaDARaAwnm18VD8ZNlNnY2by7Ib/view",
    github: "https://github.com/siencan/T-Cash",
  },
  {
    id: 3,
    title: "Angelic Salon & Spa",
    description:
      "A comprehensive salon management system with admin dashboard, bookings, customer management, and services tracking.",
    longDescription:`This website is designed to help customers easily book various salon and spa services such as:
                      • Haircuts  
                      • Spa treatments  
                      • Facial care  
                      • And other beauty services  

                      The application was developed as a <strong>real collaboration project</strong> with <strong>Angelic Salon & Spa</strong>, a beauty salon located in <strong>Prabumulih, South Sumatra, Indonesia</strong>. It was created as part of a <strong>university course project</strong>, where I was required to partner with a real business.  

                      Through this collaboration, the website aims to help the salon <strong>digitize its booking process, service scheduling, and daily operations</strong>.  
                      Previously, most activities such as booking records, customer lists, and financial reports were <strong>manually written in a physical logbook</strong>.  
                      Now, this website allows the salon to:
                      • Record and manage bookings digitally  
                      • Track monthly customer statistics  
                      • Manage financial transactions and revenue summaries  
                      • Simplify administrative tasks through a web-based dashboard  

                      The app also includes a Firebase-based login system and an admin dashboard for managing hairstylists, schedules, and service listings.`,
    keyFeatures: [
      "🧾 Online salon service booking system",
      "👩‍🎨 Hairstylist selection with availability indicators",
      "⏰ Automated scheduling and booking status updates",
      "💰 Basic financial tracking and monthly customer statistics",
      "🔐 Login and account management with Firebase",
      "🖼️ Clean and elegant white–pink user interface",
      "📱 Fully responsive design for all screen sizes",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Firebase", "EsLint"],
    image: "/angelic-home.png",
    gallery: [
      { type: "image", src: "/angelic-login.png", alt: "Login Page", title: "Login Page" },
      { type: "image", src: "/angelic-alurbooking.gif", alt: "Alur Booking", title: "Alur Booking (GIF)" },
      { type: "image", src: "/angelic-dashboard.png", alt: "Admin - Main Dashboard", title: "Admin - Main Dashboard" },
      { type: "image", src: "/angelic-bookings.png", alt: "Admin - Booking History", title: "Admin - Booking History" },
      { type: "image", src: "/angelic-changestatus.gif", alt: "Change Booking Status", title: "Change Booking Status (GIF)" },
      { type: "image", src: "/angelic-changestatusnotif.gif", alt: "Change Booking Status From Notification", title: "Change Booking Status From Notification (GIF)" },
      { type: "image", src: "/angelic-bookingdetails.png", alt: "Booking Details", title: "Booking Details" },
      { type: "image", src: "/angelic-createbooking.gif", alt: "Admin Create Booking", title: "Admin Create Booking (GIF)" },
      { type: "image", src: "/angelic-filterandsortbooking.gif", alt: "Filter & Sort Booking", title: "Filter & Sort Booking (GIF)" },
      { type: "image", src: "/angelic-managecustomers.png", alt: "Admin - Manage Customers", title: "Admin - Manage Customers" },
      { type: "image", src: "/angelic-customerdetails.png", alt: "Customers Details", title: "Customers Details" },
      { type: "image", src: "/angelic-editcustomer.png", alt: "Edit Customer Info", title: "Edit Customer Info" },
      { type: "image", src: "/angelic-customeraction.png", alt: "Customers Action", title: "Customers Action" },
      { type: "image", src: "/angelic-customerregist.png", alt: "Customers Registration Page", title: "Customers Registration Page" },
      { type: "image", src: "/angelic-manageservices.png", alt: "Manage Services Page", title: "Manage Services Page" },
      { type: "image", src: "/angelic-editservices.png", alt: "Edit Services", title: "Edit Services" },
      { type: "image", src: "/angelic-serviceslist.png", alt: "Services List", title: "Services List" },
      { type: "image", src: "/angelic-manageemployee.png", alt: "Manage Employee Page", title: "Manage Employee Page" },
      { type: "image", src: "/angelic-customerprofile.png", alt: "Customer Profile Page", title: "Customer Profile Page" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "https://angelic-salonandspa.web.app/",
    github: "https://github.com/siencan/angelic-salon",
  },
  {
    id: 4,
    title: "T-Space",
    description: `T-Space is a simple online forum/message board built using Laravel.  
                  The project serves as a communication platform for Tarumanagara University students to share ideas, discuss topics, and connect with one another.  `,
    longDescription:`This application was developed as part of the <strong>final project (UAS)</strong> for the <strong>Back-End Programming</strong> course.  
In this course, I received the topic <strong>"Simple Online Forum / Message Board"</strong>, where I was required to design and implement a forum system using <strong>Laravel</strong>.
                          
As this project was created during my <strong>second semester</strong>, it mainly focuses on learning fundamental <strong>back-end development concepts</strong> such as:
                          - CRUD (Create, Read, Update, Delete) operations  
                          - MVC (Model-View-Controller) architecture    
                          - Database migration and seeding  
                          - Authentication and route protection  
                          - Blade templating for frontend rendering`,
    techStack: [ "Laravel", "PHP", "MySQL", "Blade Template", "Tailwind CSS" ],
    keyFeatures: ["💬 Create and reply to discussion threads", "🔐 Basic user authentication (login/register)", "✏️ Users can manage their own posts and comments (create, edit, delete)", 
      "👤 Profile management with photo upload stored in local storage", "🎨 Clean and responsive Blade-based frontend"],
    whatILearned: [
      "Building RESTful applications with Laravel",
      "Implementing MVC (Model-View-Controller) structure",
      "Managing data with Eloquent ORM and migrations",
      "Setting up user authentication and middleware",
      "Designing simple yet consistent frontend layouts using Blade and Tailwind CSS",
      "Connecting and structuring databases with MySQL"
    ],
    image: "/tspace-login.png",
    gallery: [
      { type: "image", src: "/tspace-login.png", alt: "Login Page", title: "Login Page" },
      { type: "image", src: "/tspace-register.png", alt: "Register Page", title: "Register Page" },
      { type: "image", src: "/tspace-home.png", alt: "Home Page", title: "Home Page" },
      { type: "image", src: "/tspace-profile.png", alt: "Profile Page", title: "Profile Page" },
      { type: "image", src: "/tspace-community.png", alt: "All Community Page", title: "All Community Page" },
      { type: "image", src: "/tspace-insidecommunity.png", alt: "DPM Community Page", title: "DPM Community Page" },
      { type: "image", src: "/tspace-insidediscussion.png", alt: "Discussion Page", title: "Discussion Page" },
      { type: "image", src: "/tspace-search.png", alt: "Search Discussion Feature", title: "Search Discussion Feature" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "#",
    github: "https://github.com/SiEncan/T-Space",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Full-stack social platform with user authentication, posts, and real-time notifications.",
    longDescription:
      "A modern social media platform built with Next.js and Supabase. Features include user authentication, post creation and sharing, real-time notifications, user profiles, and social interactions. Designed with a focus on user experience and performance.",
    techStack: ["Next.js", "Supabase", "React", "Tailwind CSS"],
    keyFeatures: [
      "User authentication",
      "Post creation and sharing",
      "Real-time notifications",
      "User profiles",
      "Social interactions",
      "Focus on user experience and performance",
    ],
    image: "/social-media-app-interface.png",
    gallery: [
      { type: "image", src: "/social-media-app-interface.png", alt: "Feed", title: "Social Feed" },
      { type: "image", src: "/user-profile-social-media.jpg", alt: "Profile", title: "User Profile" },
      { type: "image", src: "/social-media-notifications.jpg", alt: "Notifications", title: "Notifications" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "AI Chat Interface",
    description: "Intelligent chatbot interface powered by AI with natural language processing and context awareness.",
    longDescription:
      "An advanced AI-powered chat interface that leverages OpenAI's language models for intelligent conversations. Built with Next.js and the AI SDK, featuring context awareness, conversation history, and a clean, intuitive user interface.",
    techStack: [ "Next.js", "AI SDK", "OpenAI", "Tailwind CSS" ],
    keyFeatures: [
      "Context awareness",
      "Conversation history",
      "Clean and intuitive user interface",
      "Powered by OpenAI's language models",
    ],
    image: "/ai-chat-interface.png",
    gallery: [
      { type: "image", src: "/ai-chat-interface.png", alt: "Chat interface", title: "Chat Interface" },
      { type: "image", src: "/ai-chatbot-conversation.png", alt: "Conversation", title: "Conversation View" },
      { type: "image", src: "/chat-history-messages.jpg", alt: "History", title: "Chat History" },
    ],
    year: 2024,
    role: "Full Stack Developer",
    link: "#",
    github: "#",
  },
]
