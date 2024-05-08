import Dashboard from "./views/Dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const route = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: () => console.log("Viewing Posts") },
        { path: "/settings", view: () => console.log("Viewing Settings") }
    ];

    //test each route for potential match

    const potentialMatch = routes.map(route => {
        return {
            route: route,

            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatch.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: route[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});