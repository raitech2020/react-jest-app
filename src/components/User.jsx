const User = (props) => {
    const {id, name, age} = props.user
    const style = age >= 18 ? {color: 'green'} : {color: 'red'}
    console.log(id, name, age)

    return (
        <div data-testid={`user-${id}`} style={style}>{name}</div>
    )
}

export default User
