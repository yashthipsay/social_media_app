import "./stories.scss"

const Stories = () => {

    const stories =  [
        {
            id: 1,
            name: "Vedhas",
            img: "https://www.bing.com/th?id=OIP.elsFR0nGNovY5ZY1R1q6HQHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",

        },
        {
            id: 2,
            name: "Sumedh",
            img: "https://www.bing.com/th?id=OIP.Bd5U7c_iE0A8qYMwXVZxgQHaHa&w=114&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        },
        {
            id: 3,
            name: "Tejas",
            img: "https://www.bing.com/th?id=OIP.nyYGmY3Ga6sKesenP_2FUAHaHa&w=97&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        },
        {
            id: 4,
            name: "Kimaya",
            img: "https://th.bing.com/th/id/OIP.ZZAwh-caYi9kzE-oWZh7zAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
    ];
    return (
        <div className="stories">
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
))}
        </div>
    )
}

export default Stories
