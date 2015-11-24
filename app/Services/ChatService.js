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
        return ['https://s3-us-west-1.amazonaws.com/patreon.posts/12709863287529890211.jpg',
                 'https://s3-us-west-1.amazonaws.com/patreon.posts/11464378962196459204.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/10104750268837050043.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/10662800238131123243.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/7848014498817890722.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/446308271092482862.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/2144896575646823284.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/15594870116961159127.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/3606964333439401758.jpg',
        'https://s3-us-west-1.amazonaws.com/patreon.posts/10506545918758145056.jpg'
        ];
    };
    return {
        //getUsers: getUsers,
        getMessages: getMessages,
        getImages: getImages
    }
    
}]);