const updateCopyrightYear = () => {
    let copyrightYear = document.querySelector('.copyrightYear');
    let year = new Date();
    copyrightYear.textContent = year.getFullYear();
};

module.exports = updateCopyrightYear;