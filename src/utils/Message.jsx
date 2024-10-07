const Message = ({user, message}) => { 
    
    return(
        <div className="message">
            <p>{user} : {message}</p>
           
        </div>
    )
}

export default Message;