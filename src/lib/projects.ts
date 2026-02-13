export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string[];
  gallery: string[];
  galleryAspectRatio?: string;
  videoUrl?: string;
  subtitle?: string;
  keywords?: string;
  hidden?: boolean;
}

const middleburyGallery = [
  "/images/middlebury/Middlebury-College-Vermont0001.jpg",
  "/images/middlebury/Middlebury-College-Vermont0002.jpg",
  "/images/middlebury/Middlebury-College-Vermont0003.jpg",
  "/images/middlebury/Middlebury-College-Vermont0004.jpg",
  "/images/middlebury/Middlebury-College-Vermont0005.jpg",
  "/images/middlebury/Middlebury-College-Vermont0006.jpg",
  "/images/middlebury/Middlebury-College-Vermont0007.jpg",
  "/images/middlebury/Middlebury-College-Vermont0008.jpg",
  "/images/middlebury/Middlebury-College-Vermont0009.jpg",
  "/images/middlebury/Middlebury-College-Vermont0010.jpg",
  "/images/middlebury/Middlebury-College-Vermont0011.jpg",
  "/images/middlebury/Middlebury-College-Vermont0012.jpg",
  "/images/middlebury/Middlebury-College-Vermont0013.jpg",
  "/images/middlebury/Middlebury-College-Vermont0014.jpg",
  "/images/middlebury/Middlebury-College-Vermont0015.jpg",
  "/images/middlebury/Middlebury-College-Vermont0016.jpg",
  "/images/middlebury/Middlebury-College-Vermont0018.jpg",
  "/images/middlebury/Middlebury-College-Vermont0017.jpg",
];

const woodstockInnGallery = [
  "/images/woodstock-inn/Woodstock-Inn-Vermont-0001.jpg",
  "/images/woodstock-inn/Woodstock-Inn-Vermont-0002.jpg",
  "/images/woodstock-inn/Woodstock-Inn-Vermont-0003.jpg",
  "/images/woodstock-inn/Woodstock-Inn-Vermont-0004.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0005.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0006.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0007.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0008.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0009.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0010.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0011.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0012.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0024.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0022.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0023.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0025.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0021.jpg",
  "/images/woodstock-inn/Woodstock-Inn-0027.jpg",
];

const yankeeGallery = [
  "/images/yankee/Yankee_Travel_Tourism_0009.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0003.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0010.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0012.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0011.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0013.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0001.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0008.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0007.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0005.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0006.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0004.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0017.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0018.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0019.jpg",
  "/images/yankee/Yankee_Travel_Tourism0031.jpg",
  "/images/yankee/Yankee_Travel_Tourism0032.jpg",
  "/images/yankee/Yankee_Travel_Tourism0033.jpg",
];

const boeingGallery = [
  "/images/boeing/Boeing_0001.jpg",
  "/images/boeing/Boeing_0002.jpg",
  "/images/boeing/Boeing_0003.jpg",
  "/images/boeing/Boeing_0004.jpg",
  "/images/boeing/Boeing_0005.jpg",
  "/images/boeing/Boeing_0006.jpg",
  "/images/boeing/Boeing_0007.jpg",
  "/images/boeing/Boeing_0008.jpg",
  "/images/boeing/Boeing_0009.jpg",
];

const untappedGallery = [
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0001.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0002.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0003.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0004.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0005.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0006.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0007.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0008.jpg",
  "/images/untapped/Kikkan_Randall_Untapped_0053.jpg",
  "/images/untapped/Kikkan_Randall_Untapped_0051.jpg",
  "/images/untapped/Kikkan_Randall_Untapped_0052.jpg",
  "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0009.jpg",
];

const pbsGallery = [
  "/images/pbs/Weekends_With_Yankee_0001.jpg",
  "/images/pbs/Weekends_With_Yankee_0002.jpg",
  "/images/pbs/Weekends_With_Yankee_0003.jpg",
  "/images/pbs/Weekends_With_Yankee_0004.jpg",
  "/images/pbs/Weekends_With_Yankee_0005.jpg",
  "/images/pbs/Weekends_With_Yankee_0006.jpg",
  "/images/pbs/Weekends_With_Yankee_0007.jpg",
  "/images/pbs/Weekends_With_Yankee_0008.jpg",
  "/images/pbs/Weekends_With_Yankee_0009.jpg",
  "/images/pbs/Weekends_With_Yankee_0010.jpg",
  "/images/pbs/Weekends_With_Yankee_0011.jpg",
  "/images/pbs/Weekends_With_Yankee_0012.jpg",
  "/images/pbs/Weekends_With_Yankee_0013.jpg",
  "/images/pbs/Weekends_With_Yankee_0014.jpg",
  "/images/pbs/Weekends_With_Yankee_0015.jpg",
  "/images/pbs/Weekends_With_Yankee_0016.jpg",
  "/images/pbs/Weekends_With_Yankee_0017.jpg",
  "/images/pbs/Weekends_With_Yankee_0018.jpg",
  "/images/pbs/Weekends_With_Yankee_0019.jpg",
  "/images/pbs/Weekends_With_Yankee_0020.jpg",
  "/images/pbs/Weekends_With_Yankee_0021.jpg",
  "/images/pbs/Weekends_With_Yankee_0022.jpg",
  "/images/pbs/Weekends_With_Yankee_0023.jpg",
  "/images/pbs/Weekends_With_Yankee_0024.jpg",
  "/images/pbs/Weekends_With_Yankee_0025.jpg",
  "/images/pbs/Weekends_With_Yankee_0026.jpg",
  "/images/pbs/Weekends_With_Yankee_0027.jpg",
  "/images/pbs/Weekends_With_Yankee_0028.jpg",
  "/images/pbs/Weekends_With_Yankee_0029.jpg",
  "/images/pbs/Weekends_With_Yankee_0030.jpg",
];

