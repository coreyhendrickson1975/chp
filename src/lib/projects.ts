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
      "\"Working with Corey Hendrickson Productions to document the Bread Loaf Writers' Conferences has been an outstanding experience. Despite the intensive schedule of both programs, Corey had a remarkable ability to make our participants feel comfortable on camera, drawing out authentic, personal reflections from people of all different backgrounds. The collaborative editing process was equally impressive—Corey worked closely with all of us on staff to ensure each final piece captured the unique essence and spirit of the conferences. These films genuinely represent what makes Bread Loaf special and we are proud to feature them on our website and promotional materials.\" - Jennifer Grotz, Director of the Bread Loaf Writers' Conferences",
    ],
    keywords: "educational filmmaker, university video, vermont college films, education, vermont film production, middlebury, university of vermont, dartmouth, video production for academia, university media, college media",
    gallery: middleburyGallery,
    galleryAspectRatio: "16/9",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Yankee Publishing",
    slug: "yankee-publishing",
    image: "/images/yankee/Yankee_Travel_Tourism0032.jpg",
    description: [
      "In partnership with Yankee Publishing, we produced a series of custom content pieces for the Maine Office of Tourism. The work required us to dig beneath the surface of postcard-perfect New England to find the people who truly make these places tick, from Caribou to Kennebunk. These were documentary-style portraits that let people tell their own stories in their own words. Each project was built around genuine conversations: the kind where a conservationist's weathered field notes tell as much of the story as their words, or where an oyster farmer's skiff becomes a character in itself.",
      "The locations themselves often became central to the narrative. A windswept lighthouse in Maine wasn't just a backdrop; it shaped the keeper's daily rhythm and worldview. A hillside blueberry farm didn't just look beautiful; it explained why someone would choose this particular hard work in this particular soil. We used strong b-roll to build depth in the story world: close-ups of weathered tools, wide shots that established geography and community, moments of process that revealed dedication. The result was content that felt true to Maine: unpretentious, rooted, and real.",
    ],
    gallery: yankeeGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Woodstock Inn & Resort",
    slug: "woodstock-inn-and-resort",
    image: "/images/woodstock-inn/Woodstock-Inn-Vermont-0001.jpg",
    description: [
      "For the Woodstock Inn and Resort, we developed a comprehensive library of marketing materials, including short-form videos and still photography that captured the full spectrum of the guest experience. The challenge was maintaining a consistent visual style and brand identity across dramatically different environments: from the energy of the ski hill to the serenity of the spa, from fine dining spaces to outdoor adventures.",
      "Working within the resort's established branding and concept guidelines, we created content that felt cohesive regardless of setting. Whether directing professional models or local talent, we ensured that every subject understood the vision and felt comfortable on camera, creating an atmosphere where authenticity and polish could coexist. The result was a versatile content suite that reinforced the Woodstock Inn & Resort brand while showcasing the diverse experiences that define the property.",
    ],
    gallery: woodstockInnGallery,
    galleryAspectRatio: "2.35/1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "PBS",
    slug: "pbs",
    subtitle: "Weekends With Yankee",
    image: "/images/pbs/Weekends_With_Yankee_0031.jpg",
    description: [
      "Weekends With Yankee is an award-winning national PBS program that reaches 95% of the PBS marketplace, bringing New England stories to millions of viewers across the country. Over the course of 10 seasons, my role on the show has evolved from cinematographer to earning credits as director of photography, producer, and editor. Production days require efficiency and versatility: I direct Amy Traverso and Richard Wiese and guest talent, keeping one ear on the dialogue while mentally cataloging what b-roll we'll need to support each interview. I wear multiple hats, managing the film crew while also operating a camera and shaping the visual narrative in real time. It's fast-paced work that demands both technical precision and an instinct for storytelling. After the filming is done, I turn the days worth of footage into a stringout, transcribe everything and assemble the paper cut... transforming 10 hours of work into 10 minutes of television.",
      "What has made this decade long journey particularly meaningful is the education it provided. Each episode became a deep dive into a corner of New England I might not have otherwise explored. I learned about the region's craft traditions, culinary innovations, hidden landscapes, and the people who steward them. The show didn't just document these places; it gave me a relationship with them. I've often returned to locations we featured with my family, seeing them through new eyes and sharing what I'd learned behind the camera.",
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
      "Ramen Day was a documentary film produced for SEVCA (Southeast Vermont Community Action) that captured a groundbreaking, statewide approach to battling food insecurity. The film was shown to communities around Vermont and accepted into festivals around the globe. It won awards at both the Luleå International Film Festival in Sweden and the Better Cities Film Festival in Detroit, Michigan. It was also an official selection for the International Social Change Film Festival in Chicago and the Activists Without Borders Film Festival in the UK. Lastly, it won Silver in the short documentary category of the Telly Awards.",
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
