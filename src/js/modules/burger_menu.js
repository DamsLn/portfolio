const burgerMenu = () => {
    return {
        status: false,
        switchStatus(newStatus) {
            this.status = newStatus;
        }
    }
}

export default burgerMenu;