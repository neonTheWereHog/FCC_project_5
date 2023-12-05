const uploadFile = (req, res) => {
    const { originalname, mimetype, size } = req.file
    res.json({
        name: originalname,
        type: mimetype,
        size: size
    })
}

module.exports = { uploadFile }