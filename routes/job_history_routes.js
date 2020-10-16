
const db = require("../models");


module.exports = (app) => {
    // find one where id matches paramter, if no item is found create job info into database, otherwise update the information already in database.
    app.post("/api/jobhistory", (req, res) => {
        db.jobHistory.findOne({
            where: {
                id: 1
            }
        }).then (item =>{
            if(!item) {
                db.jobHistory.create(req.body).then(function(dbJob){
                    res.json(dbJob)
                    return
                })
            } else {
                db.jobHistory.update(req.body, {
                    where: {
                        id: 1
                    }
                }).then(function(dbJob){
                    res.json(dbJob)
                })
            }
        })
            // jobOneTitle: req.body.jobOneTitle,
            // employerOne: req.body.employerOne,
            // employmentOneDates: req.body.employmentOneDates,
            // responsibilitiesOne: req.body.responsibilitiesOne,
            // jobTwoTitle: req.body.jobTwoTitle,
            // employerTwo: req.body.employerTwo,
            // employmentTwoDates: req.body.employmentTwoDates,
            // responsibilitiesTwo: req.body.responsibilitiesTwo,
            
    })
    
}

