function Profile2({name, age, isPremium, interests}) {
    return (
        <div>
            <p>Name: <strong>{name}</strong></p>
            <p>Age: {age}</p>
            <p>Premium User: {isPremium ? "Yes" : "No"}</p>
            <p>Interests: {interests.join(", ")}</p>
        </div>
    )
}

export default Profile2