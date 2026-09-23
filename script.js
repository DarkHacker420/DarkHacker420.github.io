const menu=document.getElementById("menu"), nav=document.getElementById("navLinks");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

async function loadRepos(){
  const grid=document.getElementById("repoGrid"), status=document.getElementById("repoStatus");
  try{
    const res=await fetch("https://api.github.com/users/DarkHacker420/repos?per_page=100&sort=updated");
    if(!res.ok) throw new Error("GitHub API unavailable");
    const repos=await res.json();
    status.textContent=`${repos.length} public repositories`;
    grid.innerHTML=repos.map((r,i)=>`
      <article class="repo">
        <div class="repo-top"><span>${String(i+1).padStart(2,"0")}</span><span>${r.language||"PROJECT"}</span></div>
        <h4>${escapeHtml(r.name)}</h4>
        <p>${escapeHtml(r.description||"No repository description provided.")}</p>
        <a href="${r.html_url}" target="_blank" rel="noopener">View on GitHub ↗</a>
      </article>`).join("");
  }catch(e){
    status.textContent="GitHub repositories unavailable right now";
    grid.innerHTML=`<div class="repo" style="grid-column:1/-1">Open the <a href="https://github.com/DarkHacker420?tab=repositories" target="_blank" rel="noopener">GitHub repository list ↗</a> to browse all projects.</div>`;
  }
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
loadRepos();
