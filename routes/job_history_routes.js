
const db = require("../models");


module.exports = (app) => {
    // find one where id matches paramter, if no item is found create job info into database, otherwise update the information already in database.
    app.post("/api/jobhistory", (req, res) => {
        db.jobHistory.findOne({
            where: {
                id: req.user.id
            }
        }).then(item => {
            if (!item) {
                let newJob = req.body;
                newJob.UserId=req.user.id;
                db.jobHistory.create(newJob).then(function (dbJob) {
                    res.json(dbJob)
                    return
                })
            } else {
                db.jobHistory.update(req.body, {
                    where: {
                        id: req.user.id
                    }
                }).then(function (dbJob) {
                    res.json(dbJob)
                })
            }
        })
            
    })
    app.get("/api/jobhistory", (req, res) =>{
        db.jobHistory.findAll({}).then(function(jobHist){
            res.json(jobHist);
               
        });
         
    });
    
}

