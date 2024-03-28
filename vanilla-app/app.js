import { Wrapper, AnchorWrapper } from './wrapper.js';
// const app = document.getElementById("app");
// console.log('app', app);
// window.run = () => app.innerText="Fun!";
// app.innerHTML = '<button onclick="run()">Load</button>';

const get = (model, domain, done) => {
  fetch(`https://jsonplaceholder.typicode.com/${domain}`)
    .then(response => response.json())
    .then(json => {
      model[domain] = json;
      done();
    });
};

const app = document.getElementById("app");

const run = (model) => get(model, "users", () =>
  get(model, "posts",
    () => {
      model.users.forEach(user => model.userIdx[user.id] = user);
      app.innerText = '';
      model.posts.forEach(post =>
        app.appendChild(renderPost(post, model.userIdx[post.userId])));
    }));

app.appendChild(Wrapper.generate("button", "Load").click(() => run({
  userIdx: {}
})).element);


const renderPost = (post, user) => {
  const bodyDiv = Wrapper.generate("div", "", false)
    .createChild("p", post.body)
    .appendChild(Wrapper.generate("p", user.username).addClass("tooltip")
      .appendChild(Wrapper.generate("span", `${user.name} `)
        .appendChild(AnchorWrapper.generate(`mailto:${user.email}`, user.email))
        .createChild("br", "")
        .appendChild(AnchorWrapper.generate(
          `https://maps.google.com?q=${user.address.geo.lat}, ${user.address.geo.lng}`,
          "🌎 Locate"))
        .addClass("tooltiptext")));
  return Wrapper.generate("div", "")
    .addClass("post")
    .appendChild(Wrapper.generate("h1", `${user.username} &mdash; ${post.title}`)
      .showSelectable()
      .click(() => bodyDiv.toggleDisplay()))
    .appendChild(bodyDiv)
    .element;
};