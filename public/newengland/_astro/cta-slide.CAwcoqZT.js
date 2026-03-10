import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.AYgMQiL5.js";import{u as g,a as d,m as n}from"./use-transform.CQw50HHy.js";/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(...t)=>t.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:a,iconNode:p,...l},x)=>i.createElement("svg",{ref:x,...v,width:e,height:e,stroke:t,strokeWidth:s?Number(o)*24/Number(e):o,className:u("lucide",c),...!a&&!j(l)&&{"aria-hidden":"true"},...l},[...p.map(([h,f])=>i.createElement(h,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>{const o=i.forwardRef(({className:s,...c},a)=>i.createElement(b,{ref:a,iconNode:e,className:u(`lucide-${w(m(t))}`,`lucide-${t}`,s),...c}));return o.displayName=m(t),o};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],C=k("arrow-up-right",N);function I(){const t=i.useRef(null),{scrollYProgress:e}=g({target:t,offset:["start end","end start"]}),o=d(e,[0,1],["-10%","10%"]),s=d(e,[0,1],["5%","-5%"]);return r.jsxs("section",{ref:t,className:"relative w-full min-h-screen md:aspect-video md:min-h-0 flex items-center justify-center overflow-hidden",children:[r.jsxs(n.div,{style:{y:o},className:"absolute inset-0 -top-32 -bottom-32",children:[r.jsx("img",{src:"/resort/Pharma_Lifestyle_0001.jpg",alt:"Vermont lifestyle",className:"absolute inset-0 h-full w-full object-cover object-[75%_50%] md:object-center"}),r.jsx("div",{className:"absolute inset-0 bg-background/85"})]}),r.jsxs(n.div,{style:{y:s},className:"relative z-10 max-w-2xl mx-auto text-center px-8 md:px-16 lg:px-24 py-32",children:[r.jsx(n.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"text-xs tracking-[0.4em] uppercase text-muted-foreground mb-16",children:"Get Started"}),r.jsx(n.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,delay:.15},viewport:{once:!0},className:"font-serif text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight",children:"Let's tell your story."}),r.jsx(n.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,delay:.2},viewport:{once:!0},className:"text-muted-foreground text-base max-w-md mx-auto mb-20 leading-relaxed",children:"Any production company can show you what a place looks like. We work to show you why it matters. Booking now for Spring 2026. Limited seasonal availability."}),r.jsxs(n.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,delay:.3},viewport:{once:!0},className:"space-y-12",children:[r.jsx("div",{children:r.jsx("p",{className:"text-muted-foreground text-sm",children:"studio@coreyhendrickson.com"})}),r.jsx("div",{className:"w-12 h-px bg-foreground/20 mx-auto"}),r.jsxs("a",{href:"https://coreyhendrickson.com",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors",children:[r.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",children:"coreyhendrickson.com"}),r.jsx(C,{className:"w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]})]})]})}export{I as CtaSlide};
