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
  additionalList?: { label: string; value: string }[]
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
      "Browse and book available sports fields",
      "Dynamic time slot management with real-time updates",
      "Secure payments via Midtrans",
      "Admin dashboard for managing venues and schedules",
      "Role-based authentication for owners and customers",
      "Multi-owner support - Multiple owners can manage their own fields independently.",
      "Email verification - Integrated Nodemailer to verify user accounts and reduce spam bookings.",
      "Google Sign-In - Enabled seamless login without manual registration for a smoother user experience.",
      "Local storage booking persistence - Preserves ongoing bookings even after page reloads or interruptions, improving user experience."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    whatIBuilt: [
  "Designed a scalable <strong>multi-owner architecture</strong> using relational models",
  "Created <strong>PostgreSQL + Prisma</strong> schema for venues, time slots, and bookings",
  "Implemented <strong>conflict-free dynamic time slot allocation</strong>",
  "Integrated <strong>Midtrans payments</strong> with server-side security validations",
  "Configured <strong>Nodemailer</strong> for automated email verification",
  "Developed <strong>local storage persistence</strong> for in-progress bookings",
  "Implemented <strong>OAuth 2.0 login via Google Sign-In</strong> for faster user access"
]
,
    goals: [
      "Understanding Next.js structure and server-side rendering (SSR)",
      "Writing clean and type-safe code using <strong>TypeScript</strong>",
      "Practicing clean and modular code architecture",
      "Learning how to integrate a payment gateway (e.g., Midtrans) into a real-world application"
    ],
    image: "/arenaku-home.png",
    gallery: [
      { type: "image", src: "/arenaku-home.png", alt: "Home Page", title: "Home Page" },
      { type: "image", src: "/arenaku-login.png", alt: "Login Page", title: "Login Page" },
      { type: "video", src: "/arenaku-alurbooking.mp4", alt: "Alur Booking", title: "Alur Booking (Video)" },
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
    year: 2025,
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
      "Display user wallet balance in real-time",
      "Top-up and transfer functionality",
      "Transfer funds to other users via QR code scanning",
      "Secure payments with a payment passcode required for transfers or purchases",
      "Purchase digital items such as mobile pulsa, internet quota, electricity tokens, and other e-wallet top-ups",
      "Track spending with income/expense statistics and graphical insights",
      "View complete transaction history",
      "Manage personal profile and account details",
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
      "🖼️ Clean and elegant white-pink user interface",
      "📱 Fully responsive design for all screen sizes",
    ],
    techStack: ["JavaScript", "React", "Vite", "Tailwind CSS", "Firebase", "EsLint"],
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
    year: 2025,
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
    title: "Prambors Radio Discord Bot",
    description: "A Discord bot that lets users stream Radio Prambors and search song lyrics directly from Discord.",
    longDescription:`Prambors Discord Bot is a Discord bot that allows users to listen to Radio Prambors Jakarta 102.2FM directly from Discord without opening a browser tab.
    
    <strong>📖 Background Story</strong>
    I first created this bot in 2018, when I was in 9th grade (Junior High School).
    This project is one of my earliest coding projects and played a major role in keeping me active in programming.
    At that time, I wanted to bring Radio Prambors from the website to Discord because opening a Chrome tab to listen to the radio was too heavy on my PC, especially when I was gaming.

    The code might look simple now—but remember, it was written by a middle schooler learning only from StackOverflow and YouTube tutorials. It is hosted on Heroku to ensure continuous streaming and uptime.

    Initially, this bot was for personal use with my friends in a private Discord server. However, it quickly gained interest and eventually:
      • 📌 Deployed in 1,118 Discord servers
      • 👥 Used by 447,000 Discord users across all servers`,
    techStack: ["JavaScript", "Node.js", "Discord.js", "Express", "Tailwind CSS"],
    keyFeatures: [
      "🎧 Listen to Radio Prambors live directly on Discord",
      "📈 Tracks server and user statistics",
      "🎵 Search and view song lyrics using Genius API",
    ],
    whatILearned: [
      "Building a Discord bot with Node.js and Discord.js",
      "Integrating external APIs such as Genius for song lyrics",
      "Web scraping using axios and cheerio",
      "Deploying and maintaining a live bot across multiple servers",
      "Hosting and managing the bot on Heroku for continuous streaming and uptime",
      "Writing code for real-world use cases, starting from a personal project to one used by thousands of user",
      "Problem-solving and debugging based on user feedback"
    ],
    additionalList: [
      { label: "!prambors info", value: "Displays information about this bot" },
      { label: "!prambors help", value: "Shows all available commands" },
      { label: "!prambors play", value: "Bot joins your voice channel and starts streaming Radio Prambors" },
      { label: "!prambors leave", value: "Makes the bot leave your voice channel" },
      { label: "!prambors lirik <judul>", value: "Searches for song lyrics using the Genius API" },
      { label: "!prambors invite", value: "Provides the invite link for this bot" },
      { label: "!prambors jadwal", value: "Displays the show schedule of Prambors Radio Jakarta" },
      { label: "!prambors ping", value: "Displays the bot's current ping" },
    ],
    image: "/prambors-supportserver.png",
    gallery: [
      { type: "image", src: "/prambors-info.png", alt: "Display Bot Statistics", title: "Display Bot Statistics" },
      { type: "image", src: "/prambors-lirik.png", alt: "Search Song Lyrics Command", title: "Search Song Lyrics Command" },
      { type: "image", src: "/prambors-help.png", alt: "Display All Bot Commands", title: "Display All Bot Commands" },
      { type: "image", src: "/prambors-play.png", alt: "Play Radio Command", title: "Play Radio Command" },
      { type: "image", src: "/prambors-leave.png", alt: "Leave Voice Command", title: "Leave Voice Command" },
      { type: "image", src: "/prambors-jadwal.png", alt: "Displaying the show list schedule", title: "Displaying the show list schedule" },
    ],
    year: 2018,
    role: "Full Stack Developer",
    link: "http://discord.gg/PqPwy34",
    github: "https://github.com/SiEncan/prambors-discord-bot",
  },
]
