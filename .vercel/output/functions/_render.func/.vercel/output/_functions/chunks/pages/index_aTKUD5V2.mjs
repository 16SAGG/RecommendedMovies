/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_2q5if4aT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './404_bFFhm9xL.mjs';
import { $ as $$MoviePoster, m as movies } from './_movie__5fmrP_PM.mjs';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<header> <h1 class="text-4xl font-bold text-violet-300 text-center">
Recommended
<span class="block text-[74px] leading-[72px]">Movies</span> <span class="block text-xl leading-[48px]">--by SAGG--</span> </h1> </header>`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/components/Title.astro", void 0);

const $$Astro$2 = createAstro();
const $$MovieItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MovieItem;
  const {
    id,
    title,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="fade-in-element hover:scale-105 inline-block transition-all contrast-75 hover:contrast-100 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}> ${renderComponent($$result, "MoviePoster", $$MoviePoster, { "title": title, "image": image, "style": `view-transition-name: movie-move-${id}` })}</a>`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/components/MovieItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ListOfMovie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfMovie;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"> ${movies.map(({ id, title, image }) => {
    return renderTemplate`<li> ${renderComponent($$result, "MovieItem", $$MovieItem, { "id": id, "title": title, "image": image })} </li>`;
  })} </ul>`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/components/ListOfMovie.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recommended Movies by SAGG" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {})} ${maybeRenderHead()}<main class="pb-10 px-6 sm:px-4"> ${renderComponent($$result2, "ListOfMovie", $$ListOfMovie, { "id": true })} </main> ` })}`;
}, "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/pages/index.astro", void 0);

const $$file = "C:/Users/NB 3300/workspace/Recommended Movies/recommended-movies-sagg/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
