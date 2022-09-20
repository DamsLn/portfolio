const burgerMenu = () => {
    return {
        burgerMenuStatus: false,
        switchBurgerMenuStatus(newStatus) {
            this.burgerMenuStatus = newStatus;
        }
    }
}

export default burgerMenu;