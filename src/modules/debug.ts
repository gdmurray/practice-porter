export function debugProps(component: string, props: any) {
    if (process.env.NODE_ENV === "development") {
        console.log(component, props);
    }
}
