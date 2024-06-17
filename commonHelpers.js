import{a as f,i as n}from"./assets/vendor-1c96f17f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function y(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=y(t);fetch(t.href,r)}})();const h="44429769-5cdd23654e6c944851dfe4e78";function b(o,e){return f.defaults.headers=["Access-Control-Allow-Origin"],f({method:"get",url:`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${e}`,responseType:"json"})}const p=document.querySelector(".gallery"),d=document.getElementById("search-form"),i=document.querySelector(".load-more");let s=1,l=0,c="",u="";function g(){b(c,s).then(({data:o})=>{if(l=Math.ceil(o.totalHits/40),o.totalHits===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",timeout:15e3});return}l>1&&(i.style.display="block");for(const e of o.hits)u+=`
        <div class="photo-card">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${e.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${e.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${e.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${e.downloads}
            </p>
          </div>
        </div>
      `;p.innerHTML=u,s===l&&(i.style.display="none",n.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,position:"topRight",timeout:15e3}))}).catch(()=>{n.error({title:"Error",message:"Something went wrong",position:"topRight",timeout:15e3})})}d.addEventListener("submit",o=>{var e;if(o.preventDefault(),p.innerHTML="",u="",c=(e=d.elements.searchQuery)==null?void 0:e.value,s=1,i.style.display="none",c.length===0){n.error({title:"Error",message:"Search field is empty",position:"topRight",timeout:15e3});return}g()});i==null||i.addEventListener("click",()=>{s<l&&(s+=1,g())});
//# sourceMappingURL=commonHelpers.js.map
