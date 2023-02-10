const data = [
    {
        "id": 1,
        "brand": "ford",
        "color": "blue",
        "models": [
            {
                "id": 1,
                "model": "pick-ups",
                "cars": [
                    {
                        "id": 1,
                        "name": "F-150",
                        "smallPhoto": require("./images/ford/pick-ups/f-150.webp"),
                        "bigPhoto": require("./images/ford/pick-ups/f-150-big.jpg"),
                        "year": "2019",
                        "price": "$120.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": 2,
                        "name": "Ranger",
                        "smallPhoto": require("./images/ford/pick-ups/ranger.webp"),
                        "bigPhoto": require("./images/ford/pick-ups/ranger-big.jpg"),
                        "year": "2019",
                        "price": "$85.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    },
                    {
                        "id": 3,
                        "name": "Raptor",
                        "smallPhoto": require("./images/ford/pick-ups/raptor.webp"),
                        "bigPhoto": require("./images/ford/pick-ups/raptor-big.webp"),
                        "year": "2019",
                        "price": "$249.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    }
                ]
            },
            {
                "id": 2,
                "model": "sedan",
                "cars": [
                    {
                        "id": 1,
                        "name": "Fiesta-st",
                        "smallPhoto": require("./images/ford/sedan/fiesta-st.png"),
                        "bigPhoto": require("./images/ford/sedan/fiesta-st-big.webp"),
                        "year": "2019",
                        "price": "$69.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 2,
                        "name": "Fiesta",
                        "smallPhoto": require("./images/ford/sedan/fiesta.webp"),
                        "bigPhoto": require("./images/ford/sedan/fiesta-big.webp"),
                        "year": "2019",
                        "price": "$46.590.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 3,
                        "name": "Fusion",
                        "smallPhoto": require("./images/ford/sedan/fusion.webp"),
                        "bigPhoto": require("./images/ford/sedan/fusion-big.jpg"),
                        "year": "2019",
                        "price": "$105.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 4,
                        "name": "Mustang",
                        "smallPhoto": require("./images/ford/sedan/mustang.webp"),
                        "bigPhoto": require("./images/ford/sedan/mustang-big.webp"),
                        "year": "2019",
                        "price": "$169.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 5,
                        "name": "Shelby-gt350",
                        "smallPhoto": require("./images/ford/sedan/shelby-gt350.webp"),
                        "bigPhoto": require("./images/ford/sedan/shelby-gt350-big.jpg"),
                        "year": "2019",
                        "price": "$254.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            },
            {
                "id": 3,
                "model": "waggons",
                "cars": [
                    {
                        "id": 1,
                        "name": "Ecosport",
                        "smallPhoto": require("./images/ford/waggons/ecosport.webp"),
                        "bigPhoto": require("./images/ford/waggons/ecosport-big.jpg"),
                        "year": "2019",
                        "price": "$61.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 2,
                        "name": "Edge-st",
                        "smallPhoto": require("./images/ford/waggons/edge-st.webp"),
                        "bigPhoto": require("./images/ford/waggons/edge-st-big.jpg"),
                        "year": "2019",
                        "price": "$159.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 3,
                        "name": "Edge",
                        "smallPhoto": require("./images/ford/waggons/edge.webp"),
                        "bigPhoto": require("./images/ford/waggons/edge-big.jpg"),
                        "year": "2019",
                        "price": "$134.990.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 4,
                        "name": "Escape",
                        "smallPhoto": require("./images/ford/waggons/escape.webp"),
                        "bigPhoto": require("./images/ford/waggons/escape-big.jpg"),
                        "year": "2019",
                        "price": "$92.490.000",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "brand": "mazda",
        "color": "grey",
        "models": [
            {
                "id": 1,
                "model": "convertible",
                "cars": [
                    {
                        "id": 1,
                        "name": "Mx5",
                        "smallPhoto": require("./images/mazda/convertible/mx5.png"),
                        "bigPhoto": require("./images/mazda/convertible/mx5-big.png"),
                        "year": "2019",
                        "price": "$117,600,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            },
            {
                "id": 2,
                "model": "sedan",
                "cars": [
                    {
                        "id": 1,
                        "name": "Mazda2",
                        "smallPhoto": require("./images/mazda/sedan/sedan2.png"),
                        "bigPhoto": require("./images/mazda/sedan/sedan2-big.jpg"),
                        "year": "2019",
                        "price": "$51,150,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 2,
                        "name": "Mazda3",
                        "smallPhoto": require("./images/mazda/sedan/sedan3.png"),
                        "bigPhoto": require("./images/mazda/sedan/sedan3-big.jpg"),
                        "year": "2019",
                        "price": "$59,900,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 3,
                        "name": "Mazda3 New",
                        "smallPhoto": require("./images/mazda/sedan/sedan3new.png"),
                        "bigPhoto": require("./images/mazda/sedan/sedan3new-big.jpg"),
                        "year": "2019",
                        "price": "$67,300,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 4,
                        "name": "Mazda6",
                        "smallPhoto": require("./images/mazda/sedan/sedan6.png"),
                        "bigPhoto": require("./images/mazda/sedan/sedan6-big.png"),
                        "year": "2019",
                        "price": "$120,400,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            },
            {
                "id": 3,
                "model": "sport",
                "cars": [
                    {
                        "id": 1,
                        "name": "Sport2",
                        "smallPhoto": require("./images/mazda/sport/sport2.png"),
                        "bigPhoto": require("./images/mazda/sport/sport2-big.jpg"),
                        "year": "2019",
                        "price": "$50,150,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 2,
                        "name": "Sport3",
                        "smallPhoto": require("./images/mazda/sport/sport3.png"),
                        "bigPhoto": require("./images/mazda/sport/sport3-big.png"),
                        "year": "2019",
                        "price": "68,300,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 3,
                        "name": "Sport3 New",
                        "smallPhoto": require("./images/mazda/sport/sport3new.png"),
                        "bigPhoto": require("./images/mazda/sport/sport3new-big.jpg"),
                        "year": "2019",
                        "price": "$102,150,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            },
            {
                "id": 4,
                "model": "sub",
                "cars": [
                    {
                        "id": 1,
                        "name": "Cx3",
                        "smallPhoto": require("./images/mazda/sub/cx3.png"),
                        "bigPhoto": require("./images/mazda/sub/cx3-big.jpg"),
                        "year": "2019",
                        "price": "$71,800,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 2,
                        "name": "Cx5",
                        "smallPhoto": require("./images/mazda/sub/cx5.png"),
                        "bigPhoto": require("./images/mazda/sub/cx5-big.jpg"),
                        "year": "2019",
                        "price": "$96,450,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    },
                    {
                        "id": 3,
                        "name": "Cx9",
                        "smallPhoto": require("./images/mazda/sub/cx9.png"),
                        "bigPhoto": require("./images/mazda/sub/cx9-big.jpg"),
                        "year": "2019",
                        "price": "$153,800,000.00",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
                    }
                ]
            }
        ]
    }
]

export default data