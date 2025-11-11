module.exports = async (title) => {
    const file = app.vault.getAbstractFileByPath(title);
    return file ? file.path : null;
};
