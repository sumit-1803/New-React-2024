const Hello = (props) => {
    console.log("The props are : " , props);
    return <div>
        <p>Hello {props.name} and you are {props.age} years old. </p>
    </div>
}

export default Hello