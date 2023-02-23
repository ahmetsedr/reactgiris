import axios from "axios";

async function getData(item) {
    try {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + item)
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + item)

        console.log("USERS : ", users)
        console.log("POSTS : ", posts)
    }
    catch (err) {
        console.log(err)
    }
}


export default getData