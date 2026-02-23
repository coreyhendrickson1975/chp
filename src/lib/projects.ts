export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string[];
  gallery: string[];
  galleryAspectRatio?: string;
  videoUrl?: string;
  wistiaId?: string | string[];
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
  "/images/yankee/Yankee_Travel_Tourism_0041.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0042.jpg",
  "/images/yankee/Yankee_Travel_Tourism_0044.jpg",
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
  "/images/nbc/Al_Michaels_Lake-Placid_o3.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0003.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0004.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0005.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0006.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0008.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0007.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0010.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0032.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0031.jpg",
  "/images/nbc/MIRACLE_ON_ICE_0033.jpg",
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
    subtitle: "Bread Loaf Writers' Conferences",
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
    subtitle: "Custom short films for travel & tourism",
    image: "/images/yankee/Yankee_Travel_Tourism0032.jpg",
    description: [
      "In partnership with Yankee Publishing, we produced a series of custom content pieces for the Maine Office of Tourism. The work required us to dig beneath the surface of postcard-perfect New England to find the people who truly make these places tick, from Caribou to Kennebunk. These were documentary-style portraits that let people tell their own stories in their own words. Each project was built around genuine conversations: the kind where a conservationist's weathered field notes tell as much of the story as their words, or where an oyster farmer's skiff becomes a character in itself.",
      "The locations themselves often became central to the narrative. A windswept lighthouse in Maine wasn't just a backdrop; it shaped the keeper's daily rhythm and worldview. A hillside blueberry farm didn't just look beautiful; it explained why someone would choose this particular hard work in this particular soil. We used strong b-roll to build depth in the story world: close-ups of weathered tools, wide shots that established geography and community, moments of process that revealed dedication. The result was content that felt true to Maine: unpretentious, rooted, and real.",
    ],
    keywords: "Travel, Tourism, Travel films, Tourism film production, Maine, Vermont, New Hampshire, Massachussetts, Explore, Travel DP, Tourism cinematographer, Yankee Publishing",
    gallery: yankeeGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Woodstock Inn & Resort",
    slug: "woodstock-inn-and-resort",
    image: "/images/woodstock-inn/Woodstock-Inn-Vermont-0001.jpg",
    description: [
      "The Woodstock Inn & Resort has spent decades earning what most brands can't buy: the feeling that luxury and Vermont authenticity aren't in tension. They're the same thing. Our job was to make sure the film and photography felt the same way. That meant moving across wildly different environments (alpine ski resort, spa, fine dining, nordic center) without letting the content feel like a catalog. The real challenge wasn't visual consistency. It was emotional consistency. Every frame needed to carry the same quiet confidence the Inn itself carries.",
      "We worked with professional models and local talent alike, and in both cases the approach was the same: slow down, create an atmosphere where people stop performing and start being. Authenticity at this level isn't accidental. It's earned on set, one moment at a time. The result isn't a content library that shows what the Woodstock Inn offers. It's one that shows why people fall in love with it.",
    ],
    keywords: "luxury resort video production, hotel marketing video, resort brand film, hospitality filmmaker, luxury hotel content, resort photography, ski resort video, spa video production, fine dining film, Woodstock Inn, Vermont luxury resort, hospitality marketing, resort cinematographer, hotel brand content, luxury travel video",
    gallery: woodstockInnGallery,
    galleryAspectRatio: "2.35/1",
    wistiaId: ["8rmon31dsv", "6lodr6l7om"],
  },
  {
    title: "PBS",
    slug: "pbs",
    subtitle: "Weekends With Yankee",
    image: "/images/pbs/Weekends_With_Yankee_0031.jpg",
    description: [
      "Weekends With Yankee is an award-winning national PBS program that reaches 95% of the PBS marketplace, bringing New England stories to millions of viewers across the country. Over the course of 10 seasons, my role on the show has evolved from cinematographer to earning credits as director of photography, producer, and editor. Production days require efficiency and versatility: directing Amy Traverso and Richard Wiese and guest talent, keeping one ear on the dialogue while mentally cataloging what b-roll we'll need to support each interview. I wear multiple hats, managing the film crew while also operating a camera and shaping the visual narrative in real time. It's fast-paced work that demands both technical precision and an instinct for storytelling. After the filming is done, I turn the days worth of footage into a stringout, transcribe everything and assemble the paper cut... transforming 10 hours of work into 10 minutes of television.",
      "What has made this decade long journey particularly meaningful is the education it provided. Each episode became a deep dive into a corner of New England I might not have otherwise explored. I learned about the region's craft traditions, culinary innovations, hidden landscapes, and the people who steward them. The show didn't just document these places; it gave me a relationship with them. I've often returned to locations we featured with my family, seeing them through new eyes and sharing what I'd learned behind the camera.",
    ],
    keywords: "Yankee Magazine, New England, PBS, Weekends With Yankee, Insider's Guide, Travel, Tourism, Adventure, Documentary New England, DP, Director, Explore, Taste, Culinary, Amy Traverso, Richard Wiese",
    gallery: pbsGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Ramen Day",
    slug: "ramen-day",
    subtitle: "The Vermont Everyone Eats Story",
    image: "/images/ramen-day/Ramen_Day_111.webp",
    description: [
      "When SEVCA commissioned us to make Ramen Day, they weren't asking for a fundraising video. They were asking us to document something genuinely new: a statewide effort that reimagined how communities address hunger, not as a charity problem, but as a community one. We made a film about it because we believed the story deserved to travel further than Vermont. Not as a fundraising tool or an awareness campaign, but as a template for how to apply this novel approach of combatting food insecurity.",
      "It did travel. The film screened across Vermont, then crossed borders, earning selections at festivals in Sweden, the UK, Chicago, and Detroit, and taking home awards including Silver at the Telly Awards and recognition at the Luleå International Film Festival and the Better Cities Film Festival.",
      "Awards matter less to us than the conversation the film started. But the fact that a story about a statewide initiative in Vermont resonated in Detroit and Stockholm says something about how universal the why behind Ramen Day really is. Unfortunately, food insecurity didn't end when the program's federal funding did. Ramen Day is still being screened in Vermont.",
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
    subtitle: "Run Back the Miracle",
    image: "/images/nbc/MIRACLE_ON_ICE_0003.jpg",
    description: [
      "The Miracle on Ice has been told a thousand times... What Michelob Ultra set out to do was make you feel it for the first time again. Run Back the Miracle was a half-hour Peacock special built around a large-scale projection installation that brought historic 1980 game footage back to the Herb Brooks Arena, the very ice where it happened, with Al Michaels returning to bear witness. Key members of the 1980 team were also there in person, including captain Mike Eruzione, goalie Jim Craig, and forward Mark Johnson. It was a genuinely new way to experience a story everyone thought they already knew.",
      "Frequency Pictures brought us in to help document it. We assembled a nimble three-camera crew, captured the installation as it came to life, and spent time in a town where the Olympics are less a memory than a landscape. As a two-time host city, Lake Placid carries that legacy in its storefronts, its faces, and the quiet everyday texture of a place that has always known it was part of something bigger. When a story is this familiar, the challenge isn't telling it. It's finding the angle that makes it land like new. That's exactly what this project was built around, and exactly the kind of work we are drawn to.",
    ],
    keywords: "behind the scenes film production, BTS production, Miracle on Ice, Run Back the Miracle, Al Michaels, Peacock, NBC, Olympics, hockey, Lake Placid film production, Herb Brooks arena, 1980 Olympics, sports documentary, behind the scenes cinematography, Frequency Pictures",
    gallery: nbcGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Camphill Foundation",
    slug: "camphill-foundation",
    image: "/images/camphill/Camphill_Foundation_0010.jpg",
    description: [
      "For the Camphill Foundation's 60th anniversary gala in New York City, we created a film that honored both the organization's history and its future. The challenge was weaving together two narratives: the story of the Pietzner family bringing the Camphill movement to North America and the ongoing importance of supporting the Foundation's work today. We made a deliberate creative choice to shoot contemporary interviews with a formal aesthetic that paid homage to the gorgeous 16mm archival footage from Camphill's early years.",
      "This bridging of eras extended into the color grade, where we carefully balanced newly captured material with archival content from Corey Hendrickson Productions' ten-year history of filming for Camphill communities. The result was a film that felt both timeless and immediate, connecting the founding vision to present-day impact. Presented to a live audience at the gala, the piece served as both a celebration of legacy and a call to continue building the movement.",
    ],
    keywords: "Camphill movement, special needs filmmaking, autism, filmmaker for sensitive subjects, brand films, fundraising filmmaker, waldorf video production, nonprofit documentary, gala film, anniversary film, archival documentary, disability community, intentional community, nonprofit video production",
    gallery: camphillGallery,
    galleryAspectRatio: "1.33/1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Untapped",
    slug: "untapped",
    subtitle: "Kikkan Randall helps Ted King take on the Birkie",
    image: "/images/untapped/Kikkan_Randall_Ted_King_Untapped_0001.jpg",
    description: [
      "We set out to create a brand film with humor, purpose, and a clear narrative arc: follow former professional cyclist Ted King as he learns cross-country skiing from Olympic legend Kikkan Randall, culminating in a race at the famous American Birkebeiner. The plan was straightforward. Start with a roller ski lesson on pavement in New Hampshire, track Ted's learning curve as he transitions from wheels to snow in Vermont, and document his seemingly limitless cardio fitness carrying him through a 50-kilometer test in Wisconsin. It was going to be a feel-good story about athletic versatility and expert coaching.",
      "Then Ted broke his arm at a bike race. Suddenly, all bets were off. The film could have ended there, but Ted recovered as fast as he bikes, and we pivoted with him. What emerged was something better than the original plan: a story with real stakes and unexpected drama. We followed Ted to Wisconsin and captured his first-ever cross-country ski race, all 50 kilometers of it, one arm held together with hardware. As a brand film for Untapped, we wove in the role of nutrition in his recovery and performance, including fun footage from the Untapped expo booth at the race. The result was authentic, unpredictable, and exactly what great branded content should be.",
    ],
    keywords: "Kikkan Randall, Ted King, American Birkebeiner, Brand Film, Untapped, Branded Documentary, Athletes film, Sports filmmaker, Maple, Fischer Skis, Birkie, Vermont, Nordic",
    gallery: untappedGallery,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Vermont Housing & Conservation Board",
    slug: "vermont-housing-and-conservation-board",
    image: "/images/vhcb/Vermont_Housing_Conservation_Board_0012.jpg",
    description: [
      "\"Working with Corey Hendrickson Productions was such a phenomenal experience for our team! We sought Corey's expertise on a complex, multi-day documentary project to chronicle the lived experience of working lands entrepreneurs we serve in Vermont. Not only was the video footage and photography visually stunning, but Corey was able to connect with each person filmed, his friendly interview style putting folks at ease and allowing them to open up and share their truth. It's evident how much Corey cares about sharing stories authentically and with respect. We couldn't be happier with the outcome of our video, and feel that we've finally been able to create a piece that captures our why.\" — Mariah Noth, VHCB",
    ],
    keywords: "non-profit filmmaker, conservation video production, farmer films, agricultural film production, new england farm films, vermont farm filmmaker, governmental film production, working lands documentary, Vermont conservation, housing documentary, nonprofit storytelling, rural Vermont filmmaker",
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
