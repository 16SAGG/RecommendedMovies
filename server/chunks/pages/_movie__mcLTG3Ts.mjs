/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_2q5if4aT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './404_bFFhm9xL.mjs';

const $$Astro$1 = createAstro();
const $$MoviePoster = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MoviePoster;
  const {
    title,
    image,
    style
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img class="aspect-[16:9] h-ful w-full object-cover rounded-lg" loading="lazy"${addAttribute(image, "src")}${addAttribute(`${title} poster`, "alt")}${addAttribute(style, "style")}>`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/components/MoviePoster.astro", void 0);

const movies = [
    {
        id : "kiki-delivery-service",
        title : "Kiki's Delivery Service",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/products/kiki_hires_3.jpg?v=1675792088&width=800&height=450&crop=center",
        synopsis : "In this heartwarming animated film from Studio Ghibli, 13-year-old Kiki embarks on a journey of self-discovery as she sets out to fulfill her dream of becoming a full-fledged witch. Guided by her wise black cat Jiji, Kiki ventures to the bustling seaside town of Koriko, where she establishes a unique delivery service using her magical flying abilities.",
        director : "Hayao Miyazaki",
        writer : "Hayao Miyazaki",
        studio : "Studio Ghibli"
    },
    {
        id : "howl-moving-castle",
        title : "Howl's Moving Castle",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/howl_hires_1.webp?v=1671141453&width=800&height=450&crop=center",
        synopsis : "Howl's Moving Castle is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki. Loosely based on the 1986 novel of the same name by British author Diana Wynne Jones, the film tells the story of Sophie, a young woman who is cursed by the Witch of the Waste to become an old woman. She flees to the Moving Castle, home to the wizard Howl, and becomes his assistant." ,
        director : "Hayao Miyazaki",
        writer : "Hayao Miyazaki",
        studio : "Studio Ghibli"
    },
    {
        id : "my-neighbor-totoro",
        title : "My Neighbor Totoro",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/totoro_hires_1.webp?v=1671142250&width=800&height=450&crop=center",
        synopsis : "In 1958 Japan, university professor Tatsuo Kusakabe and his two daughters, Satsuki and Mei, move to an old house in the countryside to be closer to their hospitalized mother. While exploring the nearby woods, Mei encounters Totoro, a gigantic, friendly creature who resembles a cat mixed with a rabbit. Mei befriends Totoro and his smaller companions, and the two sisters soon find themselves enchanted by the magical world of the forest.",
        director : "Hayao Miyazaki",
        writer : "Hayao Miyazaki",
        studio : "Studio Ghibli"
    },
    {
        id : "spirited-away",
        title : "Spirited Away",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/products/spirited_hires_2_4a92150b-af0e-4b04-93f9-eb6ea978126b.jpg?v=1675796008&width=800&height=450&crop=center",
        synopsis : "The story follows Chihiro Ogino, a sullen ten-year-old girl who, while moving to a new neighborhood, enters the world of kami (spirits of Japanese Shinto folklore). After her parents are turned into pigs by the witch Yubaba, Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world.",
        director : "Hayao Miyazaki",
        writer : "Hayao Miyazaki",
        studio : "Studio Ghibli"
    },
    {
        id : "ponyo",
        title : "Ponyo",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/ponyo_hires_2.jpg?v=1676047969&width=800&height=450&crop=center",
        synopsis : "The film is about a goldfish named Ponyo who escapes from the ocean and is helped by a five-year-old human boy, Sōsuke, after she is washed ashore while trapped in a glass jar. As they bond with each other, Ponyo desires to become a human girl, against the devastating circumstances brought about by her acquisition and use of magic.",
        director : "Hayao Miyazaki",
        writer : "Hayao Miyazaki",
        studio : "Studio Ghibli"
    },
    {
        id : "when-marnie-was-there",
        title : "When Marnie Was There",
        image : "https://cdn.shopify.com/s/files/1/0618/8715/2293/products/when-marnie-was-there-thumbnail_01a77806-c65d-457f-9eac-ba33269ff79a.jpg?v=1675276137&width=800&height=450&crop=center",
        synopsis : "When Marnie Was There is a 2014 Japanese animated psychological drama film written and directed by Hiromasa Yonebayashi, produced by Studio Ghibli and released on July 19, 2014. Based on Joan G. Robinson's 1967 novel of the same name, the film follows the story of Anna Sasaki, a shy and introverted 12-year-old girl who is sent to stay with her relatives in the countryside to recover from asthma. While exploring the nearby marshes, Anna encounters Marnie, a mysterious and beautiful blonde girl who lives in an abandoned mansion. The two girls quickly form a close bond, but their friendship is complicated by Marnie's enigmatic nature and Anna's own struggles with loneliness and isolation.",
        director : "Hiromasa Yonebayashi",
        writer : "Hiromasa Yonebayash & Keiko Niwa",
        studio : "Studio Ghibli"
    }
];

const $$Astro = createAstro();
const $$movie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$movie;
  const { movie } = Astro2.params;
  const information = movies.find((m) => m.id === movie);
  const informationDoesNotExist = information === void 0;
  if (informationDoesNotExist)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${information.title} - Movie` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl text-violet-300 pb-10"> <header class="grid grid-rows-1 grid-cols-1 py-0 pb-5 sm:pb-8 md:py-8"> <picture class="row-start-1 col-start-1"> ${renderComponent($$result2, "MoviePoster", $$MoviePoster, { "title": information.title, "image": information.image, "style": `view-transition-name: movie-move-${information.id}` })}</picture> <div class="row-start-1 col-start-1 gradient"> <h1 class="relative top-3/4  p-5 text-2xl sm:text-4xl font-bold ">${information.title}</h1> </div> </header> <main class="flex p-0 gap-8 px-5"> <section class="grow"> ${information.synopsis} </section> <aside class="flex flex-col gap-2 min-w-[120px] md:min-w-[240px]"> <div> <span class="text-violet-200"><strong>Director: </strong></span> <span>${information.director}</span> </div> <div> <span class="text-violet-200"><strong>Writer: </strong></span> <span>${information.writer}</span> </div> <div> <span class="text-violet-200"><strong>Studio: </strong></span> <span>${information.studio}</span> </div> </aside> </main> </div> ` })}`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/pages/[movie].astro", void 0);

const $$file = "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/pages/[movie].astro";
const $$url = "/[movie]";

const _movie_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$movie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MoviePoster as $, _movie_ as _, movies as m };
