import "./stories.scss"

const Stories = () => {

    const stories =  [
        {
            id: 1,
            name: "User 1",
            img: "https://th.bing.com/th/id/OIP.sFEzVRZcZuB1gAQMBrCZYQHaHd?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

        },
        {
            id: 2,
            name: "User 2",
            img: "https://i.pinimg.com/736x/91/42/73/914273cbd8f785c3333c77bad47461a5--funny-snaps-funny-snapchat.jpg",
        },
        {
            id: 3,
            name: "User 3",
            img: "https://th.bing.com/th/id/OIP.8jglX7qoUguHAUCndJgPSQHaIV?w=141&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
            id: 4,
            name: "User 4",
            img: "https://th.bing.com/th/id/OIP.oaJ4feG5iI-kMooqGMFTCAHaHa?w=144&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
