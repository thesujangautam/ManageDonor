
window.onload = () => {
  const cache = new Caching(KEY);
  const state = new State(cache.loadData());

  const form = document.getElementById("myform");
  if (!form) return;

  loadCache(cache);
  updateCache(cache, state);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "/checkout.html";
  });
};
