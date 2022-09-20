const modal = () => {
    return {
        modalStatus: false,
        switchModalStatus(newStatus) {
            if (newStatus) {
                this.modalStatus = newStatus;
                window.setTimeout(() => {
                    document.getElementById('modal').style.transform = "translateX(0)";
                }, 10);
            } else {
                document.getElementById('modal').style.transform = "translateX(9999px)";
                window.setTimeout(() => {
                    this.modalStatus = newStatus;
                }, 100);
            }
        }
    }
}

export default modal;