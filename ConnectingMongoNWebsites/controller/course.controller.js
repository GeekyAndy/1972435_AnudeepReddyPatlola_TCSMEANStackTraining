let CourseModel = require('../model/course.model')
let path = require('path')

let displayIndex = (req,res) => {
    res.sendFile(path.resolve(__dirname +"/../public/index.html"))
}
let addCoursePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname +"/../public/store.html"))
}
let updateCoursePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname +"/../public/update.html"))
}
let deleteCoursePage = (req,res) => {
    res.sendFile(path.resolve(__dirname +"/../public/delete.html"))
}

let addsCourse = (req,res) => {
    let course = new CourseModel({
        _id:req.body.cid,
        courseName:req.body.cname,
        description:req.body.desc,
        amount:req.body.amnt
    })
    course.save((error,data)=>{
        if(!error){
            console.log("Course Inserted!")
        }
        else{
            console.log("Failed Insertion!")
            console.log(error)
        }
    })
    res.sendFile(path.resolve(__dirname +"/../public/store.html"))
}

let updatesCourse = (req,res) => {
    let page = require('../public/display')
    CourseModel.updateOne({_id:req.body.cid},{$set:{amount:parseInt(req.body.amnt)}},(error,data)=>{
        if(!error){
            
            if(data.nModified > 0){
                let page2 = page.sample_page.split("<span></span>")[0]
                let page1 = page.sample_page.split("<span></span>")[1]
                page2 += `<h3 style="margin:auto;text-align:center;">Updates the Cost of a Course</h3>
                Course Updated!
                `
                let fullPage = page2 + page1
                res.send(fullPage)
            }else{
                let page2 = page.sample_page.split("<span></span>")[0]
                let page1 = page.sample_page.split("<span></span>")[1]
                page2 += `<h3 style="margin:auto;text-align:center;">Delete a Course</h3>
                ID doesn't exist. Please try again!
                `
                let fullPage = page2 + page1
                res.send(fullPage)
            }
        }else{
            let page2 = page.sample_page.split("<span></span>")[0]
            let page1 = page.sample_page.split("<span></span>")[1]
            page2 += `<h3 style="margin:auto;text-align:center;">Update the Cost of a Course</h3>
            Error: Updation failure!
            ${error}
            `
            let fullPage = page2 + page1

            res.send(fullPage)
        }
    })
}

let deletesCourse = (req,res) => {
    let page = require('../public/display')
    CourseModel.deleteOne({_id:req.body.cid},(error,data)=>{
        if(!error){

            if(data.deletedCount > 0){
                let page2 = page.sample_page.split("<span></span>")[0]
                let page1 = page.sample_page.split("<span></span>")[1]
                page2 += `<h3 style="margin:auto;text-align:center;">Delete a Course</h3>
                Success! Course Deleted.
                `
                let fullPage = page2 + page1
                res.send(fullPage)
            }else{
                let page2 = page.sample_page.split("<span></span>")[0]
                let page1 = page.sample_page.split("<span></span>")[1]
                page2 += `<h3 style="margin:auto;text-align:center;">Delete a Course</h3>
                ID doesn't exist. Please try again.
                `
                let fullPage = page2 + page1
                res.send(fullPage)
            }
            
        }else{
            let page2 = page.sample_page.split("<span></span>")[0]
            let page1 = page.sample_page.split("<span></span>")[1]
            page2 += `<h3 style="margin:auto;text-align:center;">Delete a Course</h3>
            Failure to delete!
            ${error}
            `
            let fullPage = page2 + page1
            res.send(fullPage)
        }
    })
}

let retrievesCourses = (req,res) => {
    let page = require('../public/display')
    let display_page = page.display_page
    
    CourseModel.find({},(error,data)=>{
        if(!error){
            let display_page2 = display_page.split("<tr></tr>")[0]
            let display_page1 = display_page.split("<tr></tr>")[1]

            let course_rows = []
            for(let [idx,course] of data.entries()){
                let row = `<tr><td>${course['_id']}</td><td>${course['courseName']}</td><td>${course['description']}</td><td>${course['amount']}</td></tr>`
                display_page2 += row
            }
            let fullPage = display_page2 + display_page1
            res.send(fullPage)
        }else{
            res.send(error)
        }
    })
}

module.exports = {
    displayIndex,
    addCoursePage,
    addsCourse,
    retrievesCourses,
    updateCoursePage,
    updatesCourse,
    deleteCoursePage,
    deletesCourse
}