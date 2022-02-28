const favoriteSchema = new Schema ({
    //user is what the user itself does ie: login information
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //campsites being passed into db
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsites'
    }]
})

modules.exports = Favorite;