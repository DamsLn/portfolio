const router = () => {
    return {
        currentRoute: 'homepage',
        init() {
            this.route = 'homepage';
        },
        setRoute(route) {
            this.currentRoute = route;
        }
    }
}

export default router;