app.controller("ChatController", ['$scope', '$http', '$timeout', 'ChatService', '$interval', '$uibModal', '$log',
    function ($scope, $http, $timeout, ChatService, $interval, $uibModal, $log) {


        //Initial activities
        $scope.images = ChatService.getImages();  //Geting images from server for users
        $scope.usersImages = [{ image: '', id: '' }]; //Images and users they are assigned to
        $scope.otherMessages = [{ message: '', id: '', me: '' }];//Messages in chat room
        $scope.messages = ChatService.getMessages(); //Getting messages from server, for users to use
        $scope.id = 0;//id of a user whose window is open
        $scope.allMessages = [{ message: '', id: '', me: '' }]; //all messages in private windows
        $scope.visibleList = 'hidden-xs hidden-sm'; //Initial class of all contacts panel
        $scope.visibleRoom = '';//Initial class od Chat Room panel
        $scope.visibleButton = 'glyphicon glyphicon-chevron-down pull-right glifi hidden-md hidden-lg'; //Initial class of button on private chat panel
        $scope.visibleButtonRoom = 'glyphicon glyphicon-chevron-up pull-right glifi hidden-md hidden-lg';//Initial class of button on chat room panel
        $scope.down = true;//Initial value of glifi button on private chat panel
        $scope.downRoom = false; //Initial value of glifi button on chat room panel
        $scope.mediaClass = ''; //Initial value of media class
        $scope.cdate = new Date(); //Getting date time now
        $scope.unreadMessages = [{ id: '', cou: 0 }]; //Unread messages in private windows
        $scope.randomInterval = Math.floor((Math.random() * 10000) + 3000);//Random interval to be used

        //Get users from server
        $http.get("http://jsonplaceholder.typicode.com/users")
        .success(function (response) {
            $scope.users = response;
            //Assign images to users
            for (var i = 0 ; i < $scope.users.length; i++) {
                //Assigning images to users 
                $scope.usersImages.push({ image: $scope.images[i], id: $scope.users[i].id });
                //Setting initial values to unread messages of users
                $scope.unreadMessages.push({ id: $scope.users[i].id, cou:0 })
            }
            //Starting two interval for messages in private window and chat room
            $interval(function () { $scope.getNewMessages();  }, $scope.randomInterval);
            $interval(function () { $scope.getNewMessagesPrivate(); }, $scope.randomInterval);
        });
        
        //Returning image of a user
        $scope.getImage = function (id) {
            $scope.userImg = $scope.usersImages.filter(function (userImg) {
                return userImg.id === id;
            })[0];

            return $scope.userImg.image;
        }

        //Function called in order to return image
        $scope.getImageMessage = function (id, me) {
            if (me === true) {
                $scope.mediaClass = 'text-left';
                $scope.imageSide = 'pull-left';
                $scope.timeClass = 'pull-right';
                $scope.timeClass2 = 'pull-left';
                return 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/s720x720/12027525_506301819529464_3109512832249956597_n.jpg?oh=51c928734dbb19570cd104bb216ed241&oe=56EC1C3B';

            }
            else {
                $scope.imageSide = 'pull-right';
                $scope.mediaClass = 'text-right';
                $scope.timeClass = 'pull-left';
                $scope.timeClass2 = 'pull-right';

                return $scope.getImage(id);
            }
        }

        //Returning name of user
        $scope.getName = function (id, me) {
            if (me === true) {
                return 'you'
            }
            else {
                $scope.user = $scope.users.filter(function (user) {
                    return user.id === id;
                })[0];
                return $scope.user.name;
            }
        }



        //Open/close private windows for messages
        $scope.isCollapsed = true;
        $scope.changeCollapsed = function (id) {
            if (id === 0) {
                $scope.isCollapsed = !$scope.isCollapsed;
                $scope.id = 0;
            }
            else {
                $scope.isCollapsed = false;
           
                $scope.user = $scope.users.filter(function (user) {
                    return user.id === id;
                })[0];
                $scope.userName = $scope.user.name;
                $scope.id = $scope.user.id;

                $scope.msg = $scope.allMessages.filter(function (msg) {
                    return msg.id === id;
                });
                $scope.ind = '';
                for (var i = 0; i < $scope.unreadMessages.length ; i++) {
                    if ($scope.unreadMessages[i].id === id) {
                        $scope.ind = i;
                        break;
                    }
                }
                $scope.unreadMessages[i].cou = 0;

            }
        }
    
        //Save/Send message
        $scope.sendMessage = function () {

            $scope.allMessages.push({ message: $scope.message, id: $scope.id, me: true });
            $scope.msg.push({ message: $scope.message, id: $scope.id, me: true });
            $timeout(function () { $scope.respondMessage(); }, $scope.randomInterval);
            $scope.message = '';

        }

        $scope.respondMessage = function () {
            var lng = $scope.messages.length
            var x = Math.floor((Math.random() * lng) + 1);
            $scope.allMessages.push({ message: $scope.messages[x], id: $scope.id, me: false });
            $scope.msg.push({ message: $scope.messages[x], id: $scope.id, me: false });
            
        }

        //Generating messages for chat room
        //Sending messages in chat room
        $scope.getNewMessages = function () {
            var lng = $scope.messages.length;
            var lng2 = $scope.users.length;
            var x = Math.floor((Math.random() * lng) + 1);
            var y = Math.floor((Math.random() * lng2) + 1);
            $scope.otherMessages.push({ message: $scope.messages[x], id: y, me: false });
        };

        //Generating messages for private window /unread
        $scope.getNewMessagesPrivate = function () {

            var lng = $scope.messages.length;
            var lng2 = $scope.users.length;
            var x = Math.floor((Math.random() * lng) + 1);
            var y = Math.floor((Math.random() * lng2) + 1);
            $scope.allMessages.push({ message: $scope.messages[x], id: y, me: false });
            $scope.ind='';
            for (var i = 0; i < $scope.unreadMessages.length ; i++) {
                if ($scope.unreadMessages[i].id === y) {
                    $scope.ind = i;
                    break;
                }
            }
            var z = $scope.unreadMessages[$scope.ind].cou + 1;
            $scope.unreadMessages[$scope.ind].cou = z;

        };
        //Getting count of unread messages for each user
        $scope.getUnreadCount =function(id){
            $scope.um = $scope.unreadMessages.filter(function (um) {
                return um.id === id;
            })[0].cou;
     
            return $scope.um;
        }

        //My message sent in chat room
        $scope.sendMessageRoom = function () {
            $scope.otherMessages.push({ message: $scope.message2, id: $scope.id, me: true });
            $scope.message2 = '';
        };


        //Open modal to show user data
        $scope.openModal = function (size,userId) {
            $scope.user = $scope.users.filter(function (user) {
                return user.id === userId;
            })[0];
            $scope.img = $scope.getImage(userId);

            $scope.modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/Views/user.html',
                controller: 'UserController',
                size: size,
                resolve: {
                    user: function () {
                        return $scope.user;
                    },
                    img: function () {
                        return $scope.img;
                    }
                }
            });

        };
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
  

        //Show contacts panel on small or xsmall display
        $scope.changeVisible = function () {
            $scope.down = !$scope.down;
            if ($scope.down === false) {
                $scope.visibleList = '';
                $scope.visibleButton = 'glyphicon glyphicon-chevron-up pull-right glifi hidden-md hidden-lg';
            } else {
                $scope.visibleList = 'hidden-xs hidden-sm'; //initial class of all contacts panel
                $scope.visibleButton = 'glyphicon glyphicon-chevron-down pull-right glifi hidden-md hidden-lg';

            }
        }

        $scope.changeVisibleRoom = function () {
            $scope.downRoom = !$scope.downRoom;
            if ($scope.downRoom === false) {
                $scope.visibleRoom = '';
                $scope.visibleButtonRoom = 'glyphicon glyphicon-chevron-up pull-right glifi hidden-md hidden-lg';

            } else{
                $scope.visibleRoom = 'hidden-xs hidden-sm'; //initial class of all contacts panel
                $scope.visibleButtonRoom = 'glyphicon glyphicon-chevron-down pull-right glifi hidden-md hidden-lg';

            }
        }

    }]);