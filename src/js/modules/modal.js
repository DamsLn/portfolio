const modal = () => {
    return {
        modalStatus: false,
        switchModalStatus(newStatus) {
            this.modalStatus = newStatus;
        }
    }
}

export default modal;