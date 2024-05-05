import "@fontsource/alice";
import "./global.css";

// @ts-ignore
export const onRouteUpdate = ({ location }) => {
    // Check if there's a hash in the URL
    if (location.hash) {
        setTimeout(() => {
            const id = location.hash.replace("#", "");
            // @ts-ignore
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
            }
        }, 50); // You might need to increase this delay depending on your site
    }
};