const nbcGallery = [
  "/images/nbc/MIRACLE_ON_ICE_0001.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0002.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0003.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0004.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0005.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0006.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0008.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0007.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0010.jpg",
];

const vhcbGallery = [
  "/images/vhcb/Vermont_Housing_Conservation_Board_0001.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0002.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0003.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0004.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0005.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0006.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0007.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0008.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0009.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0010.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0011.jpg",
  "/images/vhcb/Vermont_Housing_Conservation_Board_0012.jpg",
];

const camphillGallery = [
  "/images/camphill/Camphill_Foundation_0001.jpg",
  "/images/camphill/Camphill_Foundation_0002.jpg",
  "/images/camphill/Camphill_Foundation_0003.jpg",
  "/images/camphill/Camphill_Foundation_0004.jpg",
  "/images/camphill/Camphill_Foundation_0005.jpg",
  "/images/camphill/Camphill_Foundation_0006.jpg",
  "/images/camphill/Camphill_Foundation_0007.jpg",
  "/images/camphill/Camphill_Foundation_0008.jpg",
  "/images/camphill/Camphill_Foundation_0009.jpg",
  "/images/camphill/Camphill_Foundation_0011.jpg",
  "/images/camphill/Camphill_Foundation_0013.jpg",
  "/images/camphill/Camphill_Foundation_0012.jpg",
];

const ramenDayGallery = [
  "/images/ramen-day/ramen_day_110.webp",
  "/images/ramen-day/Ramen_Day_0003.jpg",
  "/images/ramen-day/Ramen_Day_0004.jpg",
  "/images/ramen-day/Ramen_Day_114.webp",
  "/images/ramen-day/Ramen_Day_111.webp",
  "/images/ramen-day/Ramen_Day_0008.jpg",
  "/images/ramen-day/Ramen_Day_0009.jpg",
  "/images/ramen-day/Ramen_Day_0011.jpg",
  "/images/ramen-day/Ramen_Day_Frames_112.webp",
  "/images/ramen-day/Ramen_Day_113.webp",
  "/images/ramen-day/Ramen_Day_0014.jpg",
  "/images/ramen-day/Ramen_Day_119.webp",
];

export const projects: Project[] = [
  {
    title: "Middlebury College",
    slug: "middlebury-college",
    image: "/images/middlebury/Middlebury-College-Vermont0001.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: middleburyGallery,
    galleryAspectRatio: "16/9",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Yankee Publishing",
    slug: "yankee-publishing",
    image: "/images/yankee/Yankee_Travel_Tourism0032.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: yankeeGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Woodstock Inn & Resort",
    slug: "woodstock-inn-and-resort",
    image: "/images/woodstock-inn/Woodstock-Inn-Vermont-0001.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: woodstockInnGallery,
    galleryAspectRatio: "2.35/1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "PBS",
    slug: "pbs",
    image: "/images/pbs/Weekends_With_Yankee_0031.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: pbsGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Ramen Day",
    slug: "ramen-day",
    subtitle: "The Vermont Everyone Eats Story",
    image: "/images/ramen-day/Ramen_Day_111.webp",
    description: [
      "Ramen Day was a documentary film produced for SEVCA (Southeast Vermont Community Action) that captured a groundbreaking, statewide approach to battling food insecurity. The film was shown to communities around Vermont and accepted into festivals around the globe. It won awards at both the Luleå International Film Festival in Sweden and the Better Cities Film Festival in Detroit, Michigan. It was also an official selection for the International Social Change Film Festival and the Activists Without Borders Film Festival. Lastly, it won Silver in the short documentary category of the Telly Awards.",
    ],
    keywords: "food insecurity, social justice, hunger, food justice, documentary film, nutrition, Vermont, community action, film festival, Telly Awards",
    gallery: ramenDayGallery,
    galleryAspectRatio: "2.35/1",
  },
  {
    title: "Boeing",
    slug: "boeing",
    image: "/images/boeing/Boeing_0007.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: boeingGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    hidden: true,
  },
  {
    title: "NBC",
    slug: "nbc",
    image: "/images/nbc/MIRACLE_ON_ICE_0003.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: nbcGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Camphill Foundation",
    slug: "camphill-foundation",
    image: "/images/camphill/Camphill_Foundation_0010.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: camphillGallery,
    galleryAspectRatio: "1.33/1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Untapped",
    slug: "untapped",
    image: "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0001.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    gallery: untappedGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Vermont Housing & Conservation Board",
    slug: "vermont-housing-and-conservation-board",
    image: "/images/vhcb/Vermont_Housing_Conservation_Board_0012.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna.",
      "\"Working with Corey Hendrickson Productions was such a phenomenal experience for our team! We sought Corey's expertise on a complex, multi-day documentary project to chronicle the lived experience of working lands entrepreneurs we serve in Vermont. Not only was the video footage and photography visually stunning, but Corey was able to connect with each person filmed, his friendly interview style putting folks at ease and allowing them to open up and share their truth. It's evident how much Corey cares about sharing stories authentically and with respect. We couldn't be happier with the outcome of our video, and feel that we've finally been able to create a piece that captures our why.\" — Mariah Noth, Outreach & Communications Coordinator",
    ],
    gallery: vhcbGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const visible = projects.filter((p) => !p.hidden);
  const index = visible.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return visible[(index + 1) % visible.length];
}
