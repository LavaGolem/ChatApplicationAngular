app.factory('ChatService', ['$http', function ($http) {

   /* var getUsers = function () {
        $http.get("http://jsonplaceholder.typicode.com/users")
        .success(function (response) {
            return response;
        });
    };
        
  /*  var getUsers = function () {
        return $http.get('http://jsonplaceholder.typicode.com/users')
            .success(function (data, status, headers, config) {
                if (status == 200) {
                    return data;
                }

                return data;
            }).error(function (data, status, headers, config) {
                return result;
            });
    };
    */
    
    var getMessages = function () {
        return ["Don't Panic.", "Would it save you a lot of time if I just gave up and went mad now?", "The ships hung in the sky in much the same way that bricks don't.",
        "If there's anything more important than my ego around, I want it caught and shot now.", "Ford... you're turning into a penguin. Stop it.", "So long, and thanks for all the fish.",
        "I think you ought to know I'm feeling very depressed.", "42", "So once you do know what the question actually is, you'll know what the answer means.",
        "Very deep. You should send that in to the Reader's Digest. They've got a page for people like you.", "Mostly harmless", "Fifteen years was a long time to be stranded anywhere, particularly somewhere as mind-boggingly dull as Earth."
        , "He's spending a year dead for tax reasons."];
    };
    var getImages = function () {
        return ['http://static6.businessinsider.com/image/558d9fd36da811040de177dd-1200-900/harry-potter-daniel-radcliffe-hogwarts-wizard-teenager-teen-5.jpg',
                 'https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg',
        'http://cdn.collider.com/wp-content/uploads/2015/07/ron-weasley.jpg',
        'http://vignette4.wikia.nocookie.net/harrypotter/images/6/6d/Luna-Lovegood-Wallpaper-luna-lovegood-25518113-1024-768.jpg/revision/latest?cb=20121028020840',
        'http://booklikes.com/upload/post/e/7/e7655f868371049aa621fc5ae6834330.jpg',
        'http://images.gamenguide.com/data/images/full/19524/tom-felton-as-draco-malfoy-from-harry-potter.jpg?w=720',
        'http://data.whicdn.com/images/63543108/large.png',
        'https://pbs.twimg.com/profile_images/476841653710626816/kID2ZqOd.jpeg',
        'http://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/40/b402a776-942a-11e3-b3c3-0017a43b2370/52fbe468ec796.image.jpg',
        'http://vignette1.wikia.nocookie.net/harrypotter/images/d/da/AngieJ.jpg/revision/latest?cb=20080829182719'
        ];
    };
    return {
        //getUsers: getUsers,
        getMessages: getMessages,
        getImages: getImages
    }
    
}]);