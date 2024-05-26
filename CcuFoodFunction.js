var test = {
    name: "",
    place: "",
    URL: "",
    IMG: "",
    time: {
        startTimeAm: 0,
        endTimeAm: 0,
        startTimePm: 0,
        endTimePm: 0,
        Mon: false,
        Tue: false,
        Wed: false,
        Thur: false,
        Fri: false,
        Sat: false,
        Sun: false,
    },
    address: {
        big: false,
        smlle: false,
        mid: false,
        school: false,
        ming: false,
    },
    tag: {
        rice: false,
        noodle: false,
        hamberger: false,
        love: false, //滷味
        SaltWaterChicken: false, //鹹水雞
        curry: false, //咖哩
        fried: false, //炸物
        brunch: false, //早午餐
        dumpling: false, //餃類
        salad: false, //沙拉
        hotpot: false, //火鍋
        korean: false, //韓式
        Taco: false, //塔可
        ice: false, //冰
        dessert: false, //甜點
        drink: false, //飲料
        bread: false, //麵包
        gruel: false, //粥
        wine: false, //酒
    },
};
var foodArray = [
    {
        name: "McDonald's",
        place: "621嘉義縣民雄鄉建國路一段18號        ",
        URL: "https://maps.app.goo.gl/5b6PvnY4dNad6B2h8",
        IMG: "",
        time: {
            startTimeAm: 0,
            endTimeAm: 24,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: false,
            school: false,
            ming: true,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: true,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "不吃不可鹽水雞",
        place: "621嘉義縣民雄鄉神農路135號        ",
        URL: "https://maps.app.goo.gl/C6VrW7E7mdDc69tY8        ",
        IMG: "",
        time: {
            startTimeAm: 0,
            endTimeAm: 24,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "Nice Nine 雙醬咖哩",
        place: "621嘉義縣民雄鄉神農路135號        ",
        URL: "https://maps.app.goo.gl/C6VrW7E7mdDc69tY8        ",
        IMG: "",
        time: {
            startTimeAm: 1200,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2100,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: true, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "銘星小吃",
        place: "621嘉義縣民雄鄉",
        URL: "https://maps.app.goo.gl/wFHTCxsqawe2QFJ16",
        IMG: "",
        time: {
            startTimeAm: 1200,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2100,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "渝香園簡餐(便當)",
        place: "621嘉義縣民雄鄉神農路141號 ",
        URL: "621嘉義縣民雄鄉神農路141號",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1630,
            endTimePm: 2000,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "六妹的店",
        place: "621嘉義縣民雄鄉神農路135號",
        URL: "https://maps.app.goo.gl/4NXDG92bzgGsV6a38",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2000,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "蜂炸雞 超級大雞排",
        place: "621嘉義縣民雄鄉神農路133號",
        URL: "https://maps.app.goo.gl/EPDHk9SntAv5BfYXA",
        IMG: "",
        time: {
            startTimeAm: 1630,
            endTimeAm: 130,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "品味香快炒",
        place: "621嘉義縣民雄鄉神農路131號",
        URL: "https://maps.app.goo.gl/aWEa2hG34jSmdEj28",
        IMG: "",
        time: {
            startTimeAm: 1200,
            endTimeAm: 1350,
            startTimePm: 1700,
            endTimePm: 2020,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: true,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "亞米美食",
        place: "621嘉義縣民雄鄉神農路129號",
        URL: "https://maps.app.goo.gl/tu5Refx8tLQ8nxDb7",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1300,
            startTimePm: 1700,
            endTimePm: 1900,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "晨間廚房早午餐",
        place: "621嘉義縣民雄鄉神農路129之3號 ",
        URL: "https://maps.app.goo.gl/abJRskt1RjFnSu2D9",
        IMG: "",
        time: {
            startTimeAm: 630,
            endTimeAm: 1430,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "地中海美食",
        place: "621嘉義縣民雄鄉神農路",
        URL: "https://maps.app.goo.gl/zeEPp5y6GgFncaHD6     ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1330,
            startTimePm: 1700,
            endTimePm: 1930,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "288鹹水雞",
        place: "621嘉義縣民雄鄉神農路91號",
        URL: "https://maps.app.goo.gl/dMrLzFc1GsPWoNps9   ",
        IMG: "",
        time: {
            startTimeAm: 0,
            endTimeAm: 24,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "八方雲集 嘉義中大店",
        place: "621嘉義縣民雄鄉神農路89號",
        URL: "https://maps.app.goo.gl/nwXuQCTc8Kdko4kB8    ",
        IMG: "",
        time: {
            startTimeAm: 0,
            endTimeAm: 24,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: true, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "蔬芙suitfoodsalad（中正店）",
        place: "621嘉義縣民雄鄉神農路83號 ",
        URL: "https://maps.app.goo.gl/YMgumadePB4dMq2b8    ",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1330,
            startTimePm: 1730,
            endTimePm: 1930,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: true, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "米六里",
        place: "621嘉義縣民雄鄉神農路75號",
        URL: "https://maps.app.goo.gl/ZYXrKyy29wb4kCVC8",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1330,
            startTimePm: 1730,
            endTimePm: 2000,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: true, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "牛筋伯爵",
        place: "621嘉義縣民雄鄉神農路73號",
        URL: "https://maps.app.goo.gl/uoqmaG84kMaZb8HZ9    ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2100,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "ㄎㄎ韓食(ㅋㅋ한식)",
        place: "621嘉義縣民雄鄉神農路71號",
        URL: "https://maps.app.goo.gl/vxXgN5XQg5o6qZ3q6",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2000,
            Mon: false,
            Tue: true,
            Wed: false,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: true, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "食凡",
        place: "621嘉義縣民雄鄉神農路58號",
        URL: "https://maps.app.goo.gl/8Bf57awEKtqhEc1VA   ",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 2000,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: true, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: true, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "艾絲ice tea–雪花冰",
        place: "621嘉義縣民雄鄉神農路100號",
        URL: "https://maps.app.goo.gl/us5BYZPrJ3BWegjx6    ",
        IMG: "",
        time: {
            startTimeAm: 1000,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: true, //冰
            dessert: true, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "紅樓極麵",
        place: "621嘉義縣民雄鄉神農路621號",
        URL: "https://maps.app.goo.gl/g1rnzsSzeaNJxdKQA    ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 2130,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "丼飽處",
        place: "621嘉義縣民雄鄉神農路148-1號",
        URL: "https://maps.app.goo.gl/vjmGMapw7oYFq1nG7    ",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1330,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: true, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "黃媽媽的店",
        place: "621嘉義縣民雄鄉神農路 ",
        URL: "https://maps.app.goo.gl/wg9sb9fUeFF7UN1M6       ",
        IMG: "",
        time: {
            startTimeAm: 1000,
            endTimeAm: 1400,
            startTimePm: 1800,
            endTimePm: 2100,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "阿梅簡餐便當",
        place: "621嘉義縣民雄鄉神農路 ",
        URL: "https://maps.app.goo.gl/d2ybA4UW8kAnztrS6     ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1630,
            endTimePm: 2000,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "歐滋雞蛋糕",
        place: "621嘉義縣民雄鄉神農路93號",
        URL: "https://maps.app.goo.gl/kFism1AKzaL37RQ47",
        IMG: "",
        time: {
            startTimeAm: 1630,
            endTimeAm: 2000,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "夯極味",
        place: "621嘉義縣民雄鄉神農一街10號附5號 ",
        URL: "https://maps.app.goo.gl/UpofVacxce6TdWp89 ",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 2230,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "小羚火鍋",
        place: "621嘉義縣民雄鄉神農一街139號 ",
        URL: "https://maps.app.goo.gl/KW19dctpaY73VRfa6      ",
        IMG: "",
        time: {
            startTimeAm: 1730,
            endTimeAm: 2130,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "惡搞食代",
        place: "621嘉義縣民雄鄉神農一街12號附3號 ",
        URL: "https://maps.app.goo.gl/GmWScPRr5SVt6LYm8    ",
        IMG: "",
        time: {
            startTimeAm: 1730,
            endTimeAm: 2230,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "別西卜",
        place: "621嘉義縣民雄鄉公園一街40號",
        URL: "https://maps.app.goo.gl/fGzaqk1PN54Xzah98",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 2000,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: true, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "巧味果汁",
        place: "621嘉義縣民雄鄉Unnamed Road",
        URL: "https://maps.app.goo.gl/mYBvxSPoZQYjTuQN9",
        IMG: "",
        time: {
            startTimeAm: 1600,
            endTimeAm: 2200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "翅炸鍋",
        place: "621嘉義縣民雄鄉神農路一街",
        URL: "https://maps.app.goo.gl/LKhd295jMLfb3ppw5",
        IMG: "",
        time: {
            startTimeAm: 1630,
            endTimeAm: 2200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "富成屋拉麵",
        place: "621嘉義縣民雄鄉神農路 ",
        URL: "https://maps.app.goo.gl/pfnKEBPHoikoFQH89",
        IMG: "",
        time: {
            startTimeAm: 1630,
            endTimeAm: 2230,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "一番食堂",
        place: "621嘉義縣民雄鄉神農路神農一街",
        URL: "https://maps.app.goo.gl/CMn26zniKrNsVidn7        ",
        IMG: "",
        time: {
            startTimeAm: 1620,
            endTimeAm: 2300,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "豐正食堂",
        place: "621嘉義縣民雄鄉神農一街5-1號",
        URL: "https://maps.app.goo.gl/2MJwPh6k3tCvprHe8    ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1320,
            startTimePm: 1700,
            endTimePm: 1940,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "傻師傅神農店",
        place: "621嘉義縣民雄鄉神農一街9號1樓號",
        URL: "https://maps.app.goo.gl/4mRyQVL7gYecU14T8",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: true, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "烘焙工房",
        place: "621嘉義縣民雄鄉神農一街11號",
        URL: "https://maps.app.goo.gl/dvP2FZezHzwMGh2m6   ",
        IMG: "",
        time: {
            startTimeAm: 1600,
            endTimeAm: 2000,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: true, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "十畝田滷味",
        place: "621嘉義縣民雄鄉神農路93號",
        URL: "https://maps.app.goo.gl/JCwgscmURGv4YZ4C7    ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 2000,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: true, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "王仔滷味",
        place: "621嘉義縣民雄鄉神農路",
        URL: "https://maps.app.goo.gl/QytC1sHcUBSCN3Zm7",
        IMG: "",
        time: {
            startTimeAm: 1730,
            endTimeAm: 30,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: true, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "Little India 小印度清真館",
        place: "621嘉義縣民雄鄉神農一街",
        URL: "https://maps.app.goo.gl/9khqQzEdT1MtNs8t5",
        IMG: "",
        time: {
            startTimeAm: 0,
            endTimeAm: 24,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "榕樹下古早味香菇肉羹麵",
        place: "621嘉義縣民雄鄉神農一街15號1樓",
        URL: "https://maps.app.goo.gl/Esuk4NQA48SAWDV98 ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1330,
            startTimePm: 1600,
            endTimePm: 2000,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "鹿初Brunch",
        place: "621嘉義縣民雄鄉神農一街19號",
        URL: "https://maps.app.goo.gl/ooxyELiyFwJw3UFW9 ",
        IMG: "",
        time: {
            startTimeAm: 700,
            endTimeAm: 1400,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "中正雞場",
        place: "621嘉義縣民雄鄉神農路",
        URL: "https://maps.app.goo.gl/MoVgqunvT7YJpZgd6 ",
        IMG: "",
        time: {
            startTimeAm: 1800,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "魯都香加熱式滷味",
        place: "621嘉義縣民雄鄉神農路",
        URL: "https://maps.app.goo.gl/r6iow6Mn6vDnVsVr7",
        IMG: "",
        time: {
            startTimeAm: 1600,
            endTimeAm: 2330,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: false,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: true, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "阿湯哥脆皮湯包",
        place: "148附1號, 神農路民雄鄉嘉義縣621 ",
        URL: "https://maps.app.goo.gl/8j5wdETV5XLPbK7T7",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: true, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "錢伯鹽水雞",
        place: "148附1號, No. 135號神農路民雄鄉嘉義縣621",
        URL: "https://maps.app.goo.gl/womnx12io2nVpYrm9 ",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 0,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "七里香",
        place: "621嘉義縣民雄鄉神農路",
        URL: "https://maps.app.goo.gl/n2mmMQe1mvCbbD827 ",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "洪媽媽泰式簡餐",
        place: "621嘉義縣民雄鄉神農路186巷2之8號",
        URL: "https://maps.app.goo.gl/hPJNZ8y8qce2DjiGA ",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2030,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "豪記滷味",
        place: "621嘉義縣民雄鄉神農一街5號",
        URL: "https://maps.app.goo.gl/G35t7sfX3A13Dytt9",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: true, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "SmileJoyce微微笑手作坊",
        place: "621嘉義縣民雄鄉神農路186巷有go滷對面",
        URL: "https://maps.app.goo.gl/o62E7PGyZHhJp47f7 ",
        IMG: "",
        time: {
            startTimeAm: 1800,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: true, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "農閒時刻的粥",
        place: "621嘉義縣民雄鄉神農路2號",
        URL: "https://maps.app.goo.gl/uKMRq5kJi7ubFVcZ9",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1430,
            startTimePm: 1700,
            endTimePm: 2300,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: true, //粥
            wine: false, //酒
        },
    },
    {
        name: "蘭姐手工水餃",
        place: "621嘉義縣民雄鄉神農路186巷2之8號",
        URL: "https://maps.app.goo.gl/AGamxVb6HTL4buPS8",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1400,
            startTimePm: 1630,
            endTimePm: 2200,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: true, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "小豬很忙",
        place: "621嘉義縣民雄鄉神農一街139-2號 ",
        URL: "https://maps.app.goo.gl/VdR2Em394XGGqJ8R9",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 2200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: true, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "i嘎嗶複合式餐廳",
        place: "621嘉義縣民雄鄉裕農一街5號",
        URL: "https://maps.app.goo.gl/CxbyuVL2u22Gegit8",
        IMG: "",
        time: {
            startTimeAm: 1000,
            endTimeAm: 2030,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: true, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: true, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: true, //飲料
            bread: true, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "橙堡早午餐",
        place: "621嘉義縣民雄鄉裕農一街七號",
        URL: "https://maps.app.goo.gl/YuCueYCtWbpxnKdb8",
        IMG: "",
        time: {
            startTimeAm: 700,
            endTimeAm: 1400,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "Simple Fit 簡單瘦．健身餐",
        place: "621嘉義縣民雄鄉裕農一街9號",
        URL: "https://maps.app.goo.gl/bRZTFp3G3EdamKDM7",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1330,
            startTimePm: 1700,
            endTimePm: 1930,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: true, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "Yes厚切雞排",
        place: "621嘉義縣民雄鄉裕農一街19 號",
        URL: "https://maps.app.goo.gl/b3QU9HJAN1PRh3aYA",
        IMG: "",
        time: {
            startTimeAm: 1200,
            endTimeAm: 2030,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "曉品屋亞歐式午宵餐飲",
        place: "621嘉義縣民雄鄉裕農一街21號",
        URL: "https://maps.app.goo.gl/osSTeWuP7sQU8p8h8",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1355,
            startTimePm: 1930,
            endTimePm: 2300,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "槍與玫瑰",
        place: "621嘉義縣民雄鄉裕農一街23號",
        URL: "https://maps.app.goo.gl/Gew5hiopwh4gSGat7",
        IMG: "",
        time: {
            startTimeAm: 2130,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: true, //酒
        },
    },
    {
        name: "久聚",
        place: "621嘉義縣民雄鄉裕農一街11號 ",
        URL: "https://maps.app.goo.gl/WMJhJpicdKLNficL7",
        IMG: "",
        time: {
            startTimeAm: 2200,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: true, //酒
        },
    },
    {
        name: "魔王狂爆雞排",
        place: "621嘉義縣民雄鄉裕農路181號附1號",
        URL: "https://maps.app.goo.gl/gWVU25do6eQokUiU7",
        IMG: "",
        time: {
            startTimeAm: 2000,
            endTimeAm: 130,
            startTimePm: 0,
            endTimePm: 0,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: false,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "8鍋",
        place: "621嘉義縣民雄鄉裕農路183號",
        URL: "https://maps.app.goo.gl/fVAptKWPdxXyufNJ6  ",
        IMG: "",
        time: {
            startTimeAm: 1100,
            endTimeAm: 1430,
            startTimePm: 1700,
            endTimePm: 2230,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "即食樂",
        place: "621嘉義縣民雄鄉神農路135號        ",
        URL: "https://maps.app.goo.gl/Ud4Wq4hL5zY5jnkf6",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1430,
            startTimePm: 1700,
            endTimePm: 2030,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "A-bao 裕農店",
        place: "621嘉義縣民雄鄉裕農路189號",
        URL: "https://maps.app.goo.gl/wWT8d2uJdFtiHD439",
        IMG: "",
        time: {
            startTimeAm: 630,
            endTimeAm: 1930,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "花圓巧芋",
        place: "621嘉義縣民雄鄉裕農路193號",
        URL: "https://maps.app.goo.gl/dD42jHorHfD613pR8",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 2230,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: true, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "三米藍",
        place: "621嘉義縣民雄鄉裕農路195號",
        URL: "https://maps.app.goo.gl/LQChXBdpr8zdcCFd8",
        IMG: "",
        time: {
            startTimeAm: 1200,
            endTimeAm: 2030,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: false,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: true,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "麥香堡",
        place: "621嘉義縣民雄鄉大學路一段423號",
        URL: "https://maps.app.goo.gl/YRtNXUY8gCWQVFYN6",
        IMG: "",
        time: {
            startTimeAm: 600,
            endTimeAm: 1400,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: false,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "百田中西式早午餐",
        place: "621嘉義縣民雄鄉大學路一段427號",
        URL: "https://maps.app.goo.gl/2ZqTbeyJBpmqziVS8",
        IMG: "",
        time: {
            startTimeAm: 700,
            endTimeAm: 1430,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: false,
            smlle: true,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "鍋道一號",
        place: "621嘉義縣民雄鄉大學路一段431號",
        URL: "https://maps.app.goo.gl/CBhqgwtLrYqdkqb48",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 1400,
            startTimePm: 1700,
            endTimePm: 2100,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: false,
            mid: true,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: true, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "123活力早餐屋",
        place: "621嘉義縣民雄鄉大學路一段437號",
        URL: "https://maps.app.goo.gl/4SdGGJVa4HJU1xy7A",
        IMG: "",
        time: {
            startTimeAm: 630,
            endTimeAm: 1430,
            startTimePm: 0,
            endTimePm: 0,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: true,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "侯記中式早餐",
        place: "621嘉義縣民雄鄉",
        URL: "https://maps.app.goo.gl/1uFybFsDQHKoU8u19",
        IMG: "",
        time: {
            startTimeAm: 600,
            endTimeAm: 1400,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: false,
        },
        address: {
            big: false,
            smlle: true,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: true,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: true, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "財哥鹹酥雞",
        place: "621嘉義縣民雄鄉升學路",
        URL: "https://maps.app.goo.gl/Vn2NERpJWGEiLse27",
        IMG: "",
        time: {
            startTimeAm: 1800,
            endTimeAm: 200,
            startTimePm: 0,
            endTimePm: 0,
            Mon: false,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: false,
            smlle: true,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: true, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: false, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "鮮茶道",
        place: "621嘉義縣民雄鄉神農路129之3號",
        URL: "https://maps.app.goo.gl/fjtb69et46jzHCPb9",
        IMG: "",
        time: {
            startTimeAm: 1030,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "Tea's原味",
        place: "621嘉義縣民雄鄉神農路129-1號",
        URL: "https://maps.app.goo.gl/nyGntfac9g2H5DJM7",
        IMG: "",
        time: {
            startTimeAm: 1000,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "茶湯會",
        place: "621嘉義縣民雄鄉神農二街9號1 樓",
        URL: "https://maps.app.goo.gl/Fn9jc6UPkFpsnfDZA",
        IMG: "",
        time: {
            startTimeAm: 1130,
            endTimeAm: 2100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
    {
        name: "果真現打真果汁",
        place: "621嘉義縣民雄鄉神農路93號",
        URL: "https://maps.app.goo.gl/Y3meEjRA2X6Av1kd6",
        IMG: "",
        time: {
            startTimeAm: 1700,
            endTimeAm: 100,
            startTimePm: 0,
            endTimePm: 0,
            Mon: true,
            Tue: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        address: {
            big: true,
            smlle: false,
            mid: false,
            school: false,
            ming: false,
        },
        tag: {
            rice: false,
            noodle: false,
            hamberger: false,
            love: false, //滷味
            SaltWaterChicken: false, //鹹水雞
            curry: false, //咖哩
            fried: false, //炸物
            brunch: false, //早午餐
            dumpling: false, //餃類
            salad: false, //沙拉
            hotpot: false, //火鍋
            korean: false, //韓式
            Taco: false, //塔可
            ice: false, //冰
            dessert: false, //甜點
            drink: true, //飲料
            bread: false, //麵包
            gruel: false, //粥
            wine: false, //酒
        },
    },
];
/*document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        const addressType = (event.target as HTMLElement).getAttribute('data-address');
        if (addressType) {
            Object.keys(TEST).forEach(key => {
                TEST[key as keyof Address] = false; // Reset all to false
            });
            TEST[addressType as keyof Address] = true; // Set the clicked one to true

            console.log(TEST);
        }
    });
});*/
var randomNumber = -1;
var randomTemp = -1;
var clickTimes = -1;
function clickTime() {
    clickTimes++;
    if (clickTimes > 50)
        randomNumber = 9;
}


function tagthisRice(){
    if(test.tag.rice==false){
        document.getElementById("riceTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BB%91%E9%A3%AF.png?raw=true";
        test.tag.rice=true;
    }
    else{
        document.getElementById("riceTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%99%BD%E9%A3%AF.png?raw=true"
        test.tag.rice=false;
    }
}
function tagthisNoodle(){
    if(test.tag.noodle==false){
        document.getElementById("noodleTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BA%B5%E9%BB%91.png?raw=true";
        test.tag.noodle=true;
    }
    else{
        document.getElementById("noodleTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BA%B5%E7%99%BD.png?raw=true"
        test.tag.noodle=false;
    }
}
function tagthisHamberger(){
    if(test.tag.hamberger==false){
        document.getElementById("hambergerTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BB%91%E6%BC%A2%E5%A0%A1.png?raw=true";
        test.tag.hamberger=true;
    }
    else{
        document.getElementById("hambergerTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%99%BD%E6%BC%A2%E5%A0%A1.png?raw=true"
        test.tag.hamberger=false;
    }
}
function tagthisLove(){
    if(test.tag.love==false){
        document.getElementById("loveTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%BB%B7%E5%91%B3%E9%BB%91.png?raw=true";
        test.tag.love=true;
    }
    else{
        document.getElementById("loveTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%BB%B7%E5%91%B3%E7%99%BD.png?raw=true"
        test.tag.love=false;
    }
}
function tagthisSaltWaterChicken(){
    if(test.tag.SaltWaterChicken==false){
        document.getElementById("saltwaterchickenTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%B9%B9%E6%B0%B4%E9%9B%9E%E9%BB%91.png?raw=true";
        test.tag.SaltWaterChicken=true;
    }
    else{
        document.getElementById("saltwaterchickenTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%B9%B9%E6%B0%B4%E9%9B%9E%E7%99%BD.png?raw=true"
        test.tag.SaltWaterChicken=false;
    }
}
function tagthisCurry(){
    if(test.tag.curry==false){
        document.getElementById("curryTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%92%96%E5%93%A9%E9%BB%91.png?raw=true";
        test.tag.curry=true;
    }
    else{
        document.getElementById("curryTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%92%96%E5%93%A9%E7%99%BD.png?raw=true"
        test.tag.curry=false;
    }
}
function tagthisFried(){
    if(test.tag.friede==false){
        document.getElementById("friedTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%82%B8%E9%BB%91.png?raw=true";
        test.tag.fried=true;
    }
    else{
        document.getElementById("friedTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%82%B8%E7%99%BD.png?raw=true"
        test.tag.fried=false;
    }
}
function tagthisBrunch(){
    if(test.tag.brunch==false){
        document.getElementById("brunchTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%97%A9%E5%8D%88%E9%A4%90%E9%BB%91.png?raw=true";
        test.tag.brunch=true;
    }
    else{
        document.getElementById("brunchTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%97%A9%E5%8D%88%E9%A4%90%E7%99%BD.png?raw=true"
        test.tag.brunch=false;
    }
}
function tagthisDumpling(){
    if(test.tag.dumpling==false){
        document.getElementById("dumplingTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%A4%83%E9%BB%91.png?raw=true";
        test.tag.dumpling=true;
    }
    else{
        document.getElementById("dumplingTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%A4%83%E7%99%BD.png?raw=true"
        test.tag.dumpling=false;
    }
}
function tagthisSaild(){
    if(test.tag.salad==false){
        document.getElementById("saildTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%B2%99%E6%8B%89%E9%BB%91.png?raw=true";
        test.tag.salad=true;
    }
    else{
        document.getElementById("saildTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E6%B2%99%E6%8B%89%E7%99%BD.png?raw=true"
        test.tag.salad=false;
    }
}
function tagthisHotpot(){
    if(test.tag.hotpote==false){
        document.getElementById("hotpotTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%81%AB%E9%8D%8B%E9%BB%91.png?raw=true";
        test.tag.hotpot=true;
    }
    else{
        document.getElementById("hotpotTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%81%AB%E9%8D%8B%E7%99%BD.png?raw=true"
        test.tag.hotpot=false;
    }
}
function tagthisKorean(){
    if(test.tag.korean==false){
        document.getElementById("koreanTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%9F%93%E5%BC%8F%E9%BB%91.png?raw=true";
        test.tag.korean=true;
    }
    else{
        document.getElementById("koreanTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%9F%93%E5%BC%8F%E7%99%BD.png?raw=true"
        test.tag.korean=false;
    }
}
function tagthisTaco(){
    if(test.tag.Taco==false){
        document.getElementById("tacoTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%A1%94%E5%8F%AF%E9%BB%91.png?raw=true";
        test.tag.Taco=true;
    }
    else{
        document.getElementById("tacoTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%A1%94%E5%8F%AF%E7%99%BD.png?raw=true"
        test.tag.Taco=false;
    }
}
function tagthisIce(){
    if(test.tag.ice==false){
        document.getElementById("iceTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%86%B0%E9%BB%91.png?raw=true";
        test.tag.ice=true;
    }
    else{
        document.getElementById("iceTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E5%86%B0%E7%99%BD.png?raw=true"
        test.tag.ice=false;
    }
}
function tagthisDessert(){
    if(test.tag.dessert==false){
        document.getElementById("dessertTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%94%9C%E9%BB%9E%E9%BB%91.png?raw=true";
        test.tag.dessert=true;
    }
    else{
        document.getElementById("dessertTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%94%9C%E9%BB%9E%E7%99%BD.png?raw=true"
        test.tag.dessert=false;
    }
}
function tagthisDrink(){
    if(test.tag.drink==false){
        document.getElementById("drinkTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%A3%B2%E6%96%99%E9%BB%91.png?raw=true";
        test.tag.drink=true;
    }
    else{
        document.getElementById("drinkTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%A3%B2%E6%96%99%E7%99%BD.png?raw=true"
        test.tag.drink=false;
    }
}
function tagthisBread(){
    if(test.tag.bread==false){
        document.getElementById("breadTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BA%B5%E5%8C%85%E9%BB%91.png?raw=true";
        test.tag.bread=true;
    }
    else{
        document.getElementById("breadTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%BA%B5%E5%8C%85%E7%99%BD.png?raw=true"
        test.tag.bread=false;
    }
}
function tagthisGruel(){
    if(test.tag.gruel==false){
        document.getElementById("gruelTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%B2%A5%E9%BB%91.png?raw=true";
        test.tag.gruel=true;
    }
    else{
        document.getElementById("gruelTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E7%B2%A5%E7%99%BD.png?raw=true"
        test.tag.gruel=false;
    }
}
function tagthisWine(){
    if(test.tag.wine==false){
        document.getElementById("wineTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%85%92%E9%BB%91.png?raw=true";
        test.tag.wine=true;
    }
    else{
        document.getElementById("wineTag").src="https://github.com/CCUFood/CCUFood.github.io/blob/main/%E9%85%92%E7%99%BD.png?raw=true"
        test.tag.wine=false;
    }
}
var clickTimes = 0; // 記錄點擊次數
function Duckthis() {
    var count = Math.floor(Math.random() * 50) + 1; // 隨機生成1到50之間的數字
    
    var counter = 0; // 計數器，用來遍歷食物陣列
    var foundMatch = false; // 標記是否找到匹配項
    
    clickTimes++;

    while (!foundMatch) {
        var foodTags = foodArray[counter].tag; // 當前食物的標籤
        var testTags = test.tag; // 測試標籤

        // 檢查食物是否符合任何一個標籤
        if ((testTags.rice && foodTags.rice) ||
            (testTags.noodle && foodTags.noodle) ||
            (testTags.hamburger && foodTags.hamburger) ||
            (testTags.SaltWaterChicken && foodTags.SaltWaterChicken) ||
            (testTags.curry && foodTags.curry) ||
            (testTags.fried && foodTags.fried) ||
            (testTags.brunch && foodTags.brunch) ||
            (testTags.dumpling && foodTags.dumpling) ||
            (testTags.salad && foodTags.salad) ||
            (testTags.hotpot && foodTags.hotpot) ||
            (testTags.korean && foodTags.korean) ||
            (testTags.Taco && foodTags.Taco) ||
            (testTags.ice && foodTags.ice) ||
            (testTags.dessert && foodTags.dessert) ||
            (testTags.drink && foodTags.drink) ||
            (testTags.bread && foodTags.bread) ||
            (testTags.gruel && foodTags.gruel) ||
            (testTags.wine && foodTags.wine)) {
            count--;
        }

        if (count == 0) {
            // 更新網頁上的食物名稱和圖片
            document.getElementById("food").innerHTML = foodArray[counter].name;
            document.getElementById("Foodimg").src = foodArray[counter].URL;
        
            foundMatch = true;
        } else {
            counter++;
            if (counter == foodArray.length) {
                counter = 0;
            }
        }
    }

    document.getElementById("clicks").innerHTML = clickTimes;
}
