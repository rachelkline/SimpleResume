
const db = require("../models");


module.exports = (app) => {
    app.post("/api/jobhistory", (req, res) => {
        db.jobHistory.create(req.body).then(response => {
            res.json({ data: response })
        }).catch(err => {
            res.json({ err: err })
        })
    })
    app.post("/api/jobhistory", (req, res) => {
        db.jobHistory.create(req.body).then(response => {
            res.json({ data: response })
        }).catch(err => {
            res.json({ err: err })
        })
    })
}