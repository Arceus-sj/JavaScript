console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("We have the data");
        callback({userEmail:email});
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout( () => {
        callback(["Video1", "Video2", "Video3"]);
    }, 2000);
}

function getVideoDetails(video, callback) {
    setTimeout(() => {
        callback(`${video} Title!`);
    }, 1000);
}

const user = loginUser("cipherJana@gmail.com", 1234567890, user => {
    console.log(user);

    getUserVideos(user.userEmail, videos => {
        console.log(videos);

        getVideoDetails(videos[0], title => {
            console.log(title);
        })

    })

});

// console.log(user);



console.log("Finish");
