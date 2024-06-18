import{a as f,i as d}from"./assets/vendor-1c96f17f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y="44429769-5cdd23654e6c944851dfe4e78";function h(r,o){return f.defaults.headers=["Access-Control-Allow-Origin"],f({method:"get",url:`https://pixabay.com/api/?key=${y}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${o}`,responseType:"json"})}function g(r){const o=document.querySelector(".gallery");let l="";r.forEach(s=>{l+=`
      <div class="photo-card">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${s.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${s.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${s.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${s.downloads}
          </p>
        </div>
      </div>
    `}),o.insertAdjacentHTML("beforeend",l)}const b=document.querySelector(".gallery"),p=document.getElementById("search-form"),i=document.querySelector(".load-more");let a=1,n=0,u="";async function m(){const{data:r}=await h(u,a);if(n=Math.ceil(r.totalHits/40),r.totalHits===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",timeout:5e3});return}n>1&&(i.style.display="block"),g(r.hits),n>1&&a===n&&(i.style.display="none",d.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,position:"topRight",timeout:5e3}))}p.addEventListener("submit",r=>{var o;if(r.preventDefault(),b.innerHTML="",u=(o=p.elements.searchQuery)==null?void 0:o.value.trim(),a=1,i.style.display="none",u.length===0){d.error({title:"Error",message:"Search field is empty",position:"topRight",timeout:5e3});return}m()});i==null||i.addEventListener("click",()=>{a<n&&(a+=1,m())});
//# sourceMappingURL=commonHelpers.js.map
