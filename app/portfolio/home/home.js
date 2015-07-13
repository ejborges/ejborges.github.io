var module = angular.module('ejborges.app');

module.controller(
    'homeCtrl',
    [
        '$scope',
        function($scope){

            $scope.resume = {
                //about: "Obtain a Computer Science and Engineering cooperative education position to continue to" +
                //" improve my professional skills and make a positive impact wherever I go.",
                about: "",
                education: {
                    university: {
                        name: "The University of Toledo",
                        location: "Toledo, Ohio"
                    },
                    major: "Bachelor of Science, Computer Science and Engineering",
                    date: "August 2012 - Present",
                    graduationDate: {
                        text: "Anticipated Graduation Date: Fall 2016",
                        value: new Date(2016, 12, 16, 0, 0, 0).getMilliseconds()
                    },
                    gpa: 3.278
                },
                awards: {
                    aavc: "2014 Autonomous Aerial Vehicle Competition 3rd Place",
                    osgc: "Ohio Space Grant Consortium CC-STARS Scholarship",
                    lccc: "Lorain County Community College Foundation Computer Science & Engineering Scholarship",
                    nhs: "National Honors Society",
                    aom: "State Board of Education Award of Merit"
                },
                skills: {
                    ae: {
                        name: "Adobe After Effects",
                        icons: ["assets/img/icons/ae.png"]
                    },
                    ps: {
                        name: "Adobe Photoshop",
                        icons: ["assets/img/icons/ps.png"]
                    },
                    pr: {
                        name: "Adobe Premiere Pro",
                        icons: ["assets/img/icons/pr.png"]
                    },
                    and: {
                        name: "Android (Java & Eclipse)",
                        icons: ["assets/img/icons/and.png"]
                    },
                    ang: {
                        name: "AngularJS",
                        icons: ["assets/img/icons/ang.png"]
                    },
                    app: {
                        name: "Apple OS X",
                        icons: ["assets/img/icons/app.png"]
                    },
                    ard: {
                        name: "Arduino",
                        icons: ["assets/img/icons/ard.png"]
                    },
                    ass: {
                        name: "Assembly (x86)",
                        icons: ["assets/img/icons/ass.png"]
                    },
                    max: {
                        name: "Autodesk 3ds Max",
                        icons: ["assets/img/icons/max.png"]
                    },
                    inv: {
                        name: "Autodesk Inventor",
                        icons: ["assets/img/icons/inv.png"]
                    },
                    cpp: {
                        name: "C++ & Visual Studio",
                        icons: ["assets/img/icons/cpp.png", "assets/img/icons/vs.png"]
                    },
                    css: {
                        name: "CSS",
                        icons: ["assets/img/icons/css.png"]
                    },
                    git: {
                        name: "Git",
                        icons: ["assets/img/icons/git.png"]
                    },
                    html: {
                        name: "HTML",
                        icons: ["assets/img/icons/html.png"]
                    },
                    java: {
                        name: "Java & Eclipse",
                        icons: ["assets/img/icons/java.png", "assets/img/icons/ecl.png"]
                    },
                    js: {
                        name: "JavaScript & WebStorm",
                        icons: ["assets/img/icons/js.png", "assets/img/icons/ws.png"]
                    },
                    lin: {
                        name: "Linux & Ubuntu",
                        icons: ["assets/img/icons/ub.png"]
                    },
                    ex: {
                        name: "Microsoft Excel",
                        icons: ["assets/img/icons/ex.png"]
                    },
                    pp: {
                        name: "Microsoft Power Point",
                        icons: ["assets/img/icons/pp.png"]
                    },
                    word: {
                        name: "Microsoft Word",
                        icons: ["assets/img/icons/word.png"]
                    },
                    win: {
                        name: "Microsoft Windows 7/8",
                        icons: ["assets/img/icons/win7.png", "assets/img/icons/win8.png"]
                    },
                    node: {
                        name: "NodeJS",
                        icons: ["assets/img/icons/node.png"]
                    },
                    pspice: {
                        name: "OrCAD PSPICE",
                        icons: ["assets/img/icons/pspice.jpg"]
                    },
                    py: {
                        name: "Python",
                        icons: ["assets/img/icons/py.png"]
                    }
                }
            };

            $scope.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }

        }
    ]
);